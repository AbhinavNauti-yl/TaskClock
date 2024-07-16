import React, { useState } from 'react'

export default function Todo() {

  const [task,change_main_list]=useState([
    "Brush teeths",
    "Take bath",
  ])

  const [new_task,change_new_tak]=useState("")

  const abc=(event)=>{
    change_new_tak(n=>event.target.value)
  }

  const add=()=>{
    if(new_task!=""){
      change_main_list([new_task,...task])
      change_new_tak("")
    }
  }

  const del=(index)=>{
    const temp=task.filter((element,i)=> i!=index)
    change_main_list(temp)
  }

  const up=(index)=>{
    if(index>0){
      let temp=""
      let temp2=[...task]
      temp=temp2[index]
      temp2[index]=temp2[index-1]
      temp2[index-1]=temp
      change_main_list(temp2)
    }
  }

  const down=(index)=>{
    if(index<task.length - 1){
      let temp=""
      let temp2=[...task]
      temp=temp2[index]
      temp2[index]=temp2[index+1]
      temp2[index+1]=temp
      change_main_list(temp2)
    }
  }

  return (
    <>
      <div className='upper'>
        <input type="text" value={new_task} placeholder="Add task..." onChange={abc}/>
        <button onClick={add}>Add</button>
      </div>

      <br></br>
      <br></br>
      
      <ol className='lower'>
        {task.map((task,index)=>
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
