import React, { useState } from 'react'
import SignUpLogIn from '../Pages/SignUpLogIn';
import FormSuccess from './FormSucess'

const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return (
        <div>
            {!isSubmitted ? <SignUpLogIn submitForm={submitForm} /> : <FormSuccess />}
        </div>
    )
}

export default Form
