import "./account.css";
import {useState} from "react";
import {Link} from "react-router-dom";

const Account = () => {
    const [isActive, setActive] = useState(false);
    const toggleSingInButton = () => {
        setActive(!isActive);
    };

    const [users, setUser] = useState([
        {
            "id": "1",
            "name": "Marco Rossi",
            "email": "admin@admin.admin",
            "password": "admin",
        }
    ])

    return (
        <div className="account">
            <h2>My account</h2>
            <div className="buttonsContainer">
                <div id="toggleButtons"  className={isActive ? 'toggle-signIn': null}  onClick={toggleSingInButton}>
                    <div className="button"></div>
                    <div className="buttonsNames flexible">
                        <p>Sign in</p>
                        <p>Register</p>
                    </div>
                </div>
            </div>
            <div className="formContainer">
                <div id="accountForm" className={isActive ? 'toggle-signIn': null}>
                    <div className="singInForm">
                        <form action="">
                            <input className="mainFormInput" type="email" placeholder="Email"/>
                            <input className="mainFormInput" type="password" placeholder="Password"/>
                            <label htmlFor="checkbox">
                                <input id="checkbox" type="checkbox"/>
                                Remember me
                            </label>
                            <button>SIGN IN</button>
                        </form>
                        <Link to="/SHOPPE-React-Store/account/remind">Have you forgotten your password?</Link>
                    </div>
                    <div className="registrationForm">
                        <form action="">
                            <input className="mainFormInput" type="text" placeholder="Name"/>
                            <input className="mainFormInput" type="email" placeholder="Email"/>
                            <input className="mainFormInput" type="password" placeholder="Password"/>
                            <label htmlFor="agree">
                                <input id="agree" type="checkbox"/>
                                <p>Agree with </p>
                                <Link to="/SHOPPE-React-Store/terms-of-service"> Terms of use </Link>
                                <p> and </p>
                                <Link to="/SHOPPE-React-Store/privacy-policy"> privacy policy </Link>
                            </label>
                            <button>CREATE AN ACCOUNT</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Account;