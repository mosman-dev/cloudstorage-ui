const dataUsed = document.querySelector('.data-consumption > p span');
const dataRemaining = document.querySelector('.data-remaining > span');

let dataUsedCount = 0;
let dataRemainingCount = 0;

// Counter Animation
const runInterval = (data, counter, upperLimit, time) => {
	const dataInterval = setInterval(
		() =>
			counter < upperLimit
				? (counter++, (data.innerText = `${counter} GB`))
				: clearInterval(dataInterval),
		time
	);
};

runInterval(dataUsed, dataUsedCount, 401, 7);
runInterval(dataRemaining, dataRemainingCount, 99, 30);
