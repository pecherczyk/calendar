import calendarDOM from './calendarDOM'
import CalendarCard from './CalendarCard'
import register from './calendarRegister'

function calendarPrintDates (month, year) {
  const calendar = new CalendarCard(month, year)
  const unix = calendar.getUnixTable()
  /*
  * Data from current state of calendar
  */
  calendarDOM.month.setAttribute('data-month', month)
  calendarDOM.month.setAttribute('data-year', year)
  /*
  * Fill the table with values
  */
  calendarDOM.dateCells.forEach((el, index) => {
    const unixTime = unix[index]
    const date = new Date(unixTime * 1000)
    el.innerHTML = date.getDate()
    el.setAttribute('data-day', date.getDate())
    el.setAttribute('data-month', date.getMonth() + 1)
    el.setAttribute('data-dayofweek', date.getDay())
    el.setAttribute('data-year', date.getFullYear())
    /*
  * Mark today
  */
    if (
      parseInt(el.getAttribute('data-day')) === parseInt(register.nowDay) &&
      parseInt(el.getAttribute('data-month')) === parseInt(register.nowMonth) &&
      parseInt(el.getAttribute('data-year')) === parseInt(register.nowYear)
    ) {
      el.setAttribute('data-now', true)
    } else {
      el.setAttribute('data-now', false)
    }
    // Mark current days

    if (
      (date.getMonth() + 1) === parseInt(register.month)
    ) {
      el.setAttribute('data-current', true)
    } else {
      el.setAttribute('data-current', false)
    }
  })
}

export default calendarPrintDates
