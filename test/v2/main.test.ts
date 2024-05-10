import { calculateRide } from "../../src/v2/main"

describe('Calc', () => {
  it('should calculate a race at normal time', () => {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-10T10:00:00")}])
    expect(fare).toBe(21)
  })

  it('should calculate a night time race', () => {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-10T22:00:00")}])
    expect(fare).toBe(39)
  })

  it('should calculate a race on Sunday', () => {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-07T10:00:00")}])
    expect(fare).toBe(29)
  })

  it('should calculate a race on Sunday at night time', () => {
    const fare = calculateRide([{distance: 10, date: new Date("2021-03-07T22:00:00")}])
    expect(fare).toBe(50)
  })

  it('should not calculate a race with an invalid distance', () => {
    expect(() => calculateRide([{distance: -1, date: new Date("2021-03-10T10:00:00")}])).toThrow(new Error("invalid distance"))
  })

  it('should not calculate a race with an invalid date', () => {
    expect(() => calculateRide([{distance: 10, date: new Date("invalid-date")}])).toThrow(new Error("invalid date"))
  })

  it('should calculate a race at normal time with minimum value', () => {
    const fare = calculateRide([{distance: 3, date: new Date("2021-03-10T10:00:00")}])
    expect(fare).toBe(10)
  })
})