import React from 'react'
import styled from 'styled-components'
import useForm from '../Components/useForm'
import validate from '../Components/validateInfo'


const FormContent = styled.div`
position: relative;
text-align: left;
width: 100%;

height: 100%;



`
const Form = styled.form`
p{
    color: red;
}
`
const FormTitle = styled.h1`
text-align:center;
position: relative; 
top: 1rem;
padding-bottom: 2rem;
font-family: 'Lato';

`
const FormInputs = styled.div`
position: relative;
left: 10%;


`
const FormLabel = styled.label`
position: relative;
left: 10%;`
const FormInput = styled.input`
position: relative;
margin-bottom: 2rem;
width: 80%;
height: 3rem;
`
const FormButton = styled.button`
position: relative;
left: 10%;
width: 80%;
height: 3rem;
`
const Already = styled.span`
position: absolute;
left: 70%;
top: 95%;
transform: translate(-50%, -50%);
width:100%;
`





const SignUpLogIn = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)




    return (
        <FormContent>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Get started today</FormTitle>
                <FormLabel htmlFor='username'>Username: </FormLabel>
                <FormInputs>
                    <FormInput id='username' type='text' name='username' placeholder='enter username' value={values.username} onChange={handleChange} />
                </FormInputs>
                {errors.username && <p>{errors.username}</p>}
                <FormLabel htmlFor='email'>Email: </FormLabel>
                <FormInputs>
                    <FormInput id='email' type='email' name='email' placeholder='enter email' value={values.email} onChange={handleChange} />
                </FormInputs>
                {errors.email && <p>{errors.email}</p>}
                <FormLabel htmlFor='password'>Password: </FormLabel>
                <FormInputs>
                    <FormInput id='password' type='password' name='password' placeholder='enter password' value={values.password} onChange={handleChange} />
                </FormInputs>
                {errors.password && <p>{errors.password}</p>}
                <FormLabel htmlFor='confirm password'>Confirm password: </FormLabel>
                <FormInputs>
                    <FormInput id='password2' type='password' name='password2' placeholder='enter confirm password' value={values.password2} onChange={handleChange} />
                </FormInputs>
                {errors.password2 && <p>{errors.password2}</p>}


                <FormButton type='submit'>Sign Up</FormButton>
            </Form>
            <Already>Already have an account? <a href='#'>sign in here</a></Already>

        </FormContent>
    )
}

export default SignUpLogIn
