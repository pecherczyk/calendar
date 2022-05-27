import calendarPrintDates from './calendarPrintDates'
import register from './calendarRegister'
import setCaption from './calendarSetCaption'

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
  setCaption()
}

export const prevButtonHandler = () => {
  register.clickedPrev()
  calendarPrintDates(register.month, register.year)
  setCaption()
}
