import { useState } from "react"
import Button from "./Button"

import CardContainer from "./CardContainer"
import FormattedMessage from "./FormattedMessage"
import Input from "./Input"

const RegisterForm = () =>{
    // const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(false)

    var x =''

    var pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    const handleSubmit = () =>{
       
       if (x.length <= 7) {
        setAlert(true)
        console.log(x)
    } else if(x.match(pattern)) {
        console.log(x)
        setAlert(true)
    } else {
        console.log(x)
        setAlert(false)
    }
}

    return(
        <CardContainer>
            <h1>Register</h1>
            
                <p>username</p>
                <Input placeholder='username'/>
                <p>password</p>
                {alert && <FormattedMessage type={'alert'}>password must have 8 characters, a symbol, and a capital</FormattedMessage>}
                <Input
                onChange = {(e)=>{x = (e.target.value)}}
                placeholder='password'/>
                <Button type='button' onClick={handleSubmit}>Register</Button>
            
        </CardContainer>
    )

}

export default RegisterForm