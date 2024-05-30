import { Signal, useSignal } from "@preact/signals";

interface SettingsPanelProps {
  inhale: Signal<number>;
  inhaleHold: Signal<number>;
  exhale: Signal<number>;
  exhaleHold: Signal<number>;
  reps: Signal<number>;
}

export function SettingsPanel(
  { inhale, inhaleHold, exhale, exhaleHold, reps }: SettingsPanelProps,
) {
  const isOpen = useSignal(false);

  const togglePanel = () => {
    isOpen.value = !isOpen.value;
  };

  return (
    <div>
      <button
        class="p-2 rounded bg-gray-600 text-white"
        onClick={togglePanel}
      >
        options
      </button>
      <div
        class={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen.value ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div class="p-4">
          <h2 class="text-xl font-bold mb-4">Settings</h2>
          <div class="mb-4">
            <label class="block mb-2">Inhale</label>
            <input
              type="number"
              value={inhale.value}
              onInput={(e) =>
                inhale.value = Number((e.target as HTMLInputElement).value)}
              min={1}
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2">Inhale Hold</label>
            <input
              type="number"
              value={inhaleHold.value}
              onInput={(e) =>
                inhaleHold.value = Number((e.target as HTMLInputElement).value)}
              min={0}
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2">Exhale</label>
            <input
              type="number"
              value={exhale.value}
              onInput={(e) =>
                exhale.value = Number((e.target as HTMLInputElement).value)}
              min={1}
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2">Exhale Hold</label>
            <input
              type="number"
              value={exhaleHold.value}
              onInput={(e) =>
                exhaleHold.value = Number((e.target as HTMLInputElement).value)}
              min={0}
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2">Reps</label>
            <input
              type="number"
              value={reps.value}
              onInput={(e) =>
                reps.value = Number((e.target as HTMLInputElement).value)}
              min={1}
              class="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
