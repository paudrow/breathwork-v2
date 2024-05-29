export type BreatherState = "inhale" | "inhaleHold" | "exhale" | "exhaleHold";

export interface OutputState {
  percentFull: number;
  state: BreatherState;
  timeRemaining: number;
  currentRep: number;
}

export interface BreatherProps {
  inhale: number;
  inhaleHold: number;
  exhale: number;
  exhaleHold: number;
}

export class Breather {
  private inhale: number;
  private inhaleHold: number;
  private exhale: number;
  private exhaleHold: number;

  private timeToEndInhale: number;
  private timeToEndInhaleHold: number;
  private timeToEndExhale: number;
  private timeToEndExhaleHold: number;

  private timePerRep: number;

  constructor(props: BreatherProps) {
    const { inhale, inhaleHold, exhale, exhaleHold } = props;
    this.inhale = inhale;
    this.inhaleHold = inhaleHold;
    this.exhale = exhale;
    this.exhaleHold = exhaleHold;

    this.timeToEndInhale = this.inhale;
    this.timeToEndInhaleHold = this.timeToEndInhale + this.inhaleHold;
    this.timeToEndExhale = this.timeToEndInhaleHold + this.exhale;
    this.timeToEndExhaleHold = this.timeToEndExhale + this.exhaleHold;

    this.timePerRep = inhale + inhaleHold + exhale + exhaleHold;
  }

  getState(time: number): OutputState {
    const rep = Math.floor(time / this.timePerRep);
    const timeInRep = time % this.timePerRep;

    if (timeInRep < this.timeToEndInhale) {
      return {
        percentFull: timeInRep / this.inhale,
        state: "inhale",
        timeRemaining: this.timeToEndInhale - timeInRep,
        currentRep: rep,
      };
    } else if (timeInRep < this.timeToEndInhaleHold) {
      return {
        percentFull: 1,
        state: "inhaleHold",
        timeRemaining: this.timeToEndInhaleHold - timeInRep,
        currentRep: rep,
      };
    } else if (timeInRep < this.timeToEndExhale) {
      return {
        percentFull: 1 - (timeInRep - this.timeToEndInhaleHold) / this.exhale,
        state: "exhale",
        timeRemaining: this.timeToEndExhale - timeInRep,
        currentRep: rep,
      };
    } else {
      return {
        percentFull: 0,
        state: "exhaleHold",
        timeRemaining: this.timeToEndExhaleHold - timeInRep,
        currentRep: rep,
      };
    }
  }
}
