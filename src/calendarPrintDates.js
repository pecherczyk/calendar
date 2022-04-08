import calendarDOM from './calendarDOM'
import CalendarCard from './CalendarCard'

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
  })
}

export default calendarPrintDates
