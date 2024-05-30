import { useSignal } from "@preact/signals";
import { BreathCounter } from "../islands/BreathCounter.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { SettingsPanel } from "../islands/SettingsPanel.tsx";

interface CombinedCounterProps {
  inhale: number;
  inhaleHold: number;
  exhale: number;
  exhaleHold: number;
  reps: number;
}

export const handler: Handlers<CombinedCounterProps> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const inhale = parseInt(url.searchParams.get("inhale") || "4");
    const inhaleHold = parseInt(url.searchParams.get("inhaleHold") || "4");
    const exhale = parseInt(url.searchParams.get("exhale") || "4");
    const exhaleHold = parseInt(url.searchParams.get("exhaleHold") || "4");
    const reps = parseInt(url.searchParams.get("reps") || "6");

    return ctx.render({ inhale, inhaleHold, exhale, exhaleHold, reps });
  },
};

export default function Home(
  { data }: PageProps<CombinedCounterProps>,
) {
  const { inhale, inhaleHold, exhale, exhaleHold, reps } = data;

  const inhaleSignal = useSignal(inhale);
  const inhaleHoldSignal = useSignal(inhaleHold);
  const exhaleSignal = useSignal(exhale);
  const exhaleHoldSignal = useSignal(exhaleHold);
  const repsSignal = useSignal(reps);

  return (
    <div class="w-full min-h-screen flex flex-col justify-center items-center bg-slate-400 p-4">
      <div class="w-full max-w-md h-auto bg-slate-100 rounded-xl flex flex-col justify-center items-center gap-4 p-4">
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
