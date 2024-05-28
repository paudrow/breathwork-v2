import type { Signal } from "@preact/signals";

// TODO find a better name for this function
function normalizeValue(value: number, offset: number) {
  return value / offset + 1 / offset;
}

interface BreathBoxProps {
  percentFull: Signal<number>;
  outerBoxSizeRem: number;
  text?: string;
}

export function BreathBox(
  { percentFull, outerBoxSizeRem, text }: BreathBoxProps,
) {
  const squareSize = normalizeValue(percentFull.value, 3) * outerBoxSizeRem;
  const bgColor = `rgba(100, 0, 200, ${
    0.6 - normalizeValue(percentFull.value, 5)
  })`;

  return (
    <div
      class="flex flex-col items-center justify-center"
      style={{
        width: `${outerBoxSizeRem}rem`,
        height: `${outerBoxSizeRem}rem`,
      }}
    >
      <div
        style={{
          width: `${squareSize}rem`,
          height: `${squareSize}rem`,
          backgroundColor: bgColor,
        }}
        class="rounded-3xl flex justify-center items-center"
      >
        {text ?? ""}
      </div>
    </div>
  );
}
