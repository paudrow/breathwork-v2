import { useSignal, useSignalEffect } from "@preact/signals";
import { BreathCounter } from "../islands/BreathCounter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { SettingsPanel } from "../islands/SettingsPanel.tsx";

interface CombinedCounterProps {
  inhale: number;
  inhaleHold: number;
  exhale: number;
  exhaleHold: number;
  reps: number;
  error: string | null;
}

export const handler: Handlers<CombinedCounterProps> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const inhale = parseInt(url.searchParams.get("inhale") || "4");
    const inhaleHold = parseInt(url.searchParams.get("inhaleHold") || "4");
    const exhale = parseInt(url.searchParams.get("exhale") || "4");
    const exhaleHold = parseInt(url.searchParams.get("exhaleHold") || "4");
    const reps = parseInt(url.searchParams.get("reps") || "6");

    let error: string | null = null
    if (isNaN(inhale) || isNaN(inhaleHold) || isNaN(exhale) || isNaN(exhaleHold) || isNaN(reps)) {
      error = "Invalid parameters"
    }
    if (inhale < 1) {
      error = "Inhale must be 1 or greater: " + inhale
    }
    if (inhaleHold < 0) {
      error = "Inhale hold must be 0 or greater: " + inhaleHold
    }
    if (exhale < 1) {
      error = "Exhale must be 1 or greater: " + exhale
    }
    if (exhaleHold < 0) {
      error = "Exhale hold must be 0 or greater: " + exhaleHold
    }
    if (reps < 1) {
      error = "Reps must be 1 or greater: " + reps
    }

    return ctx.render({ inhale, inhaleHold, exhale, exhaleHold, reps, error});
  },
};

export default function Home(
  { data }: PageProps<CombinedCounterProps>,
) {
  const { inhale, inhaleHold, exhale, exhaleHold, reps, error } = data;

  const inhaleSignal = useSignal(inhale);
  const inhaleHoldSignal = useSignal(inhaleHold);
  const exhaleSignal = useSignal(exhale);
  const exhaleHoldSignal = useSignal(exhaleHold);
  const repsSignal = useSignal(reps);

  return (
    <div class="w-full min-h-screen flex flex-col justify-center items-center bg-slate-400 p-4">
      <div class="w-full max-w-md h-auto bg-slate-100 rounded-xl flex flex-col justify-center items-center gap-4 p-4">
        {error && <div class="text-red-500">{error}</div>}
        <BreathCounter
          inhale={inhaleSignal}
          inhaleHold={inhaleHoldSignal}
          exhale={exhaleSignal}
          exhaleHold={exhaleHoldSignal}
          reps={repsSignal}
        />
        <SettingsPanel
          inhale={inhaleSignal}
          inhaleHold={inhaleHoldSignal}
          exhale={exhaleSignal}
          exhaleHold={exhaleHoldSignal}
          reps={repsSignal}
        />
      </div>
    </div>
  );
}
