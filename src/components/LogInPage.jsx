import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";

const initForm = {
    email: "",
    password: ""
}

function LogInPage() {
    const { users, setUserLoggedIn } = useContext(Context)
    const [inputData, setInputData] = useState(initForm)
    const navigate = useNavigate()

    function logIn(event) {
        event.preventDefault()
        const user = users.find((user) => user.email === inputData.email)

        if (user && user.password === inputData.password) {
            setUserLoggedIn(user)
            setInputData(initForm)
            navigate("/")
        } else {
            alert("Invalid email or password");
        }
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