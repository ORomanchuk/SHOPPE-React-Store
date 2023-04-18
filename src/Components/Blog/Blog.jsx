import "./blog.css";
import img1 from "../../Img/blog1.png";
import img2 from "../../Img/blog2.png";
import img3 from "../../Img/blog3.png";
import img4 from "../../Img/blog4.png";
import React, {useState} from "react";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";
const BlogPage = () => {
    const [articleList, setArticles] = useState([
        {
            "id": "1",
            "photo": img1,
            "category": "Fashion",
            "date": " Oct 8, 2022",
            "title": "Top Trends From Spring",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
        },
        {
            "id": "2",
            "photo": img2,
            "category": "Fashion",
            "date": " Oct 8, 2022",
            "title": "Top Trends From Spring",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
        },
        {
            "id": "3",
            "photo": img3,
            "category": "Fashion",
            "date": " Oct 8, 2022",
            "title": "Top Trends From Spring",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
        },
        {
            "id": "4",
            "photo": img4,
            "category": "Fashion",
            "date": " Oct 8, 2022",
            "title": "Top Trends From Spring",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... "
        }
    ]);

    const [blogCategories, setBlogCategories] = useState([
        {
            "key": "fashion",
            "name": "Fashion"
        },
        {
            "key": "style",
            "name": "Style"
        },
        {
            "key": "accessories",
            "name": "Accessories"
        },
        {
            "key": "season",
            "name": "Season"
        },
    ])


    return (
        <div className="blog">
            <h2>Blog</h2>
            <section className="flexible">
                <aside>
                    <div className="blogSearch">
                        <input type="search" placeholder="Search..."/>
                    </div>
                    <div className="blogCategories">
                        <h3>Categories</h3>
                        {blogCategories.map(element =>
                            <a href="#">{element.name}</a>
                        )}
                    </div>
                </aside>
                <div className="blogContent">
                    {articleList.map(element =>
                        <div className="blogCard">
                            <Link to="/SHOPPE-React-Store/blog/article">
                                <img src={element.photo} alt=""/>
                            </Link>
                            <p className="category">{element.category} - {element.date}</p>
                            <h4 className="title">{element.title}</h4>
                            <p className="description">{element.description}</p>
                            <Link to="/SHOPPE-React-Store/blog/article">
                                <p className="readLink">Read More</p>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

        </div>
    )
}

export default BlogPage;