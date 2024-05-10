import Ride from "../../src/v3/Ride"
import Segment from "../../src/v3/Segment"

describe('Calc', () => {
  it('should calculate a race at normal time', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T10:00:00"))
    expect(ride.calculateFare()).toBe(21)
  })

  it('should calculate a night time race', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-10T22:00:00"))
    expect(ride.calculateFare()).toBe(39)
  })

  it('should calculate a race on Sunday', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T10:00:00"))
    expect(ride.calculateFare()).toBe(29)
  })

  it('should calculate a race on Sunday at night time', () => {
    const ride = new Ride();
    ride.addSegment(10, new Date("2021-03-07T22:00:00"))
    expect(ride.calculateFare()).toBe(50)
  })
  
})