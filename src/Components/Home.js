import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FullCard from '../Components/FullCard'
import WideCard from '../Components/WideCard'
import SmallCard from '../Components/SmallCard'
import ex from '../Images/example.jpg'





const Home = () => {

    const [news, setNews] = useState([])
    const [image, setImage] = useState([])

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=v4qAuP3qx1XstxnWCsStbBmLWancJwa4')
            .then(res => {
                setNews(res.data.results);

            })

    }, [])


    let i;

    let image1 = []
    for (i = 0; i < news.length; i++) {
        image1.push(news[i]['multimedia']['3']['url'])
    }

    console.log(image1[0]);


    return (
        <div>
            {news.map((news, index) => {
                return (
                    < FullCard key={index} source={image1[index]} title={news.title} details={news.abstract} type={news.section} date={news.published_date} />
                )
            })}

        </div >
    )
}

export default Home
