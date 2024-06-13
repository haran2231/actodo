// import {useLocation} from "react-router-dom"
function Header(props){

    // const data = useLocation()
    return(
        <>
            <h1 className="text-3xl font-medium">Hello {props.name} </h1>
            <p>I help you manage activities:)</p>
        </>
    )
}

export default Header;