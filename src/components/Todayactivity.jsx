import { useState } from "react"
import Todoitem from "./Todoitem"

function Todayactivity(props) {

    const activityarr = props.activityarr
    const setActivityarr = props.setActivityarr
    return (
        <div style={{ backgroundColor: "#FEA241" }} className="flex-grow border rounded-md py-5 px-10" >
            <h1 className="font-medium text-2xl">Today Activity</h1>
            {
                activityarr.length===0?<p>You haven't stored any value</p>:""
            }
            {
                activityarr.map(function (item, index) {
                    return <Todoitem id={item.id} item={item} index={index} activityarr={activityarr} setActivityarr={setActivityarr} />
                })
            }

        </div>
    )
}

export default Todayactivity