import { useState } from 'react'
import './App.css'


import Nav from './Nav'
import Time from './Time'
import Calender from './Calender'
import StopWatch from './StopWatch'
import Todo from './Todo'

import { useSelector,useDispatch} from 'react-redux'

function App() {
  const check=useSelector((state)=>state.content.value)

  return(
    <>
      <Nav></Nav>
      <hr></hr>
      <div className='main'>
        <section className='section'>
          {check=="Time" ? <Time></Time> : check=="Calender" ? <Calender></Calender> : check=="Stop Watch" ? <StopWatch></StopWatch> : console.log("some error occured in app on rendering components")}
        </section>
        <section className='section2'>
          <Todo></Todo>
        </section>
      </div>
    </>
  )
}

export default App
