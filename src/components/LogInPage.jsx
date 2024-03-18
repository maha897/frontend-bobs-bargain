import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import axios from "axios";

const initForm = {
    email: "",
    password: ""
}

function LogInPage() {
    const { users, setUserLoggedIn } = useContext(Context)
    const [inputData, setInputData] = useState(initForm)
    const { setToken } = useContext(Context)
    const navigate = useNavigate()

    function logIn(event) {
        event.preventDefault()
      
        axios.post("http://localhost:4000/auth/login", inputData)
          .then((resp) => {
            const data = resp.data
            if (data.token) {
              const user = users.find((user) => user.email === data.email);

              setUserLoggedIn(user)
              localStorage.setItem("token", data.token)
              localStorage.setItem("userLoggedIn", user.id)
              setToken(data.token)
              setInputData(initForm);
              navigate("/")
            } else {
              alert("Authentication failed.")
            }
          })
        /*
        const user = users.find((user) => user.email === inputData.email)

        if (user && user.password === inputData.password) {
            setUserLoggedIn(user)
            setInputData(initForm)
            navigate("/")
        } else {
            alert("Invalid email or password");
        }*/
    }  

    function handleChange(event) {
        const { name, value } = event.target
        setInputData({ ...inputData, [name]: value })
    }

    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <form className="login-form" onSubmit={logIn}>
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" onChange={handleChange} value={inputData.email}/>
            <br />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" onChange={handleChange} value={inputData.password}/>
            <br />
            <br />
            <button>Log in</button>
          </form>
        </div>
      </div>
    );
}

export default LogInPage