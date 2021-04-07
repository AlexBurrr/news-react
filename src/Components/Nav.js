import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const NavContainer = styled.nav`
width:100%;
height: 8rem;
border-bottom: solid 1px #E8EFF2;
display: flex;
align-items: center;
justify-content: space-between;
text-transform: uppercase;

& a:link, a:visited{
    text-decoration: none;
    color: black;
}
`

const SiteIcon = styled.div`
margin-left: 5rem;
`
const ItemUl = styled.ul`
list-style: none;
display: flex;
`
const ItemLi = styled.li`

padding: 2rem;`
const Login = styled.div`
margin-right: 5rem;
`


const Nav = () => {
    return (
        <NavContainer>
            <Link to='/'><SiteIcon>Newwws</SiteIcon></Link>
            <ItemUl>
                <Link to='politics'><ItemLi>Politics</ItemLi></Link>
                <Link to='health'><ItemLi>Health</ItemLi></Link>
                <Link to='buisness'><ItemLi>Buisness</ItemLi></Link>
                <Link to='sports'> <ItemLi>Sports</ItemLi></Link>
                <Link to='tech'><ItemLi>Tech</ItemLi></Link>
            </ItemUl>
            <Link to='/logInSignUp'><Login>LogIn/SignUp</Login></Link>
        </NavContainer>
    )
}

export default Nav
