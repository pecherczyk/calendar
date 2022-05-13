// it returns i18n object representing days of week

export const dayOfWeekArray = (locale) => {
  // 01.08.2022 - monday
  const daysArray = []

  for (let index = 1; index < 8; index++) {
    const day = new Date(2022, 7, index)
    const shortDay = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(day)
    daysArray.push(shortDay)
  }

  return daysArray
}

export const monthsNamesArray = (locale) => {
  const months = []

  for (let index = 0; index < 12; index++) {
    const day = new Date(2022, index, 1)
    const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(day)
    months.push(month)
  }

  return months
}
