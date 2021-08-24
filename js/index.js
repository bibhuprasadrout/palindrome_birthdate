const birthDate = document.querySelector('.date-input')
const palindromeBirthdate = document.querySelector('.palindrome-birthday-message')
const simpleBirthdatePast = document.querySelector('.difference-message-past')
const simpleBirthdateFuture = document.querySelector('.difference-message-future')
const daysMissed = document.querySelector('.missed-days')
const daysToWait = document.querySelector('.countdown')
const pastPalindromeDate = document.querySelector('.past-palindrome-date')
const futurePalindromeDate = document.querySelector('.future-palindrome-date')
const calculate = document.querySelector('.calculate')
const reset = document.querySelector('.reset')

let missedDays = 0
let waitForDays = 0

function stringConverter(date) {
  dateValue = new Date(date.value).toLocaleDateString()
  dateString = dateValue.replaceAll('/', '').split('').map(number => Number(number))
  reverseDateString = dateString.map(number => number)
  reverseDateString = reverseDateString.reverse()
  palindromeeCalculator(dateValue, dateString, reverseDateString)
}

function palindromeeCalculator(dateValue, dateString, reverseDateString) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    palindromeBirthdate.classList.remove('hidden')
    palindromeBirthdate.classList.add('visible')
  } else {
    pastPalindromeeCalculator(dateValue, dateString, reverseDateString)
    futurePalindromeeCalculator(dateValue, dateString, reverseDateString)
  }
}

function pastPalindromeeCalculator(dateValue, dateString, reverseDateString, missedDays) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    simpleBirthdatePast.classList.remove('hidden')
    simpleBirthdatePast.classList.add('visible')
    daysMissed.innerText = missedDays
    pastPalindromeDate.innerText = dateValue
  } else {
    nearestPastPalindromeFinder(dateValue)
  }
}

function nearestPastPalindromeFinder(dateValue) {
  currentDate = new Date(dateValue)
  previousDate = new Date(currentDate.setDate(currentDate.getDate() - 1))
  previousDateValue = previousDate.toLocaleDateString()
  previousDateString = previousDateValue.replaceAll('/', '').split('').map(number => Number(number))
  reversePreviousDateString = previousDateString.map(number => number)
  reversePreviousDateString = reversePreviousDateString.reverse()
  missedDays++
  pastPalindromeeCalculator(previousDateValue, previousDateString, reversePreviousDateString, missedDays)
}

function futurePalindromeeCalculator(dateValue, dateString, reverseDateString, waitForDays) {
  if (Array.isArray(dateString) && Array.isArray(reverseDateString) && dateString.length === reverseDateString.length && dateString.every((number, index) => number === reverseDateString[index])) {
    console.log(dateValue)
    simpleBirthdateFuture.classList.remove('hidden')
    simpleBirthdateFuture.classList.add('visible')
    daysToWait.innerText = waitForDays
    futurePalindromeDate.innerText = dateValue
  } else {
    nearestFuturePalindromeFinder(dateValue)
  }
}

function nearestFuturePalindromeFinder(dateValue) {
  currentDate = new Date(dateValue)
  futureDate = new Date(currentDate.setDate(currentDate.getDate() + 1))
  futureDateValue = futureDate.toLocaleDateString()
  futureDateString = futureDateValue.replaceAll('/', '').split('').map(number => Number(number))
  reversefutureDateString = futureDateString.map(number => number)
  reversefutureDateString = reversefutureDateString.reverse()
  waitForDays++
  futurePalindromeeCalculator(futureDateValue, futureDateString, reversefutureDateString, waitForDays)
}

calculate.addEventListener('click', function () {
  if(birthDate && birthDate.value) {
    stringConverter(birthDate)
  } else {
    palindromeBirthdate.classList.remove('hidden')
    palindromeBirthdate.classList.add('visible')
    palindromeBirthdate.innerText = 'Enter a valid Birthdate.'
  }
})

reset.addEventListener('click', function() {
  palindromeBirthdate.classList.remove('visible')
  palindromeBirthdate.classList.add('hidden')
  simpleBirthdatePast.classList.remove('visible')
  simpleBirthdatePast.classList.add('hidden')
  simpleBirthdateFuture.classList.remove('visible')
  simpleBirthdateFuture.classList.add('hidden')
})