import "./blog.css";
import img1 from "../../Img/Article1.png";
import img2 from "../../Img/article2.png";
const Article = () => {
    return (
        <div className="article">
            <h2>Fast Fashion, And Faster Fashion</h2>
            <span>by <p>ANNY JOHNSON</p> - October 8,2020</span>
            <img src={img1} alt="img1" className="mainPhoto"/>
            <p className="articleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. </p>
            <p className="articleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
            <img src={img2} alt="img2"className="photo"/>
            <h3>Top trends</h3>
            <p className="articleText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.</p>
            <ul>
                <li>consectetur adipiscing elit. Aliquam placerat</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>sapien tortor faucibus augue</li>
                <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
            </ul>
        </div>
    )
}

export default Article;