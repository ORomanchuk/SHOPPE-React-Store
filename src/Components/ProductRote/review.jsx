import "./productRote.css";
import React, {useState} from "react";
import StarRatings from "react-star-ratings";
const Review = () => {
    const [list, setReviews] = useState([
        {
            "name": "Maria Silva",
            "review": "Este livro é simplesmente incrível! A escrita é envolvente e a trama é cativante. Eu não conseguia parar de ler até chegar ao fim.",
            "rate": 4,
            "country": "Portugal",
            "date": "Jun 25 2023"
        },
        {
            "name": "Marco Rossi",
            "review": "Questa compagnia di viaggi ha organizzato un'esperienza fantastica per me e la mia famiglia. Siamo stati molto soddisfatti del nostro tour e dei servizi offerti.",
            "rate": 5,
            "country": "Italy",
            "date": "Dec 15 2022"
        },
        {
            "name": " Katrin Schmidt",
            "review": "Ich bin begeistert von diesem Restaurant! Das Essen war unglaublich lecker und der Service war hervorragend.",
            "rate": 4,
            "country": "Germany",
            "date": "Sep 30 2022"
        },
        {
            "name": "Jean-Pierre Dupont",
            "review": "Je suis très satisfait de la qualité de ce produit. Il répond parfaitement à mes besoins et fonctionne très bien.",
            "rate": 5,
            "country": "France",
            "date": "Jul 02 2022"
        },
        {
            "name": "Ana Gómez",
            "review": "Me encantó el servicio al cliente de esta tienda en línea. El personal fue muy amable y servicial, y el envío fue rápido y sin complicaciones.",
            "rate": 4,
            "country": "Spain",
            "date": "Mar 18 2022"
        }
    ])

    const [current, setCurrent] = useState ('');
    const [name, setName] = useState ('');
    const [mail, setMail] = useState ('');
    const currentReviewHandler = (e) => {
        let newValue = e.target.value;
        setCurrent(newValue)
    }

    const currentNameHandler = (e) => {
        let newValue = e.target.value;
        setName(newValue)
    }

    const currentMailHandler = (e) => {
        let newValue = e.target.value;
        setMail(newValue)
    }

    let currentDate = new Date()
    const addNewReview = () => {
        const newReviews = {
            name: name,
            review: current,
            date: currentDate.toDateString,
            rate: 5
        }
        setReviews([...list, newReviews]);
        setName('')
        setCurrent('')
    }
    let reviewsNumber = list.length;

    return (
        <div className="productReviewsRote flexible">
            <div className="reviewsList">
                <h2 className="reviewListHeader">{reviewsNumber} Reviews</h2>
                <ul className="reviewList">
                    {list.map(element =>
                        <li>
                            <p className="userName">{element.name}</p>
                            {/*<p className="userCountry">{element.country}</p>*/}
                            <p className="postDate">{element.date}</p>
                            <div className="userRating">
                                <StarRatings
                                    rating={element.rate}
                                    starDimension="18px"
                                    starSpacing="5px"
                                />
                            </div>
                            <p className="userReview">{element.review}</p>
                            <hr/>
                        </li>
                    )}
                </ul>

            </div>
            <div className="newReview">
                <h2>Add a Review</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form action="">
                    <textarea name="" id="" placeholder="Your Review*" required onChange={currentReviewHandler} value={current}></textarea>
                    <hr/>
                    <input type="text" placeholder="Enter your name*" required onChange={currentNameHandler} value={name}/>
                    <hr/>
                    <input type="email" placeholder="Enter your Email*" required onChange={currentMailHandler} value={mail}/>
                    <hr className="lastHr"/>
                    <StarRatings
                        rating={5}
                        starDimension="18px"
                        starSpacing="5px"
                    />
                    <label htmlFor="checkbox">
                        <input id="checkbox" type="checkbox" required/>
                        Save my name, email, and website in this browser for the next time I comment
                    </label>
                </form>

                {/*<StarRatings*/}
                {/*    rating={this.state.rating}*/}
                {/*    starRatedColor="blue"*/}
                {/*    changeRating={this.changeRating}*/}
                {/*    numberOfStars={5}*/}
                {/*    name='rating'*/}
                {/*/>*/}
                <button onClick={addNewReview}>Submit</button>
            </div>
        </div>
    )
}

export default Review;