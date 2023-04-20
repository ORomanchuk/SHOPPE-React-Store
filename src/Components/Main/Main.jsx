import NewProducts from "../NewProducts/NewProducts";
import Slider from "../Slider/Slider";
import ModalPage from "../modal";
const Main = () => {
    return (
        <div className="mainPage">
            <ModalPage/>
            <Slider/>
            <NewProducts/>
        </div>
    )
}

export default Main;