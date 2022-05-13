import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import settings from './settings'
import register from './calendarRegister'
import { dayOfWeekArray, monthsNamesArray } from './helpers/dayOfWeekArray'
import calendarPrintDates from './calendarPrintDates'
import calendarElements from './calendarDOM'
import { prevButtonHandler, nextButtonHandeler, logRegister } from './calendarEventsHandlers'

// Set captions values
calendarElements.caption.innerHTML = 'myCalendar'
calendarElements.headerCells.forEach((el, index) => {
  el.innerHTML = dayOfWeekArray(settings.locale)[index]
})

calendarElements.month.innerHTML = monthsNamesArray(settings.locale)[register.month - 1]

console.log(register)

calendarPrintDates(register.month, register.year)

calendarElements.prevButton.addEventListener('click', prevButtonHandler)
calendarElements.prevButton.addEventListener('click', logRegister)

calendarElements.nextButton.addEventListener('click', nextButtonHandeler)
calendarElements.nextButton.addEventListener('click', logRegister)

// function colorTable () {
//   const previousDays = document.querySelectorAll("[data-current='notcurrent']")
//   previousDays.forEach(function (el, index) {
//     el.style.color = 'gray'
//   })

//   const currentDays = document.querySelectorAll("[data-current='current']")
//   currentDays.forEach(el => {
//     el.style.color = 'black'
//   })

//   const sunday = document.querySelectorAll("[data-dayofweek='0']")
//   sunday.forEach(el => {
//     if (el.getAttribute('data-current') === 'current') {
//       el.style.color = 'red'
//     }
//   })
// }

// function markNow (color) {
//   console.log('-------NOW-------')
//   console.log(parseInt(now.getDate()))
//   console.log(parseInt(now.getMonth() + 1))
//   console.log(now.getFullYear())

//   /*
//   * Get Date from current table (view)
//   */

//   console.log('---------GETy----z bieżącego widoku')
//   const year = document.querySelector('[data-year]')
//   console.log(parseInt(year.getAttribute('data-year')))
//   const month = document.querySelector('td.calendar__month[data-month]')
//   console.log(month.getAttribute('data-month'))
//   const day = document.querySelector('td[data-day]')
//   console.log(day.getAttribute('data-day'))
// }

// calendarElements.prevButton.addEventListener('click', function () {
//   register.clickedPrev()
//   /*
//   * Get month number from html table
//   */
//   const calendarDate = document.querySelector('td.calendar__month')
//   let month = calendarDate.getAttribute('data-month')
//   let year = calendarDate.getAttribute('data-year')

//   if (parseInt(month) === 1) {
//     month = 12
//     year = year - 1
//   } else {
//     month = month - 1
//   }
//   fillTable(month, year)
//   colorTable()
//   console.log(register)
// })

// calendarElements.nextButton.addEventListener('click', function () {
//   register.clickedNext()
//   /*
//   * Get month number from html table
//   */
//   const calendarDate = document.querySelector('td.calendar__month')
//   let month = calendarDate.getAttribute('data-month')
//   let year = calendarDate.getAttribute('data-year')

//   if (parseInt(month) === 12) {
//     year = parseInt(year) + 1
//     month = 1
//   } else {
//     month = parseInt(month) + 1
//   }
//   fillTable(month, year)
//   colorTable()
//   console.log(register)
// })
