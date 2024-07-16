import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridplugin from'@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Calender() {
  return (
    <div>
      <FullCalendar
        plugins={[ dayGridPlugin,timeGridplugin,interactionPlugin ]}
        initialView="dayGridMonth"
      />
    </div>
  )
}
