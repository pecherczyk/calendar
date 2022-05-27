import calendarElements from './calendarDOM'
import { dayOfWeekArray, monthsNamesArray } from './helpers/dayOfWeekArray'
import settings from './settings'
import register from './calendarRegister'

// Set captions values
const setCaption = function () {
  calendarElements.caption.innerHTML = 'My Calendar ' + register.year
  calendarElements.headerCells.forEach((el, index) => {
    el.innerHTML = dayOfWeekArray(settings.locale)[index]
  })
  calendarElements.month.innerHTML = monthsNamesArray(settings.locale)[register.month - 1]
}

export default setCaption
