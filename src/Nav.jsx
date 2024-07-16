import { useSelector,useDispatch } from "react-redux"
import { change_to_Stopwatch,change_to_time,change_to_calender } from "./features/slices/content_controler_slice"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function Nav(){
    const a=useSelector((state)=>state.content.value)
    const dispatch=useDispatch()

    return(
        <div className="nav">
            <button className="btn btn-outline" onClick={()=>dispatch(change_to_calender())}>Calender</button>

            <button className="btn btn-outline" onClick={()=>dispatch(change_to_time())}>Time</button>

            <button className="btn btn-outline" onClick={()=>dispatch(change_to_Stopwatch())}>Stop Watch</button>
            

        </div>
    )
}

export default Nav