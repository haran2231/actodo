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
        <div className="flex flex-col gap-3 ">
            <h1 className="text-2xl font-medium">Manage Activities</h1>

            <input onChange={onChnage} value={value} type={"text"} placeholder="Enter Activity" className="p-1 mt-2 border border-black" /> <button onClick={onclick} className="p-1 text-white bg-black">Submit</button>
        </div>

        
    )
}

export default Entry