import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Calendar from './Calendar'

/*
* Get all td elements in Calendar table
*/
const tdNodes = document.querySelectorAll('td')

function fillTable (month, year) {
  const january = new Calendar(month, year)
  const unix = january.getUnixTable()

  /*
  * Fill the table with values
  */
  tdNodes.forEach((el, index) => {
    if (index > 6 && index < 49) {
      const unixTime = unix[index - 7]
      const date = new Date(unixTime * 1000)
      el.innerHTML = date.getDate()
      el.setAttribute('data-day', date.getDate())
      /*
      CSS - change color of previous month and next month
      */

      if ((index > 6 && index < 14) && date.getDate() > 24) {
        el.style.color = 'gray'
      }
      if ((index > 30) && date.getDate() < 15) {
        el.style.color = 'gray'
      }
    }
  })

  /*
  CSS mark current day
  */
  const currentDayEl = document.querySelector('table.calendar td[data-day]')
  console.log(currentDayEl)

  /*
  * Set year in caption
  */

  const caption = document.querySelector('caption')
  caption.innerHTML = 'Calendar ' + year

  /*
  * Set name of month bottom table
  */

  const tableMonth = document.querySelector('td.calendar__month')
  tableMonth.setAttribute('data-month', 'javascript')
  const options = { month: 'long' }
  tableMonth.innerHTML = new Intl.DateTimeFormat('en-US', options).format(january.fullDate)

  /*
  * Set data atributes in the table
  */

  const dataMonth = document.querySelector('td.calendar__month')
  dataMonth.setAttribute('data-month', month)
  dataMonth.setAttribute('data-year', year)
}

const now = new Date()

fillTable(now.getMonth() + 1, now.getFullYear())
console.log(now.getDate())

const prevButton = document.querySelector('td.button__left')

prevButton.addEventListener('click', function () {
  /*
  * Get month number from html table
  */
  const calendarDate = document.querySelector('td.calendar__month')
  let month = calendarDate.getAttribute('data-month')
  let year = calendarDate.getAttribute('data-year')

  if (parseInt(month) === 1) {
    month = 12
    year = year - 1
  } else {
    month = month - 1
  }
  fillTable(month, year)
})

const nextButton = document.querySelector('td.button__right')

nextButton.addEventListener('click', function () {
  /*
  * Get month number from html table
  */
  const calendarDate = document.querySelector('td.calendar__month')
  let month = calendarDate.getAttribute('data-month')
  let year = calendarDate.getAttribute('data-year')

  if (parseInt(month) === 12) {
    year = parseInt(year) + 1
    month = 1
  } else {
    month = parseInt(month) + 1
  }
  fillTable(month, year)
})
