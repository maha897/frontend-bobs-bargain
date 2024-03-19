import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { useParams } from "react-router-dom";

function AdView() {

  const { users } = useContext(Context)

  const { id } = useParams()

  const [ad, setAd] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/listings/${id}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Failed to fetch ad");
            }
            return response.json()
        })

        .then((adData) =>  {
            setAd(adData)
            fetch(`http://localhost:4000/users/${adData.userId}`)
                .then((response) => response.json())
                .then((userData) => setUser(userData))
                .catch((error) => console.log("error fetching user connected to ad: ", error))
        })
        .catch((error) => console.log("error fetching ad: ", error))
  }, [id, users])
  
  if (!ad || !user) {
    return <div>Loading...</div>;
  }

    return (
      <div className="ad-view-container">
        <h2>Detailed add</h2>
        <p>{ad.title}</p>
       
        <p>Category: {ad.category}</p>
        
        <p>Description: {ad.description}</p>
        
        {/* {ad.images.length > 0 && (
            <div className="ad-images">
                {ad.images.map((image, index) => (
                    <img key={index} src="" alt="" />
                ))}
            </div>
        )} */}

        <div className="ad-contact-info">
            <p>Contact person: {user.firstName} {user.lastName}</p>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>  
            <p>Postcode: {ad.postcode}</p> 
            <p>Address: {ad.address}</p>
            <p>City: {ad.city}</p>
        </div>

      </div>
    );
}

AdView.propTypes = {
    ad: PropTypes.object,
}

export default AdView