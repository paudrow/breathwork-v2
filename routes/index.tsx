import { useSignal } from "@preact/signals";
import { BreathCounter } from "../islands/BreathCounter.tsx";
import { Slider } from "../islands/Slider.tsx";
import { BreathBox } from "../islands/BreathBox.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";

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

  const percentFull = useSignal(0);

  return (
    <div>
      <Slider
        size={percentFull}
      />
      <BreathBox
        percentFull={percentFull}
        outerBoxSizeRem={10}
        text={"Inhale"}
      />
      <BreathCounter
        inhale={inhaleSignal}
        inhaleHold={inhaleHoldSignal}
        exhale={exhaleSignal}
        exhaleHold={exhaleHoldSignal}
        reps={repsSignal}
      />
    </div>
  );
}
