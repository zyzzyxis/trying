import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import CardContainer from '../style_components/CardContainer'
import { AuthContext } from '../providers/AuthProvider'


const Home = () =>{

    const [test, setTest] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        getTest()
    },[])
    const getTest = async() => {
        try { 
        let res = await axios.get('/api/api_test')
        setTest(res.data.hello)
        console.log(res.data.hello)
            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
        <h1>Home Page Here</h1>
       {user && <CardContainer>
            <h1>Welcome back!</h1>
            <h3>How are you today {user.nickname}?</h3>
        </CardContainer> }
        
        </div>
    )
}

// class component

// class Home extends React.Component {


//     render(){
//         return (
//             <div>
//                 <h1>Home Page here</h1>
//             </div>
//         )
//     }
// }
export default Home