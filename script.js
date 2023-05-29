const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const time = document.querySelector('.time')
const stopwatch = document.querySelector('.stopwatch')
const modal = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
const infoBtn = document.querySelector('.info')
const timeList = document.querySelector('.time-list')
const colors = document.querySelector('.colors')
const palette = document.querySelector('.palette')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
let root = document.documentElement

let seconds = 0
let minutes = 0
let countTime
let timesArr = []
const start = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00}`
		}
	}, 1000)
}

const clear = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const stop = () => {
	time.textContent = `Ostatni czas: ${stopwatch.textContent}`
	time.style.visibility = 'visible'
	timesArr.push(stopwatch.textContent)
	clear()
}

const reset = () => {
	clear()
	time.style.visibility = 'hidden'
	time.textContent = `0:00`
	timesArr = []
}

const pause = () => {
	clearInterval(countTime)
}

const history = () => {
	timeList.textContent = ''
	let x = 1
	timesArr.forEach(el => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${x}: <span>${el}</span>`
		timeList.appendChild(newTime)
		x++
	})
}

const showModal = () => {
	modal.style.display = 'block'
}
const closeModal = () => {
	modal.style.display = 'none'
}

const showColors = () => {
	palette.classList.toggle('show-palette')
}

const redColor = () => {
	root.style.setProperty('--first-color', 'rgb(250,20,6)')
	root.style.setProperty('--hover-color', 'rgb(209,33,24)')
}
const blueColor = () => {
	root.style.setProperty('--first-color', 'rgb(63, 63, 225)')
	root.style.setProperty('--hover-color', 'rgb(37, 37, 150)')
}
const greenColor = () => {
	root.style.setProperty('--first-color', 'rgb(25, 186, 25)')
	root.style.setProperty('--hover-color', 'rgb(16, 132, 16)')
}

infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', closeModal)
startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
historyBtn.addEventListener('click', history)
window.addEventListener('click', e => (e.target === modal ? closeModal() : false))
colors.addEventListener('click', showColors)
red.addEventListener('click', redColor)
blue.addEventListener('click', blueColor)
green.addEventListener('click', greenColor)
