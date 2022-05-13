import CalendarCard from './CalendarCard'
import calendarElements from './calendarDOM'

/*
* Get current time
*/
const now = new Date()

const tdNodes = document.querySelectorAll('td')

function fillTable (month, year) {
  const calendar = new CalendarCard(month, year)
  const unix = calendar.getUnixTable()

  /*
  * Data from current state of calendar
  */
  calendarElements.month.setAttribute('data-month', month)
  calendarElements.month.setAttribute('data-year', year)

  /*
  * Fill the table with values
  */
  tdNodes.forEach((el, index) => {
    /*
    * Index range ommits table headers
    */
    if (index > 6 && index < 49) {
      const unixTime = unix[index - 7]
      const date = new Date(unixTime * 1000)
      el.innerHTML = date.getDate()
      el.setAttribute('data-day', date.getDate())
      el.setAttribute('data-month', date.getMonth() + 1)
      el.setAttribute('data-dayofweek', date.getDay())

      /*
      Mark cells from previous and next month
      */

      if (parseInt(el.getAttribute('data-month')) !== parseInt(calendarElements.month.getAttribute('data-month'))) {
        el.setAttribute('data-current', 'notcurrent')
      } else {
        el.setAttribute('data-current', 'current')
      }
      /*
      * Mark current day
      */

      if (parseInt(el.getAttribute('data-day')) === parseInt(now.getDate()) &&
          parseInt(el.getAttribute('data-month')) === parseInt(now.getMonth() + 1)) {
        el.setAttribute('data-now', 'now')
      }
    }
  })

  /*
  * Set year in caption
  */

  const caption = document.querySelector('caption')
  caption.innerHTML = 'Calendar ' + year

  /*
  * Set name of month bottom table
  */

  const tableMonth = document.querySelector('td.calendar__month')
  const options = { month: 'long' }
  tableMonth.innerHTML = new Intl.DateTimeFormat('en-US', options).format(calendar.fullDate)

  /*
  * Set data atributes in the table
  */
}

export default fillTable
