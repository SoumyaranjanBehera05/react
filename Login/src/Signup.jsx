

function Signup() {
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
            </div>

            <div className="inputs">
                <div className="input">
                    <img src="./user.png" alt="" />
                    <input type="text" placeholder="Username" />
                </div>

                <div className="input">
                    <img src="./mail.png" alt="" />
                    <input type="text" placeholder="Email address" />
                </div>

                <div className="input">
                    <img src="./password.png" alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="forgot-password">Already have an account? <span>Sign In !</span></div>

            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
        </div>
    )
}
export default Signup