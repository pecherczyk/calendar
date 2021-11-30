import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Calendar from './Calendar'

/*
* Get all td elements in Calendar table
*/
const tdNodes = document.querySelectorAll('td')

function fillTable (month) {
  const january = new Calendar(1, 2021)
  const unix = january.getUnixTable()

  /*
  * Fill the table with values
  */
  tdNodes.forEach((el, index) => {
    if (index > 6 && index < 49) {
      const unixTime = unix[index - 7]
      const date = new Date(unixTime * 1000)
      el.innerHTML = date.getDate()

      /*
      CSS - change color of previous month and next month
      */

      if ((index > 6 && index < 14) && date.getDate() > 24) {
        el.style.color = 'gray'
      }
      if ((index > 34) && date.getDate() < 15) {
        el.style.color = 'gray'
      }
    }
  })

  /*
  * Change name of month
  */

  const tableMonth = document.querySelector('td.calendar__month')
  const options = { month: 'long' }
  tableMonth.innerHTML = new Intl.DateTimeFormat('en-US', options).format(january.fullDate)
}

fillTable(null)
