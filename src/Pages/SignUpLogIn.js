import React from 'react'
import styled from 'styled-components'
import useForm from '../Components/useForm'
import validate from '../Components/validateInfo'


const FormContent = styled.div`
width: 100%;
text-align: center;
`
const Form = styled.form`
p{
    color: red;
}
`
const FormTitle = styled.h1``
const FormInputs = styled.div``
const FormLabel = styled.label``
const FormInput = styled.input``
const FormButton = styled.button``
const Already = styled.span``





const SignUpLogIn = ({ submitForm }) => {

    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)




    return (
        <FormContent>
            <Form onSubmit={handleSubmit}>
                <FormTitle>get started today</FormTitle>
                <FormInputs>
                    <FormLabel htmlFor='username'>Username </FormLabel>
                    <FormInput id='username' type='text' name='username' placeholder='enter username' value={values.username} onChange={handleChange} />
                </FormInputs>
                {errors.username && <p>{errors.username}</p>}
                <FormInputs>
                    <FormLabel htmlFor='email'>email </FormLabel>
                    <FormInput id='email' type='email' name='email' placeholder='enter email' value={values.email} onChange={handleChange} />
                </FormInputs>
                {errors.email && <p>{errors.email}</p>}

                <FormInputs>
                    <FormLabel htmlFor='password'>password </FormLabel>
                    <FormInput id='password' type='password' name='password' placeholder='enter password' value={values.password} onChange={handleChange} />
                </FormInputs>
                {errors.password && <p>{errors.password}</p>}

                <FormInputs>
                    <FormLabel htmlFor='confirm password'>confirm password </FormLabel>
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
