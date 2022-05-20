/* this object represents elements from html template */
const calendarDOM = {
  caption: document.querySelector('caption'),
  headerCells: document.querySelectorAll('tr.calendar__header > td'),
  dateCells: document.querySelectorAll('td[data-day]'),
  month: document.querySelector('td.calendar__month'),
  prevButton: document.querySelector('td.button__left'),
  nextButton: document.querySelector('td.button__right'),
  now: new Date(),
  form: document.querySelector('form'),
  dzik: document.getElementById('dzik')
}

export default calendarDOM
