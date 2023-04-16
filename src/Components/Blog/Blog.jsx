import "./blog.css";
import React, {useState} from "react";
const BlogPage = () => {
    const [articleList, setArticles] = useState([
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

    // const [current, setCurrent] = useState ('');
    // const [name, setName] = useState ('');
    // const [mail, setMail] = useState ('');
    // const currentReviewHandler = (e) => {
    //     let newValue = e.target.value;
    //     setCurrent(newValue)
    // }
    //
    // const currentNameHandler = (e) => {
    //     let newValue = e.target.value;
    //     setName(newValue)
    // }
    //
    // const currentMailHandler = (e) => {
    //     let newValue = e.target.value;
    //     setMail(newValue)
    // }
    //
    // let currentDate = new Date()
    // const addNewReview = () => {
    //     const newReviews = {
    //         name: name,
    //         review: current,
    //         date: currentDate.toDateString,
    //         rate: 5
    //     }
    //     setReviews([...list, newReviews]);
    //     setName('')
    //     setCurrent('')
    // }
    // let reviewsNumber = list.length;

    return (
        <div className="blog">

        </div>
    )
}

export default BlogPage;