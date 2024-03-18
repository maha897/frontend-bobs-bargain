import { useContext, useState } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
}

function SignUpPage() {
    const { users, setUsers, setUserLoggedIn, setToken } = useContext(Context)
    const [inputData, setInputData] = useState(initForm)
    const navigate = useNavigate()

    function submitForm(event) {
      event.preventDefault()

      axios.post("http://localhost:4000/auth/signup", inputData)
        .then(() => {
          const user = inputData;
          setUsers([...users, user]); 

          axios.post("http://localhost:4000/auth/login", { email: inputData.email, password: inputData.password })
            .then((resp) => {
              if (resp.data.token) {
                setUserLoggedIn(user); 
                setToken(resp.data.token); 
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("userLoggedIn", user.email); 
                setInputData(initForm);
                navigate("/"); 
              } else {
                alert("Authentication failed."); 
              }
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }
      /*
      axios.post("http://localhost:4000/auth/signup", inputData)
        .then((resp) => console.log(resp))
        .then(() => {
          setUserLoggedIn(inputData)
          setUsers([...users, inputData])
          setInputData(initForm)
          navigate("/")          
        })
        .catch((error) => console.log(error))

      axios.post("http://localhost:4000/auth/login", inputData)
        .then((resp) => {
          const { data } = resp;
          if (data.token) {
            const user = users.find((user) => user.email === data.email);

            setUserLoggedIn(inputData);
            localStorage.setItem("token", data.token);
            localStorage.setItem("userLoggedIn", user.id);
            setToken(data.token);
            setInputData(initForm);
            navigate("/");
          } else {
            alert("Authentication failed.");
          }
      });*/
    

    function handleChange(event) {
      const { name, value } = event.target
      setInputData({ ...inputData, [name]: value })
    }

    return (
      <div className="signup-page-container">
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={submitForm}>
            <label htmlFor="firstName">First name</label> <br />
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={inputData.firstName}
              required
            />
            <br />
            <br />
            <label htmlFor="lastName">Last name</label> <br />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={inputData.lastName}
              required
            />
            <br />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={inputData.email}
              required
            />
            <br />
            <br />
            <label htmlFor="phone">Phone</label> <br />
            <input
              type="number"
              name="phone"
              onChange={handleChange}
              value={inputData.phone}
              required
            />
            <br />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={inputData.password}
              required
            />
            <br />
            <br />
            <button type="submit">Create user</button>
          </form>
        </div>
      </div>
    );
}

export default SignUpPage