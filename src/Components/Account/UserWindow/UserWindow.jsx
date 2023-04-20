import "./userWindow.css";
const UserWindow = () => {
    return (
        <div className="userWindow">
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur esse est laborum necessitatibus numquam placeat rem sequi, veritatis voluptates? you Forgotten Your Password ?</h2>
            <p>If you've forgotten your password, enter your e-mail address and we'll send you an e-mail </p>
            <input className="mainFormInput" type="email" placeholder="Email"/>
            <button>RESET PASSWORD</button>
        </div>
    )
}

export default UserWindow;