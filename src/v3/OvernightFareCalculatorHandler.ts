import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class OvernightFareCalculatorHandler implements FareCalculatorHandler {
    FARE = 3.9;
    next?: FareCalculatorHandler
    
    constructor(next?: FareCalculatorHandler) {
        this.next = next;
    }

    calculate (segment: Segment): number {
        if (segment.isOvernight() && !segment.isSunday()) {
            return segment.distance * this.FARE;
        }
        if (!this.next) throw new Error();
        return this.next?.calculate(segment);
    }
}