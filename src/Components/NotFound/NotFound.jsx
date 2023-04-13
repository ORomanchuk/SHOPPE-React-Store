import "./notfound.css";
const NotFound = () => {
    return (
        <div className="notFound flexible">
            <div className="error">
                <h2>404 ERROR</h2>
                <p>This page not found;<br/>back to home and start again</p>
                <a href="/SHOPPE-React-Store"><button>HOMEPAGE</button></a>
            </div>
        </div>
    )
}

export default NotFound;