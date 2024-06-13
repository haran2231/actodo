

function Todoitem(props) {

    const activityarr = props.activityarr
    const setActivityarr = props.setActivityarr

    const handledelete = (id) => {
       var temarr = activityarr.filter(function(item){
        if(item.id === id){
            return false
        }else{
            return true
        }
       })

       setActivityarr(temarr)
    }

    return (
        <div className="flex justify-between">
            
            <p>{props.index + 1}. {props.item.activity}</p>
            <button onClick={function(){handledelete(props.id)}} className="bg-black px-1 text-white mt-1">Delete</button>
        </div>
    )
}

export default Todoitem