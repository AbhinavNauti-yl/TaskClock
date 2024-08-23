import React, { useEffect, useState } from 'react'

export default function Todo() {
  
  // let innitialTask = ["Walk The Dog","Take Medicines",]
  // localStorage.setItem("tasks", JSON.stringify(innitialTask))
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
  

  const [new_task,change_new_tak]=useState("")

  const abc=(event)=>{
    change_new_tak(n=>event.target.value)
  }

  const add=()=>{
    if(new_task!=""){
      let temp = JSON.parse(localStorage.getItem("tasks")) || []
      temp = [new_task, ...temp]
      setArray(temp)
      localStorage.setItem("tasks", JSON.stringify(temp))
      change_new_tak("")
    }

  }

  const del=(index)=>{
    let task = JSON.parse(localStorage.getItem("tasks"))
    const temp=task.filter((element,i)=> i!=index)
    setArray(temp)
    localStorage.setItem("tasks", JSON.stringify(temp))
  }

  const up=(index)=>{
    if(index>0){
      let temp2 = JSON.parse(localStorage.getItem("tasks"))
      let temp=temp2[index]
      temp2[index]=temp2[index-1]
      temp2[index-1]=temp
      setArray(temp2)
      localStorage.setItem("tasks", JSON.stringify(temp2))
    }
  }

  const down=(index)=>{
    if(index<array.length - 1){
      let temp2 = JSON.parse(localStorage.getItem("tasks"))
      let temp = temp2[index]
      temp2[index] = temp2[index+1]
      temp2[index+1] = temp
      setArray(temp2)
      localStorage.setItem("tasks", JSON.stringify(temp2))
    }
  }

  // useEffect(() => {
  //    JSON.parse(localStorage.getItem("tasks")) || []
  // }, [])


  return (
    <>
      <div className='upper'>
        <input type="text" value={new_task} placeholder="Add task..." onChange={abc}/>
        <button onClick={add}>Add</button>
      </div>

      <br></br>
      <br></br>
      
      <ol className='lower'>
        {array?.map((task,index)=>
          <li key={index}><span id='one'>{task}</span>
            <div className="btns">
              <button className='button_class' onClick={()=>del(index)}>delete</button>
              <button className='button_class' onClick={()=>up(index)}>up</button>
              <button className='button_class' onClick={()=>down(index)}>down</button>
            </div>
          </li>
        )}
      </ol>
    </>
  )
}
