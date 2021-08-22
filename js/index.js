const birthDate = document.querySelector('.date-input')
const calculate = document.querySelector('.calculate')
const palindromBirthdate = document.querySelector('.palindrom-birthday-message')
const simpleBirthdatePast = document.querySelector('.difference-message-past')
const simpleBirthdateFuture = document.querySelector('.difference-message-future')
const daysMissed = document.querySelector('.missed-days')
const daysToWait = document.querySelector('.countdown')
const pastPalindromDate = document.querySelector('.past-palindrom-date')
const futurePalindromDate = document.querySelector('.future-palindrom-date')

let missedDays = 0
let waitForDays = 0

function stringConverter(date) {
  dateValue = new Date(date.value).toLocaleDateString()
  dateString = dateValue.replaceAll('/', '').split('').map(number => Number(number))
  reverseDateString = dateString.map(number => number)
  reverseDateString = reverseDateString.reverse()
  palindromeCalculator(dateValue, dateString, reverseDateString)
}

function palindromeCalculator(dateValue, dateString, reverseDateString) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    palindromBirthdate.classList.remove('hidden')
    palindromBirthdate.classList.add('visible')
  } else {
    pastPalindromeCalculator(dateValue, dateString, reverseDateString)
    futurePalindromeCalculator(dateValue, dateString, reverseDateString)
  }
}

function pastPalindromeCalculator(dateValue, dateString, reverseDateString, missedDays) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    simpleBirthdatePast.classList.remove('hidden')
    simpleBirthdatePast.classList.add('visible')
    daysMissed.innerText = missedDays
    pastPalindromDate.innerText = dateValue
  } else {
    nearestPastPalindromFinder(dateValue)
  }
}

function nearestPastPalindromFinder(dateValue) {
  currentDate = new Date(dateValue)
  previousDate = new Date(currentDate.setDate(currentDate.getDate() - 1))
  previousDateValue = previousDate.toLocaleDateString()
  previousDateString = previousDateValue.replaceAll('/', '').split('').map(number => Number(number))
  reversePreviousDateString = previousDateString.map(number => number)
  reversePreviousDateString = reversePreviousDateString.reverse()
  missedDays++
  pastPalindromeCalculator(previousDateValue, previousDateString, reversePreviousDateString, missedDays)
}

function futurePalindromeCalculator(dateValue, dateString, reverseDateString, waitForDays) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    simpleBirthdateFuture.classList.remove('hidden')
    simpleBirthdateFuture.classList.add('visible')
    daysToWait.innerText = waitForDays
    futurePalindromDate.innerText = dateValue
  } else {
    nearestFuturePalindromFinder(dateValue)
  }
}

function nearestFuturePalindromFinder(dateValue) {
  currentDate = new Date(dateValue)
  futureDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
  futureDateValue = futureDate.toLocaleDateString()
  futureDateString = futureDateValue.replaceAll('/', '').split('').map(number => Number(number))
  reversefutureDateString = futureDateString.map(number => number)
  reversefutureDateString = reversefutureDateString.reverse()
  waitForDays++
  futurePalindromeCalculator(futureDateValue, futureDateString, reversefutureDateString, waitForDays)
}

calculate.addEventListener('click', function () {
  stringConverter(birthDate)
})