import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import FullCard from '../Components/FullCard'
import axios from 'axios'

const HomeContainer = styled.div`
position: relative;

`
const Cards = styled.div`
display: grid;
position: relative;
margin-left: 2rem;



  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  grid-template-areas:
    ". . . . "
    ". . . . "
    ". . . . "
    ". . . . "
    ". . . . "
    ". . . . "
    ". . . . ";
    

    `

const Health = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/health.json?api-key=v4qAuP3qx1XstxnWCsStbBmLWancJwa4')
            .then(res => {
                setNews(res.data.results);

            })

    }, [])

    let i;

    let image1 = []
    for (i = 0; i < news.length; i++) {
        image1.push(news[i]['multimedia']['0']['url'])
    }




    return (
        <HomeContainer>

            <Cards>
                {news.map((news, index) => {
                    return (
                        < FullCard key={index} source={image1[index]} title={news.title} details={news.abstract} type={news.section} date={news.published_date} />
                    )
                })}

            </Cards >


        </HomeContainer>

    )
}
export default Health