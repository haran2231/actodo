


function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className="text-center py-5 px-10 border rounded-md flex-grow">
              <h1 className="font-medium text-2xl">{props.title}</h1>
              <p>{props.subtitle}</p>
            </div>
    )
}

export default Card