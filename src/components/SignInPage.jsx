function SignInPage() {
    return (
      <div className="signin-page-container">
        <div className="signin-form-container">
          <form className="signin-form">
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

export default SignInPage