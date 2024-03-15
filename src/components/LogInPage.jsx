function LoginPage() {
    return (
      <div className="login-page-container">
        <div className="login-form-container">
          <form className="login-form">
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" />
            <br />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" />
            <br />
            <br />

            <button>Log in</button>
          </form>
        </div>
      </div>
    );
}

export default LoginPage