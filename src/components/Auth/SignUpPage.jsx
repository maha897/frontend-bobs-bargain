import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../service/api";

const initForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
};

function SignUpPage() {
  const { setUser, setUserId, setToken } = useContext(Context);
  const [inputData, setInputData] = useState(initForm);
  const navigate = useNavigate();

  async function submitForm(event) {
    event.preventDefault();

    try {
      const signupResponse = await signup(inputData);
      console.log(inputData);
      setUser(signupResponse);
      // Get token and id
      const loginResponse = await login({
        email: inputData.email,
        password: inputData.password,
      });
      // Set state
      setToken(loginResponse.token);
      setUserId(loginResponse.id);
      // Set localstorage
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("id", loginResponse.id);
      // Go to main view
      navigate("/");
    } catch (error) {
      console.error("Could not sign up");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
        <h2>Sign up</h2>
        <div className="line-div">
          <hr></hr>
          <br />
        </div>
        <form className="signup-form" onSubmit={submitForm}>
          <label htmlFor="firstName">First name</label> <br />
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={inputData.firstName}
            required
            placeholder="First name*"
          />
          <label htmlFor="lastName">Last name</label> <br />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={inputData.lastName}
            required
            placeholder="Last name*"
          />
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputData.email}
            required
            placeholder="Email*"
          />
          <label htmlFor="phone">Phone</label> <br />
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={inputData.phone}
            required
            placeholder="Phone*"
          />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputData.password}
            required
            placeholder="Password*"
          />
          <br />
          <br />
          <button type="submit">Create user</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
