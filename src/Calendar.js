/** Class representing a UTC Date */
class Calendar {
  /**
   *
   * @param {number} year - Full Year ex. 1998
   * @param {number} month - Month ordered from 1 - 12
   * Number of days in month int - getNumberOfDaysInMonth()
   * Day of week  : ordered from 1 - monday, 7 - sunday
   */

  constructor (month, year) {
    if (month < 1 || month > 12 || year > 2050 || year < 1990) {
      throw new Error('Calendar parameters out of range')
    }
    this.month = month
    this.year = year
    this.fullDate = new Date(Date.UTC(year, month - 1, 1))
    this.prevDate = new Date(Date.UTC(year, month - 1, 1))
  }

  getUnixDate () {
    return this.fullDate.getTime() / 1000
  }

  getNumberOfDaysInMonth () {
    const lastDay = new Date(Date.UTC(this.year, this.month, 0))
    return lastDay.getDate()
  }

  getIndexOfFirstDay () {
    /* this method returns day of week 1 - monday, 7 - sunday **/
    let day = this.fullDate.getUTCDay()
    if (day === 0) {
      day = 7
    }
    return day
  }

  getUnixTable () {
    const tableDate = []

    function pushDayToArray (monday) {
      for (let index = 0; index < 42; index++) {
        tableDate.push(monday)
        monday = monday + 86400
      }
    }

    switch (this.getIndexOfFirstDay()) {
      case 1: {
        const monday = this.fullDate.getTime() / 1000
        pushDayToArray(monday)
        break
      }
      case 2: {
        const monday = this.prevDate.setUTCDate(0) / 1000
        pushDayToArray(monday)
        break
      }
      case 3: {
        const monday = this.prevDate.setUTCDate(-1) / 1000
        pushDayToArray(monday)
        break
      }
      case 4: {
        const monday = this.prevDate.setUTCDate(-2) / 1000
        pushDayToArray(monday)
        break
      }
      // wypada w piątek
      case 5: {
        const monday = this.prevDate.setUTCDate(-3) / 1000
        pushDayToArray(monday)
        break
      }
      // wypada w sobotę
      case 6: {
        const monday = this.prevDate.setUTCDate(-4) / 1000
        pushDayToArray(monday)
        break
      }
      // wypada w niedzielę
      case 7: {
        const monday = this.prevDate.setUTCDate(-5) / 1000
        pushDayToArray(monday)
        break
      }
    }
    return tableDate
  }
}

export default Calendar
