import React  from 'react';
import Modal from 'react-modal';
import './modal.css';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import topImg from "../Img/36441502442545607.jpg";
import leftImg from "../Img/BDAY-L.jpg";
import rightImg from "../Img/BDAY-R.jpg";

const customStyles = {
    content: {
        zIndex: '100',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '80%'
    },
};

const ModalPage = () => {
    const { width, height } = useWindowSize()
    // let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    // function afterOpenModal() {
    //     subtitle.style.color = '#f00';
    // }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="buttonCase">
                <button className="startModal" onClick={openModal}>
                    <svg width="20" height="26" viewBox="0 0 20 26" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0262 17.895C12.2894 17.3424 10.3157 14.7634 9.76308 14.0003C9.05255 12.9739 7.15782 9.52657 6.97361 8.36868L6.89466 7.44763L8.47361 6.15815L6.71045 1.02657L5.65782 0.631836L1.84203 1.05289L0.710449 1.50026C0.710449 1.50026 1.68413 17.1318 15.6841 25.3687C15.6841 25.3687 16.1052 25.2897 16.8947 25.1318L19.0526 22.2634L19.2368 21.0529L15.1841 17.7897L13.4473 18.1581L13.0262 17.895Z"></path></svg>
                </button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modalWindow">
                    {/*<Confetti*/}
                    {/*    width={width * 0.5}*/}
                    {/*    height={height  * 0.8}*/}
                    {/*/>*/}
                    {/*<img className="topImg" src={topImg} alt=""/>*/}
                    {/*<div className="modalContent flexible">*/}
                    {/*    <img className="sideImg" src={leftImg} alt=""/>*/}
                    {/*    <div className="textArea">*/}
                    {/*        <p className="wishes">Thanks for being the React master and showing us the way to web development greatness.</p>*/}
                    {/*        <p className="wishes">May your tea always be hot,<br/>your React code always be clean,<br/>and your cat always be by your side.</p>*/}
                    {/*    </div>*/}

                    {/*    <img className="sideImg" src={rightImg} alt=""/>*/}
                    {/*</div>*/}
                </div>

            </Modal>
        </div>
    )
}
export default ModalPage;