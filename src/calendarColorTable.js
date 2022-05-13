function colorTable () {
  const previousDays = document.querySelectorAll("[data-current='notcurrent']")
  previousDays.forEach(function (el, index) {
    el.style.color = 'gray'
  })

  const currentDays = document.querySelectorAll("[data-current='current']")
  currentDays.forEach(el => {
    el.style.color = 'black'
  })

  const sunday = document.querySelectorAll("[data-dayofweek='0']")
  sunday.forEach(el => {
    if (el.getAttribute('data-current') === 'current') {
      el.style.color = 'red'
    }
  })
}

export default colorTable
