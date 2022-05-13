const now = new Date()

const register = {

  month: now.getMonth() + 1,
  year: now.getFullYear(),
  day: now.getDate(),
  nowDay: now.getDate(),
  nowMonth: now.getMonth() + 1,
  nowYear: now.getFullYear(),
  prevCount: 0,
  nextCount: 0,

  clickedPrev () {
    this.prevCount++
    this.day = undefined

    if (this.month === 1) {
      this.month = 12
      this.year--
    } else {
      this.month--
    }
  },

  clickedNext () {
    this.nextCount++
    this.day = undefined

    if (this.month === 12) {
      this.year++
      this.month = 1
    } else {
      this.month++
    }
  }
}

export default register
