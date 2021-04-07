import React from 'react'
import styled from 'styled-components'


const FormContent = styled.div`
width: 100%;
text-align: center;
`
const Form = styled.form``
const FormTitle = styled.h1``
const FormInputs = styled.div``
const FormLabel = styled.label``
const FormInput = styled.input``
const FormButton = styled.button``
const Already = styled.span``





const SignUpLogIn = () => {
    return (
        <FormContent>
            <Form>
                <FormTitle>get started today</FormTitle>
                <FormInputs>
                    <FormLabel htmlFor='username'>Username </FormLabel>
                    <FormInput id='username' type='text' name='username' placeholder='enter username' />
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='email'>email </FormLabel>
                    <FormInput id='email' type='email' name='email' placeholder='enter email' />
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='password'>password </FormLabel>
                    <FormInput id='password' type='password' name='password' placeholder='enter password' />
                </FormInputs>
                <FormInputs>
                    <FormLabel htmlFor='confirm password'>confirm password </FormLabel>
                    <FormInput id='confirm password' type='confirm password' name='confirm password' placeholder='enter confirm password' />
                </FormInputs>

                <FormButton type='submit'>Sign Up</FormButton>
            </Form>
            <Already>Already have an account? <a href='#'>sign in here</a></Already>

        </FormContent>
    )
}

export default SignUpLogIn
