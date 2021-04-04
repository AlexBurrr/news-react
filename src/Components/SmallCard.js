import React from 'react'
import styled from 'styled-components'


const CardContainer = styled.div`
position: relative;
width:30rem;
height: 15rem;
margin:0;
box-shadow: 1px 2px 12px -4px #000000;
`

const CardText = styled.div`
position: relative;
padding: 1rem;
background-color: #FFFFFF;
height: 7rem;
;
`
const Title = styled.div`
position: relative;
width: 100%;
height:4rem;
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



const SmallCard = ({ title, details, type, date }) => {
    return (
        <CardContainer>
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

export default SmallCard
