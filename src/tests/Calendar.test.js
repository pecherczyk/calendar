import { describe, expect, it } from '@jest/globals'
import Calendar from '../Calendar'

describe('Calendar class test', () => {
  it('returns calendar object', () => {
    const subject = new Calendar(1, 2020)
    expect(subject).toBeTruthy()
  })
})

describe('Test throw Error', () => {
  it('throws new Error', () => {
    expect(() => {
      const subject = new Calendar(13, 2500)
      subject.getUnixTable()
    }).toThrow('Calendar parameters out of range')
  })
})

describe('Calendar - test number of days in month', () => {
  it('returns number of days in month', () => {
    const feb = new Calendar(2, 2020)
    expect(feb.getNumberOfDaysInMonth()).toEqual(29)
    const august = new Calendar(8, 2021)
    expect(august.getNumberOfDaysInMonth()).toEqual(31)
  })
})

describe('Calendar - test index of the firtst day of month', () => {
  it('returns index of day', () => {
    const subject = new Calendar(10, 2021)
    expect(subject.getIndexOfFirstDay()).toEqual(5)
    const may = new Calendar(5, 2022)
    expect(may.getIndexOfFirstDay()).toEqual(7)
  })
})

describe('Calendar - test if returned date is proper', () => {
  it('returns unix time', () => {
    const subject = new Calendar(10, 2021)
    expect(subject.getUnixDate()).toEqual(1633046400)
  })

  it('returns unix 1st november 2021', () => {
    const subject = new Calendar(11, 2021)
    expect(subject.getUnixDate()).toEqual(1635724800)
  })

  it('returns unix 1st of January 2021', () => {
    const subject = new Calendar(1, 2021)
    expect(subject.getUnixDate()).toEqual(1609459200)
  })

  it('returns unix 1st of June 2021', () => {
    const subject = new Calendar(6, 2021)
    expect(subject.getUnixDate()).toEqual(1622505600)
  })
  it('returns unix 1st of March 2022', () => {
    const subject = new Calendar(3, 2022)
    expect(subject.getUnixDate()).toEqual(1646092800)
  })

  it('returns unix 1st of Feb 2022', () => {
    const subject = new Calendar(2, 2022)
    expect(subject.getUnixDate()).toEqual(1643673600)
  })
})

describe('Calendar - test Array creation', () => {
  it('returns array Wendsday start', () => {
    const subject = new Calendar(2, 2022)
    const arr = subject.getUnixTable()
    expect(arr[1]).toEqual(1643673600)
  })

  it('returns array Thursday start', () => {
    const subject = new Calendar(9, 2022)
    const arr = subject.getUnixTable()
    expect(arr[3]).toEqual(1661990400)
  })

  it('returns array Friday start', () => {
    const subject = new Calendar(4, 2022)
    const arr = subject.getUnixTable()
    expect(arr[4]).toEqual(1648771200)
  })

  it('returns array Saturday start', () => {
    const subject = new Calendar(5, 2021)
    const arr = subject.getUnixTable()
    expect(arr[5]).toEqual(1619827200)
  })

  it('returns array Sunday start', () => {
    const subject = new Calendar(5, 2022)
    const arr = subject.getUnixTable()
    expect(arr[6]).toEqual(1651363200)
  })
})

describe('Calendar - test if number of elements is 42', () => {
  it('returns 42 days in all array', () => {
    const subject = new Calendar(9, 2021)
    const table = subject.getUnixTable()
    expect(table.length).toEqual(42)
  })
  it('returns 42 days in all array', () => {
    const subject = new Calendar(1, 2020)
    const table = subject.getUnixTable()
    expect(table.length).toEqual(42)
  })
  it('returns 42 days in all array', () => {
    const subject = new Calendar(3, 2021)
    const table = subject.getUnixTable()
    expect(table.length).toEqual(42)
  })
})

describe('Calendar - test if number of days is proper', () => {
  it('returns 28 days in february', () => {
    const subject = new Calendar(2, 1998)
    expect(subject.getNumberOfDaysInMonth()).toEqual(28)
  })
  it('returns 28 days in february', () => {
    const subject = new Calendar(2, 2000)
    expect(subject.getNumberOfDaysInMonth()).toEqual(29)
  })
})

describe('Calendar - test if Index of the first day in month is propeer', () => {
  it('Returns monday (1) - november 2021', () => {
    const subject = new Calendar(11, 2021)
    expect(subject.getIndexOfFirstDay()).toEqual(1)
  })
})
