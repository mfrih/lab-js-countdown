const DURATION = 10 // 10 seconds
let remainingTime = DURATION // Countdown starting from 10
let timer = null // Variable to store the interval

// ITERATION 1: Add event listener to the start button

const startButton = document.querySelector("button#start-btn")
// console.log(startButton)
startButton.addEventListener("click", startCountdown)

// ITERATION 2: Start Countdown
const countdownValue = document.querySelector("div#time")
let intervalId

// console.log(countdownValue)
function startCountdown() {
  // console.log("startCountdown called!")
  intervalId = setInterval(() => {
    countdownValue.textContent = remainingTime
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰")
    }
    if (remainingTime === 5) {
      showToast("Start the engines! 💥")
    }
    if (remainingTime === 0) {
      clearInterval(intervalId)
      showToast("Lift off! 🚀")
    }
    remainingTime--
  }, 1000)
}

// ITERATION 3: Show Toast

const toastCardElement = document.querySelector("div#toast")
const closeToastButton = document.querySelector("span#close-toast")
const toastMessageElement = document.querySelector("span#toast-message")

function showToast(message) {
  toastCardElement.classList.add("show")
  toastMessageElement.textContent = message
  const timeoutId = setTimeout(() => {
    toastCardElement.classList.remove("show")
  }, 3000)

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  closeToastButton.addEventListener("click", closeToast)

  function closeToast(event) {
    clearTimeout(timeoutId)
    toastCardElement.classList.remove("show")
  }
}

// BONUS: ITERATION 5: MORE TOASTS
