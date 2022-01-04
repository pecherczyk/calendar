import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Calendar from './Calendar'

/*
* Get current time
*/
const now = new Date()

/*
* Get all td elements from html template
*/
const tdNodes = document.querySelectorAll('td')

function fillTable (month, year) {
  const calendar = new Calendar(month, year)
  const unix = calendar.getUnixTable()

  /*
  * Data from current state of calendar
  */
  const stateMonth = document.querySelector('td.calendar__month')
  stateMonth.setAttribute('data-month', month)
  stateMonth.setAttribute('data-year', year)

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

      if (parseInt(el.getAttribute('data-month')) !== parseInt(stateMonth.getAttribute('data-month'))) {
        el.setAttribute('data-current', 'notcurrent')
      } else {
        el.setAttribute('data-current', 'current')
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

function colorTable () {
  const previousDays = document.querySelectorAll("[data-current='notcurrent']")
  previousDays.forEach(function (el, index) {
    el.style.color = 'gray'
  })

  const currentDays = document.querySelectorAll("[data-current='current']")
  currentDays.forEach(el => {
    el.style.color = 'black'
  })

  const sunday = document.querySelectorAll("[data-dayofweek='0']")
  sunday.forEach(el => {
    if (el.getAttribute('data-current') === 'current') {
      el.style.color = 'red'
    }
  })
}

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
  colorTable()
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
  colorTable()
})

fillTable(now.getMonth() + 1, now.getFullYear())
colorTable()
