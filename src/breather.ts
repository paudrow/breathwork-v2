export type BreathState = "inhale" | "inhaleHold" | "exhale" | "exhaleHold";

export interface BreatherState {
  percentFull: number;
  state: BreathState;
  secondsRemaining: number;
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

  private secondsToEndInhale: number;
  private secondsToEndInhaleHold: number;
  private secondsToEndExhale: number;
  private secondsToEndExhaleHold: number;

  private secondsPerRep: number;

  constructor(props: BreatherProps) {
    const { inhale, inhaleHold, exhale, exhaleHold } = props;
    this.inhale = inhale;
    this.inhaleHold = inhaleHold;
    this.exhale = exhale;
    this.exhaleHold = exhaleHold;

    this.secondsToEndInhale = this.inhale;
    this.secondsToEndInhaleHold = this.secondsToEndInhale + this.inhaleHold;
    this.secondsToEndExhale = this.secondsToEndInhaleHold + this.exhale;
    this.secondsToEndExhaleHold = this.secondsToEndExhale + this.exhaleHold;

    this.secondsPerRep = inhale + inhaleHold + exhale + exhaleHold;
  }

  getState(seconds: number): BreatherState {
    const rep = Math.floor(seconds / this.secondsPerRep);
    const secondsInRep = seconds % this.secondsPerRep;

    if (secondsInRep < this.secondsToEndInhale) {
      return {
        percentFull: secondsInRep / this.inhale,
        state: "inhale",
        secondsRemaining: this.secondsToEndInhale - secondsInRep,
        currentRep: rep,
      };
    } else if (secondsInRep < this.secondsToEndInhaleHold) {
      return {
        percentFull: 1,
        state: "inhaleHold",
        secondsRemaining: this.secondsToEndInhaleHold - secondsInRep,
        currentRep: rep,
      };
    } else if (secondsInRep < this.secondsToEndExhale) {
      return {
        percentFull: 1 -
          (secondsInRep - this.secondsToEndInhaleHold) / this.exhale,
        state: "exhale",
        secondsRemaining: this.secondsToEndExhale - secondsInRep,
        currentRep: rep,
      };
    } else {
      return {
        percentFull: 0,
        state: "exhaleHold",
        secondsRemaining: this.secondsToEndExhaleHold - secondsInRep,
        currentRep: rep,
      };
    }
  }

  isFinishedReps({ seconds, reps }: { seconds: number; reps: number }) {
    const { currentRep } = this.getState(seconds);
    return currentRep >= reps;
  }
}
