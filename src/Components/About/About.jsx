import "./about.css";
import about1 from "../../Img/About1.png"
import about2 from "../../Img/About2.png"
const About = () => {

    return (
        <div className="about">
            <h2>About</h2>
            <h4>Who we are and why we do what we do!</h4>
            <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <h3>Top trends</h3>
            <img src={about1} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
            <ul>
                <li>consectetur adipiscing elit. Aliquam placerat</li>
                <li> Lorem ipsum dolor sit amet consectetur</li>
            </ul>
            <h3>Produced with care</h3>
            <img src={about2} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
        </div>
    )
}

export default About;