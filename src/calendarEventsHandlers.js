import calendarDOM from './calendarDOM'
import calendarPrintDates from './calendarPrintDates'
import register from './calendarRegister'
import { monthsNamesArray } from './helpers/dayOfWeekArray'
import settings from './settings'

export const logPrevClick = () => {
  console.log('Prev button clicked!')
}

export const logNextClick = (event) => {
  console.log('Next button clicked!')
  console.log(event.type)
}

export const logRegister = () => {
  console.log(register)
}

export const registerPrev = () => {
  register.clickedPrev()
}

export const nextButtonHandeler = () => {
  register.clickedNext()
  calendarPrintDates(register.month, register.year)
  calendarDOM.month.innerHTML = monthsNamesArray(settings.locale)[register.month - 1]
}

export const prevButtonHandler = () => {
  register.clickedPrev()
  calendarPrintDates(register.month, register.year)
  calendarDOM.month.innerHTML = monthsNamesArray(settings.locale)[register.month - 1]
}
