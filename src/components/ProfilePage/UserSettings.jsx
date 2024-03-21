import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import AccountHeader from "./AccountHeader";
import { login, updateUserSettings } from "../../service/api";

function UserSettings() {
  const { user, setUser, token } = useContext(Context);
  const [inputData, setInputData] = useState({...user, password: ""});
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      console.log("InputPassword: ", inputPassword);
      console.log(user.email);
      const loginResponse = await login({
        email: user.email,
        password: inputPassword,
      });
      console.log(loginResponse);

      const userId = user.id;
      // Update user on server
      await updateUserSettings(userId, token, inputData);
      console.log(inputData);
      // Set local user to the updated user
      setUser(inputData);

      navigate("/profile");
    } catch (error) {
      console.log("Error updating user settings: ", error);
      alert("Error updating user settings. Incorrect password.");
    }
  }

  return (
    <div className="user-settings">
      <AccountHeader />

      <form className="user-settings-form" onSubmit={handleSubmit}>
        <div className="label-div">
          <label htmlFor="firstName" className="settings-fname">
            First name
          </label>
          <label htmlFor="lastName" className="settings-lname">
            Last name
          </label>
        </div>
        <div className="name-div">
          {" "}
          <br />
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={inputData?.firstName}
            required
          />
          <br />
          <br />
          <br />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={inputData?.lastName}
            required
          />
          <br />
          <br />
        </div>
        <br />
        <div className="rest">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputData?.email}
            required
          />
          <br />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={inputData?.phone}
            required
          />
          <br />
          <br />
  
          <label htmlFor="old-password">Current password to confirm</label>
          <input
            type="password"
            name="old-password"
            onChange={(e) => setInputPassword(e.target.value)}
            value={inputPassword}
            required
          />
          <br />
          <br />
          <button type="submit">Save changes</button>
        </div>
      </form>
    </div>
  );
}

export default UserSettings;
