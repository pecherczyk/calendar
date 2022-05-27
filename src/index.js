import './css/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import settings from './settings'
import register from './calendarRegister'
import calendarPrintDates from './calendarPrintDates'
import calendarElements from './calendarDOM'
import { prevButtonHandler, nextButtonHandeler } from './calendarEventsHandlers'
import setCaption from './calendarSetCaption'

// Set captions values

setCaption()

calendarPrintDates(register.month, register.year)

calendarElements.prevButton.addEventListener('click', prevButtonHandler)
// calendarElements.prevButton.addEventListener('click', logRegister)

calendarElements.nextButton.addEventListener('click', nextButtonHandeler)
// calendarElements.nextButton.addEventListener('click', logRegister)

const selectOption = document.forms.langform.elements.lang

selectOption.addEventListener('change', () => {
  settings.locale = document.forms.langform.elements.lang.value
  setCaption()
  calendarPrintDates(register.month, register.year)
})
