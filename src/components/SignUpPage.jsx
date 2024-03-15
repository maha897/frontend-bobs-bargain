function SignUpPage() {
    return (
      <div className="signup-page-container">
        <div className="signup-form-container">
          <form className="signup-form">
            <label htmlFor="firstname">First name</label> <br />
            <input type="text" name="firstname" />
            <br />
            <br />
            <label htmlFor="lastname">Last name</label> <br />
            <input type="text" name="lastname" />
            <br />
            <br />
            <label htmlFor="email">Email</label> <br />
            <input type="email" name="email" />
            <br />
            <br />
            <label htmlFor="phone">Phone</label> <br />
            <input type="number" name="phone" />
            <br />
            <br />
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" />
            <br />
            <br />
            <button>Create user</button>
          </form>
        </div>
      </div>
    );
}

export default SignUpPage