import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login(props) {

    const [eusername, setEusername] = useState()
    const [euserpass, setEuserpass] = useState()
    const [registereduser, setRegistereduser] = useState(true)
    const naviagte = useNavigate()
    const user = props.user
    //    const setuser = props.setUser


    function onChangeuser(event) {
        setEusername(event.target.value)
    }

    function onChangepass(event) {
        setEuserpass(event.target.value)
    }

    function loginuser() {
        var userfound = false
        user.map(function (item) {
            if (item.username === eusername && item.password === euserpass) {
                console.log("Sucess")
                userfound = true
                setRegistereduser(true) 
                naviagte("/home" , { state: {user:eusername} })
                
            }

            if (userfound === false) {
                userfound = true
                setRegistereduser(false)
            }
        })
    }
    return (
        <>
            <div className="flex flex-col justify-start gap-3">
                <h1 className="text-3xl font-medium">Hey Hii !!!</h1>
                {
                    registereduser ? <p>I help you to manage activities</p> : <p className="text-red-600">You don't have account pls signup</p>
                }
                <input onChange={onChangeuser} className="p-1 border border-black rounded-md w-44" type="text" placeholder="username" required />
                <input onChange={onChangepass} className="p-1 border border-black rounded-md w-44" type="text" placeholder="password" required />
                <input onClick={loginuser} className="py-1 text-white bg-black w-44" type="button" value="Login" />
                <p>Don't you have account <Link to="/signup"><span className="text-blue-700 underline">signup ?</span></Link> </p>
            </div>
        </>
    )
}

export default Login