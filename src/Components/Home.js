import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FullCard from '../Components/FullCard'
import styled from 'styled-components'
import PageTitle from './PageTitle'


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



const Home = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/us.json?api-key=v4qAuP3qx1XstxnWCsStbBmLWancJwa4')
            .then(res => {
                setNews(res.data.results);

            })

    }, [])

    let i;
    console.log(news);
    let image1 = []
    for (i = 0; i < news.length; i++) {
        image1.push(news[i]['multimedia']['0']['url'])
    }
    console.log(image1);




    return (

        <HomeContainer>
            <PageTitle title={'Home'} />

            <Cards>
                {news.map((news, index) => {
                    return (
                        < FullCard url={news.url} source={image1[index]} key={index} title={news.title} details={news.abstract} type={news.section} date={news.published_date} />
                    )
                })}

            </Cards >


        </HomeContainer>


    )
}

export default Home
