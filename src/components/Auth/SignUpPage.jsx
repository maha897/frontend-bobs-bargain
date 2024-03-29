import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate, Link } from "react-router-dom";
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
        </div>
        <form className="signup-form" onSubmit={submitForm}>
          <div className="name-field">
            <input
              type="text"
              name="firstName"
              className="first-name-input"
              onChange={handleChange}
              value={inputData.firstName}
              required
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={inputData.lastName}
              required
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputData.email}
            required
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            onChange={handleChange}
            value={inputData.phone}
            required
            placeholder="Phone"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputData.password}
            required
            placeholder="Password"
          />
          <br/>
          <button type="submit">Create user</button>
        </form>
        <br/>
        <p>
          Already have an account?{" "}
          <Link className="sign-up-form-link" to={"/login"}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
