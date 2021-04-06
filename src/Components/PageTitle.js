import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
font-size: 2.5rem;
padding: 3rem;
width: 100%;
text-align: center;
`

const PageTitle = ({ title }) => {
    return (
        <TitleContainer>
            {title}
        </TitleContainer>
    )
}

export default PageTitle
