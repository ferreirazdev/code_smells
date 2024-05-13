import NormalFareCalculatorHandler from "../../src/v3/NormalFareCalculatorHandler";
import OvernightFareCalculatorHandler from "../../src/v3/OvernightFareCalculatorHandler";
import OvernightSundayFareCalculator from "../../src/v3/OvernightSundayFareCalculator";
import Ride from "../../src/v3/Ride"
import SundayFareCalculatorHandler from "../../src/v3/SundayFareCalculatorHandler";
import SundayOvernightFareCalculatorHandler from "../../src/v3/SundayOvernightFareCalculatorHandler";

let ride: Ride;

beforeEach(function() {
  const normalFareCalculator = new NormalFareCalculatorHandler();
  const overnightFareCalculator = new OvernightFareCalculatorHandler(normalFareCalculator);
  const overnightSundayFareCalculator = new SundayOvernightFareCalculatorHandler(overnightFareCalculator);
  const sundayFareCalculator = new SundayFareCalculatorHandler(overnightSundayFareCalculator);
  ride = new Ride(sundayFareCalculator);
})

describe('Calc', () => {
  it('should calculate a race at normal time', () => {
    ride.addSegment(10, new Date("2021-03-10T10:00:00"))
    expect(ride.calculateFare()).toBe(21)
  })

  it('should calculate a night time race', () => {
    ride.addSegment(10, new Date("2021-03-10T22:00:00"))
    expect(ride.calculateFare()).toBe(39)
  })

  it('should calculate a race on Sunday', () => {
    ride.addSegment(10, new Date("2021-03-07T10:00:00"))
    expect(ride.calculateFare()).toBe(29)
  })

  it('should calculate a race on Sunday at night time', () => {
    ride.addSegment(10, new Date("2021-03-07T22:00:00"))
    expect(ride.calculateFare()).toBe(50)
  })
  
})