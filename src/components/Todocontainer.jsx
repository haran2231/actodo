import Todayactivity from "./Todayactivity"
import { useState } from "react"
import Entry from "./Entry"

function Todocontainer() {
    const [activityarr, setActivityarr] = useState([])
    return (
        <>
            <Entry activityarr={activityarr} setActivityarr={setActivityarr} />
            <Todayactivity activityarr={activityarr} setActivityarr={setActivityarr} />
        </>
    )
}

export default Todocontainer