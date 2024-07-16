import { useEffect, useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function Time(){
    
    const [time,update_time]=useState(new Date())
    const [format_btn,update_format_btn]=useState("12 Hour Format")

    useEffect(()=>{
        const interval_id=setInterval(()=>{
            update_time(t=>new Date())
        },1000)
    })

    const time_format=()=>{
        let hour=time.getHours()
        const min=time.getMinutes()
        const sec=time.getSeconds()
        const mer=hour>=12 ? "PM" : "AM"

        hour=format_btn==="24 Hour Format" ? (hour%12 || 12) : hour

        return `${pad_zero(hour)}:${pad_zero(min)}:${pad_zero(sec)} ${pad_zero(mer)}`
    }

    const pad_zero=(temp)=>{
        return (temp<10 ? "0" : "") + temp
    }

    const change_format=()=>{
        update_format_btn(f=>f == "12 Hour Format" ? "24 Hour Format" : "12 Hour Format")
    }

    return(
        <div className="time">
            <span>{time_format()}</span> <br />
            <button onClick={change_format} className="btn">{format_btn}</button>
        </div>
    )
}

export default Time