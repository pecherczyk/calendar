import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import settings from './settings'
import register from './calendarRegister'
import { dayOfWeekArray, monthsNamesArray } from './helpers/dayOfWeekArray'
import calendarPrintDates from './calendarPrintDates'
import calendarElements from './calendarDOM'
import { prevButtonHandler, nextButtonHandeler, logRegister } from './calendarEventsHandlers'

// Set captions values
const setCaption = function () {
  calendarElements.caption.innerHTML = 'myCalendar ' + register.year
  calendarElements.headerCells.forEach((el, index) => {
    el.innerHTML = dayOfWeekArray(settings.locale)[index]
  })
  calendarElements.month.innerHTML = monthsNamesArray(settings.locale)[register.month - 1]
}

setCaption()
// console.log(register)

calendarPrintDates(register.month, register.year)

calendarElements.prevButton.addEventListener('click', prevButtonHandler)
calendarElements.prevButton.addEventListener('click', logRegister)

calendarElements.nextButton.addEventListener('click', nextButtonHandeler)
calendarElements.nextButton.addEventListener('click', logRegister)

const selectOption = document.forms.langform.elements.lang

selectOption.addEventListener('change', () => {
  settings.locale = document.forms.langform.elements.lang.value
  setCaption()
  calendarPrintDates(register.month, register.year)
  console.log(document.forms.langform.elements.lang.value)
})
