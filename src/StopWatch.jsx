import { useEffect, useRef, useState } from "react"

function StopWatch(){

    const [is_running,update_running]=useState(false)
    const [elapsed_time,update_elapsed_time]=useState(0)
    let interval_id_ref=useRef(null)
    const start_time_ref=useRef(0)

    useEffect(()=>{
        if(is_running){
            interval_id_ref=setInterval(() => {
                update_elapsed_time(Date.now()-start_time_ref.current)
            }, 10);
        }
        return ()=>{
            clearInterval(interval_id_ref)
        }
    },[is_running])

    const start=()=>{
        update_running(true)
        start_time_ref.current=Date.now()-elapsed_time
    }

    const stop=()=>{
        update_running(false)    
    }

    const reset=()=>{
        update_running(false)    
        update_elapsed_time(0)
    }

    const format_time=()=>{
        const hour=Math.floor(elapsed_time/(1000*60*60))
        const min=Math.floor(elapsed_time/(1000*60)%60)
        const sec=Math.floor(elapsed_time/(1000)%60)
        const mili_sec=Math.floor(elapsed_time%(1000/10))

        return `${pad_zero(hour)}:${pad_zero(min)}:${pad_zero(sec)}:${pad_zero(mili_sec)}`
    }

    const pad_zero=(a)=>{
        return (a<10 ? "0" : "") + a
    }

    return(
        <div className="stopwatch">
            <span>{format_time()}</span>
            <div className="control_button">
                <button className="btn" onClick={start}>Start</button>
                <button className="btn" onClick={stop}>Stop</button>
                <button className="btn" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch