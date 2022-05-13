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

    if (el.getAttribute('data-day') == register.nowDay && el.getAttribute('data-month') == register.nowMonth) {
      console.log('lipa')
      el.setAttribute('data-now', true)
    } else {
      el.setAttribute('data-now', false)
    }
  })
}

export default calendarPrintDates
