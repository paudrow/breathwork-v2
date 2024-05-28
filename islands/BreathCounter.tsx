import type { Signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

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
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("inhale", inhale.toString());
    url.searchParams.set("inhaleHold", inhaleHold.toString());
    url.searchParams.set("exhale", exhale.toString());
    url.searchParams.set("exhaleHold", exhaleHold.toString());
    url.searchParams.set("reps", reps.toString());
    window.history.pushState({}, "", url.toString());
  }, [
    inhale.value,
    inhaleHold.value,
    exhale.value,
    exhaleHold.value,
    reps.value,
  ]);

  return (
    <div>
      <div>{inhale.value}</div>
      <div>{inhaleHold.value}</div>
      <div>{exhale.value}</div>
      <div>{exhaleHold.value}</div>
      <div>{reps.value}</div>
    </div>
  );
}
