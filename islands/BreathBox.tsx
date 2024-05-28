import type { Signal } from "@preact/signals";

function normalizeSize(size: number) {
  return size / 3 + 1 / 3;
}

interface BreathBoxProps {
  percentFull: Signal<number>;
  outerBoxSizeRem: number;
}

export function BreathBox({ percentFull, outerBoxSizeRem }: BreathBoxProps) {
  const squareSize = normalizeSize(percentFull.value) * outerBoxSizeRem;
  const bgColor = `rgba(100, 0, 200, ${normalizeSize(percentFull.value)})`;

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
        class="rounded-3xl"
      />
    </div>
  );
}
