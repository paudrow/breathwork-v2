import { Signal, useSignal, useSignalEffect } from "@preact/signals";
import { Breather, BreathState } from "../src/breather.ts";
import { BreathBox } from "./BreathBox.tsx";

interface BreathCounterProps {
  inhale: Signal<number>;
  inhaleHold: Signal<number>;
  exhale: Signal<number>;
  exhaleHold: Signal<number>;
  reps: Signal<number>;
}

export function BreathCounter(
  { inhale, inhaleHold, exhale, exhaleHold, reps }: BreathCounterProps,
) {
  const isRunning = useSignal(false);
  const secondsElapsed = useSignal(0);

  const breathPercentFull = useSignal(0);
  const breathState = useSignal<BreathState | "">("");
  const breathRemaining = useSignal(0);
  const currentRep = useSignal(1);
  const breather = useSignal<Breather | null>(null);

  let timer: number;

  function startTimer() {
    isRunning.value = true;
    const msPerFrame = 50;
    timer = setInterval(() => {
      if (!isRunning.value) return;

      secondsElapsed.value += msPerFrame / 1000;

      if (!breather.value) return;

      const state = breather.value.getState(secondsElapsed.value);
      breathPercentFull.value = state.percentFull;
      breathState.value = state.state;
      breathRemaining.value = state.secondsRemaining;
      currentRep.value = state.currentRep;
    }, msPerFrame);
  }

  function stopTimer() {
    isRunning.value = false;
    clearInterval(timer);
    secondsElapsed.value = 0;
    breathState.value = "";
    breathPercentFull.value = 0;
    breathRemaining.value = 0;
    currentRep.value = 1;
  }

  function pauseTimer() {
    isRunning.value = false;
    clearInterval(timer);
  }

  useSignalEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("inhale", inhale.toString());
    url.searchParams.set("inhaleHold", inhaleHold.toString());
    url.searchParams.set("exhale", exhale.toString());
    url.searchParams.set("exhaleHold", exhaleHold.toString());
    url.searchParams.set("reps", reps.toString());
    window.history.pushState({}, "", url.toString());

    breather.value = new Breather({
      inhale: inhale.value,
      inhaleHold: inhaleHold.value,
      exhale: exhale.value,
      exhaleHold: exhaleHold.value,
    });
  });

  useSignalEffect(() => {
    if (currentRep.value > reps.value) {
      stopTimer();
    }
  });

  const displayTextMap: Map<BreathState, string> = new Map([
    ["inhale", "Inhale"],
    ["inhaleHold", "Hold"],
    ["exhale", "Exhale"],
    ["exhaleHold", "Hold"],
  ]);

  return (
    <>
      <BreathBox
        outerBoxSizeRem={12}
        percentFull={breathPercentFull}
        text={displayTextMap.get(breathState.value as BreathState) || ""}
      />
      <div>
        {isRunning.value
          ? (
            <>
              <strong>{currentRep.value} of {reps.value}</strong>
            </>
          )
          : (
            <>
              <span class="font-bold">
                {inhale.value}-{inhaleHold.value}-{exhale.value}-{exhaleHold
                  .value}
              </span>{" "}
              for <strong>{reps.value}</strong> reps
            </>
          )}
      </div>
      <div class="flex gap-4">
        <button class="p-4 bg-green-600 rounded" onClick={startTimer}>
          Start
        </button>
        <button class="p-4 bg-yellow-600 rounded" onClick={pauseTimer}>
          Pause
        </button>
        <button class="p-4 bg-red-600 rounded" onClick={stopTimer}>
          Stop
        </button>
      </div>
    </>
  );
}
