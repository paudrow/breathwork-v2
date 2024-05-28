import type { Signal } from "@preact/signals";

interface SliderProps {
  size: Signal<number>;
}

export function Slider({ size }: SliderProps) {
  const handleSliderChange = (e: Event) => {
    size.value = Number((e.target as HTMLInputElement).value);
  };

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={size.value}
      onInput={handleSliderChange}
      class="mb-4"
    />
  );
}
