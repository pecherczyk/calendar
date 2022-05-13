import calendarElements from './calendarDOM'
import register from './calendarRegister'
import fillTable from './calendarFillTable'
import colorTable from './calendarColorTable'

calendarElements.prevButton.addEventListener('click', function () {
  register.clickedPrev()
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
  console.log(register)
})

calendarElements.nextButton.addEventListener('click', function () {
  register.clickedNext()
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
  console.log(register)
})

const dupa = calendarElements.nextButton.addEventListener('dblclick', function () {
  console.log('sssss')
})

export default dupa
