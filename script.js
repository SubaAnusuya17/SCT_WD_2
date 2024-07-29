let hours = 0;
let minutes = 0;
let seconds = 0;
let count=0;
let laps = [];
let intervalId = null;
let isRunning = false;

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
document.getElementById('lap-btn').addEventListener('click', recordLap);

function startStopwatch() {
	if (!isRunning) {
		intervalId = setInterval(updateTime, 1000);
		isRunning = true;
	}
}
function pauseStopwatch() {
	if (isRunning) {
		clearInterval(intervalId);
		isRunning = false;
	}
}

function resetStopwatch() {
	pauseStopwatch();
	hours = 0;
	minutes = 0;
	seconds = 0;
	laps = [];
	updateDisplay();
}
function recordLap() {
	if (isRunning) {
		laps.push(`${hours}:${minutes}:${seconds}:${count}`);
		updateLapList();
	}
}

function updateTime() {
	seconds++;
	if (seconds >= 60) {
		minutes++;
		seconds = 0;
	}
	if (minutes >= 60) {
		hours++;
		minutes = 0;
    }
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('hours').textContent = pad(hours);
	document.getElementById('minutes').textContent = pad(minutes);
	document.getElementById('seconds').textContent = pad(seconds);
	document.getElementById('count').textContent = pad(content);

}

function updateLapList() {
	const lapList = document.getElementById('lap-list');
	lapList.innerHTML = '';
	laps.forEach((lap, index) => {
		const lapItem = document.createElement('li');
		lapItem.textContent = `Lap ${index + 1}: ${lap}`;
		lapList.appendChild(lapItem);
	});
}

function pad(time) {
	return time.toString().padStart(2, '0');
}
