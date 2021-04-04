import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FullCard from '../Components/FullCard'
import WideCard from '../Components/WideCard'
import SmallCard from '../Components/SmallCard'
import ex from '../Images/example.jpg'





const Home = () => {

    const [news, setNews] = useState(null)


    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=v4qAuP3qx1XstxnWCsStbBmLWancJwa4')
            .then(res => {
                setNews(res.data.results);
            })
    }, [])
    return (
        <div>
            {console.log(news)}
            <FullCard source={news[1].multimedia[2].url} title={news[1].title} details={news[1].description} type={news[1].category} date={news[1].published_at} />
        </div >
    )
}

export default Home
