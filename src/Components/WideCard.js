import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
position: relative;
width:60rem;
height: 40rem;
margin:0;
box-shadow: 1px 2px 12px -4px #000000;
`
const CardImage = styled.img`
position: relative;
width: 100%; 
height: 25rem;
object-fit: cover;
`
const CardText = styled.div`
position: relative;
padding: 1rem;
background-color: #FFFFFF;
height: 15rem;
;
`
const Title = styled.div`
position: relative;
width: 100%;
height:5rem;
font-size: 2rem;
`
const BottomContainer = styled.div`
display: flex;

`

const Details = styled.div`
position: relative;
width: 100%;
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

const WideCard = ({ source, title, details, type, date }) => {
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

export default WideCard
