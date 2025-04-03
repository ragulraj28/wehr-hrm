import React, { useState } from 'react'
import Calendar from 'react-calendar'
import { ChevronDownIcon } from '../../assets/icons/icon'

const MyCalendar = ({date, setDate}) => {

    const formatMonth = (locale, date) => date.toLocaleDateString(locale, { month: "long" })
    const shortWeekday = (locale, date) => date.toLocaleDateString(locale, { weekday: "short" }).charAt(0) // "Sun" → "S"

  return (

    <Calendar
      value={date}
      onChange={setDate}
      formatMonthYear={formatMonth}
      formatShortWeekday={shortWeekday}
      prevLabel={<ChevronDownIcon className={'rotate-90'}/>}
      nextLabel={<ChevronDownIcon className={'rotate-270'}/>}
    />

  )

}

export default MyCalendar