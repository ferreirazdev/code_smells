// @ts-nocheck

const NORMAL_FARE = 2.1;
const OVERNIGHT_FARE = 3.9;
const SUNDAY_FARE = 2.9;
const OVERNIGHT_SUNDAY_FARE = 5;
const FIRST_DAY_FARE = 1.5;
const MIN_FARE = 10;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;

function isOvernight(date) {
	return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END;
}

function isSunday(date) {
	return date.getDay() === 0;
}

function isValidDistance(distance) {
	return distance != null && distance != undefined && typeof distance === "number" && distance > 0;
}

function isValidDate(date) {
	return date != null && date != undefined && date instanceof Date && date.toString() !== "Invalid Date"
}

export function calculateRide (segments) {
	let fare = 0;
	for (const segment of segments) {
		if (!isValidDistance(segment.distance)) throw new Error("invalid distance");
		if (!isValidDate(segment.date)) throw new Error("invalid date"); 
		if (isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_FARE;
			continue;
		} 
		if (isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
			continue;
		}
		if (!isOvernight(segment.date) && isSunday(segment.date)) {
			fare += segment.distance * SUNDAY_FARE;
			continue;
		}
		if (!isOvernight(segment.date) && !isSunday(segment.date)) {
			fare += segment.distance * NORMAL_FARE;
			continue;
		}
	}
	return (fare < MIN_FARE) ? MIN_FARE : fare;
}