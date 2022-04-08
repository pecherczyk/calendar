/* this object represents elements from html template */

const calendarDOM = {
  caption: document.querySelector('caption'),
  headerCells: document.querySelectorAll('tr.calendar__header > td'),
  dateCells: document.querySelectorAll('td[data-day]'),
  month: document.querySelector('td.calendar__month'),
  prevButton: document.querySelector('td.button__left'),
  nextButton: document.querySelector('td.button__right')
}

export default calendarDOM
