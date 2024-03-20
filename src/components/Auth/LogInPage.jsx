import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { fetchUser, login } from "../../service/api";

const initForm = {
  email: "",
  password: "",
};

function LogInPage() {
  const { setUser, setToken, setUserId } = useContext(Context);
  const [inputData, setInputData] = useState(initForm);
  const navigate = useNavigate();

  async function logIn(event) {
    event.preventDefault();

    try {
      const loginResponse = await login(inputData);
      console.log("Logging in...");

      const fetchedToken = loginResponse.token;
      const fetchedId = loginResponse.id;
      setToken(fetchedToken);
      setUserId(fetchedId);
      localStorage.setItem("token", fetchedToken);
      localStorage.setItem("id", fetchedId);

      const userResponse = await fetchUser(fetchedId, fetchedToken);
      setUser(userResponse);

      console.log("Logged in");
      navigate("/");
    } catch (error) {
      console.error("Could not login: ", error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2>Log in</h2>
        <div className="line-div">
          <hr></hr>
          <br />
        </div>
        <form className="login-form" onSubmit={logIn}>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputData.email}
            placeholder="Email*"
          />
          <br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={inputData.password}
            placeholder="Password*"
          />
          <br />
          <button className="button">Log in</button>
          <br />
          <p>
            No user?{" "}
            <Link className="sign-up-form-link" to={"/signup"}>
              Make a new account!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogInPage;
