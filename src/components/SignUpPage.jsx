import { useContext, useState } from "react";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";

const initForm = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
}

function SignUpPage() {
    const { users, setUsers, setUserLoggedIn } = useContext(Context)
    const [inputData, setInputData] = useState(initForm)
    const navigate = useNavigate()

    function submitForm(event) {
      event.preventDefault()
      setUserLoggedIn(inputData)
      setUsers([...users, inputData])
      setInputData(initForm)
      navigate("/")
    }

    function handleChange(event) {
      const { name, value } = event.target
      setInputData({ ...inputData, [name]: value })
    }

    return (
      <div className="signup-page-container">
        <div className="signup-form-container">
          <form className="signup-form" onSubmit={submitForm}>
            <label htmlFor="firstname">First name</label> <br />
            <input
              type="text"
              name="firstname"
              onChange={handleChange}
              value={inputData.firstname}
              required
            />
            <br />
            <br />
            <label htmlFor="lastname">Last name</label> <br />
            <input
              type="text"
              name="lastname"
              onChange={handleChange}
              value={inputData.lastname}
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