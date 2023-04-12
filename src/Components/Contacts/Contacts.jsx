import "./contacts.css";
const Contacts = () => {
    return (
        <div className="contacts">
            <h2>Contact Us</h2>
            <p>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
            <form>
                <div className="formData flexible">
                    <input type="text" placeholder="First name" required/>
                    <input type="text" placeholder="First name" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="text" placeholder="Subject" required/>
                </div>
                <textarea placeholder="Message" required></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default Contacts;