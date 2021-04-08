import React, { useState } from 'react'
import SignUpLogIn from '../Pages/SignUpLogIn';
import FormSuccess from './FormSucess'
import styled from 'styled-components'

const FormContainer = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
text-align: left;
border-radius: .5rem;
height: 40rem;
width: 30rem;
box-shadow: 4px 7px 15px 5px rgba(0,0,0,0.15);



`


const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <FormContainer>
            {!isSubmitted ? <SignUpLogIn submitForm={submitForm} /> : <FormSuccess />}
        </FormContainer>
    )
}

export default Form
