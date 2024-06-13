import { useState } from "react"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const [eusername , setEusername] = useState()
    const [euserpass , setEuserpass] = useState()
    const user = props.user
    const setuser = props.setUser
    const naviagte = useNavigate()

    function onChangeuser(event){
        setEusername(event.target.value)
    }

    function onChangepass(event){
        setEuserpass(event.target.value)
    }

    function signup(){
        setuser([...user, {username:eusername, password:euserpass}])
        naviagte("/")
    }

    return (

      

        
        <>
            <div className="flex flex-col justify-start gap-3">
                <h1 className="text-3xl font-medium">Hey Hiii!!!!</h1>
                <p>You can signup here</p>
                <input onChange={onChangeuser} className="p-1 border border-black rounded-md w-44" type="text" placeholder="username" required />
                <input onChange={onChangepass} className="p-1 border border-black rounded-md w-44" type="text" placeholder="password" required />
                <input className="p-1 border border-black rounded-md w-44" type="text" placeholder="confirm password" required />
                <input onClick={signup} className="py-1 text-white bg-black w-44" type="button" value="SignUp" />
                <p path>Already signup pls <Link to="/">login?</Link></p>
            </div>
        </>
    )
}

export default Signup