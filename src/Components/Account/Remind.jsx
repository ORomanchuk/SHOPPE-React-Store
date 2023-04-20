import "./account.css";
const Remind = () => {
    return (
        <div className="remind">
            <h2>Have you Forgotten Your Password ?</h2>
            <p>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </p>
            <input className="mainFormInput" type="email" placeholder="Email"/>
            <button>RESET PASSWORD</button>
        </div>
    )
}

export default Remind;