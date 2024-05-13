import FareCalculatorFactory from "./FareCalculatorFactory";
import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class Ride {
    segments: Segment[];
    
    constructor(readonly fareCalculatorHandler: FareCalculatorHandler) {
        this.segments = [];
    }

    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date))
    }

    MIN_FARE = 10;

    calculateFare(){
        let fare = 0;
        for (const segment of this.segments){
            fare += this.fareCalculatorHandler.calculate(segment);
        }
        return (fare < this.MIN_FARE) ? this.MIN_FARE : fare;
    }
}