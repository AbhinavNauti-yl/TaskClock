import { useSelector,useDispatch } from "react-redux"
import { change_to_Stopwatch,change_to_time,change_to_calender } from "./features/slices/content_controler_slice"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function openMenu(){
    document.querySelector(".sideBar").style.display = "flex"
}

function closeMenu(){
    document.querySelector(".sideBar").style.display = "none"
}

function Nav(){
    const a=useSelector((state)=>state.content.value)
    const dispatch=useDispatch()

    return(
        <>
            <div className="nav">
                <button className="btn btn-outline" onClick={()=>dispatch(change_to_calender())}>Calender</button>

                <button className="btn btn-outline" onClick={()=>dispatch(change_to_time())}>Time</button>

                <button className="btn btn-outline" onClick={()=>dispatch(change_to_Stopwatch())}>Stop Watch</button>

                <svg id="menu" onClick={openMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
</svg>
            </div>  

            <div className="sideBar">
            
                <ul>
                    <li>
                        <svg onClick={closeMenu} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </li>
                    <li onClick={()=>dispatch(change_to_calender())}>Calender</li>
                    <li onClick={()=>dispatch(change_to_time())}>Time</li>
                    <li onClick={()=>dispatch(change_to_Stopwatch())}>Stop Watch</li>
                </ul>

            </div>
        
        </>
    )
}

export default Nav