import { useState } from "react"


function Entry(props) {
    const [value, setValue] = useState()

    const activityarr = props.activityarr
    const setActivityarr = props.setActivityarr

    // to get input value
    const onChnage = (event) => {
        setValue(event.target.value)
        // console.log(value);
    }

    // to pass value while submit 
    const onclick = () => {
        setActivityarr([...activityarr, {id:activityarr.length+1, activity:value}])
        // console.log(activityarr);
        setValue("")
        
    }
    return (
        <div>
            <h1 className="font-medium text-2xl">Manage Activities</h1>

            <input onChange={onChnage} value={value} type={"text"} placeholder="Enter Activity" className="p-1 mt-2 border border-black" /> <button onClick={onclick} className="bg-black text-white p-1">Submit</button>
        </div>

        
    )
}

export default Entry