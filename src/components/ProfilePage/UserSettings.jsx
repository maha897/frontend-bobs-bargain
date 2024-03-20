import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import { updateUserSettings } from "../../service/api";

function UserSettings() {
  const { user, setUser, token } = useContext(Context);
  const [inputData, setInputData] = useState(user);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    // TODO: PUT REQUEST

    try{
      const userId = user.id
      // Update user on server
      await updateUserSettings(userId, token, inputData)

      // Set local user to the updated user 
      setUser(inputData)

      navigate("/profile");
    } catch (error) {
      console.log("Error updating user settings: ", error)
    }

  }

  return (
    <div className="user-settings">
      <AccountHeader user={user} />

      <form className="user-settings-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={inputData.firstName}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={inputData.lastName}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputData.email}
          required
        />
        <br />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          value={inputData.phone}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputData.password}
          required
        />
        <br />
        <br />
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default UserSettings;
