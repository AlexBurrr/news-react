import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;
width:30rem;
height: 40rem;
margin:0;
box-shadow: 1px 2px 12px -4px #000000;
`
const CardImage = styled.img`
position: relative;
background-color: blue;
width: 100%; 
height: 15rem;
object-fit: cover;
`
const CardText = styled.div`
position: relative;
padding: 1rem;
background-color: #FFFFFF;
height: 20rem;
;
`
const Title = styled.div`
position: relative;
width: 100%;
height:6rem;
font-size: 1.7rem;
`
const BottomContainer = styled.div`
display: flex;
position: relative;
top:8rem;

`

const Details = styled.div`
position: relative;
width: 100%;
top:2rem;
height: 7rem;
font-size: 1rem;
color: #88959D;
`
const NewsType = styled.div`
padding-right:1rem;
border-right: .1rem solid #85919C;
color: #1D9FFF;
text-transform: uppercase;
`
const Date = styled.div`
position: relative;
padding-left: 1rem;
color: #8A969F;
`


const FullCard = ({ source, title, details, type, date }) => {

    const [news, setNews] = useState([])


    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=v4qAuP3qx1XstxnWCsStbBmLWancJwa4')
            .then(res => {
                setNews(res.data.results);

            })

    }, [])



    return (
        <CardContainer>
            <CardImage src={source} alt='/' />
            <CardText>
                <Title>{title}</Title>
                <Details>{details}</Details>
                <BottomContainer>
                    <NewsType>{type}</NewsType>
                    <Date>{date}</Date>

                </BottomContainer>

            </CardText>
        </CardContainer>
    )
}

export default FullCard
