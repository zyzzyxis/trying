

import AxiosCallCard from "./AxiosCallCard"
import Button from "./Button"
import CardContainer from "./CardContainer"
import FormattedMessage from "./FormattedMessage"
import Input from "./Input"
import RegisterForm from "./RegisterForm"
const StyledComponents = () =>{
    return(
        <div>
        <Button>Button</Button>
        <Input 
        placeholder='styled input'/>

        <CardContainer>
           <h1>Card </h1>
           
           <p>card body: blah</p>
           <Input placeholder='styleinputstuff'/>
           <Button>Button in da card</Button>
        </CardContainer>

        <RegisterForm />

        <CardContainer>
            <h1>Messages</h1>
        <FormattedMessage type={'alert'}>Alert</FormattedMessage>
        <FormattedMessage type={'warn'}>warn</FormattedMessage>
        <FormattedMessage>Notify</FormattedMessage>
        
        </CardContainer>

        <AxiosCallCard />
        </div>
    )
    

}

export default StyledComponents