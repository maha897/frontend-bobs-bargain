import { useContext, useState } from "react"
import { Context } from "../../App"
import { useNavigate } from "react-router-dom";
import AccountHeader from "./AccountHeader";

function UserSettings() {
    const { userLoggedIn, setUserLoggedIn, users, setUsers } = useContext(Context)
    const [inputData, setInputData] = useState(userLoggedIn)
    const navigate = useNavigate()

    function handleChange(event) {
        const { name, value } = event.target
        setInputData({ ...inputData, [name]: value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        const updatedUsers = users.map((user) => user.id === userLoggedIn.id ? inputData : user)

        setUsers(updatedUsers)
        setUserLoggedIn(inputData)
        navigate("/profile")
    }

    return (
      <div className="user-settings">
        <AccountHeader />

        <form className="user-settings-form" onSubmit={handleSubmit}>
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
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
}

export default UserSettings