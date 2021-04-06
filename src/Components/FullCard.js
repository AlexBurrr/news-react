import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PageLink = styled.a`

&:link{
    
    text-decoration: none;
    color: inherit;
}
&:visited{
    color: inherit;
}
&:active{
    color:#1FA0FF;
}
`


const CardContainer = styled.div`
position: relative;
width:30rem;
height: 50rem;
margin:0;
box-shadow: 1px 2px 12px -4px #000000;
cursor: pointer;


`
const ImageContainer = styled.div`
position: relative;
width: 30rem;
height: 35rem;

`

const CardImage = styled.img`
position: relative;
width: 30rem ;
height: 30rem;
object-fit: cover;
`
const CardText = styled.div`
position: relative;
background-color: #FFFFFF;
height: 10rem;
padding: 1rem;
top: -3rem;
;
`
const Title = styled.div`
position: relative;
width: 100%;
height:5rem;
font-size: 1.7rem;


`
const BottomContainer = styled.div`
display: flex;
position: relative;
top:3rem;

`

const Details = styled.div`
position: relative;
width: 100%;
top:2.5rem;
height: 5rem;
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


const FullCard = ({ url, source, title, details, type, date }) => {





    return (
        <PageLink href={url}>
            <CardContainer>
                <ImageContainer>
                    <CardImage src={source} alt='/' />
                </ImageContainer>

                <CardText>
                    <Title>{title}</Title>
                    <Details>{details}</Details>
                    <BottomContainer>
                        <NewsType>{type}</NewsType>
                        <Date>{date}</Date>

                    </BottomContainer>

                </CardText>
            </CardContainer>

        </PageLink>

    )
}

export default FullCard
