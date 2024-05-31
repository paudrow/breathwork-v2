export interface ModelParams {
  inhale: number;
  inhaleHold: number;
  exhale: number;
  exhaleHold: number;
  reps: number;
}

export const modelNameToParams = new Map<string, ModelParams>([
  ["box-4", { inhale: 4, inhaleHold: 4, exhale: 4, exhaleHold: 4, reps: 10 }],
  ["box-6", { inhale: 6, inhaleHold: 6, exhale: 6, exhaleHold: 6, reps: 10 }],
  ["box-8", { inhale: 8, inhaleHold: 8, exhale: 8, exhaleHold: 8, reps: 10 }],
  ["flow-4", { inhale: 4, inhaleHold: 4, exhale: 4, exhaleHold: 4, reps: 10 }],
  ["flow-6", { inhale: 6, inhaleHold: 6, exhale: 6, exhaleHold: 6, reps: 10 }],
  ["flow-8", { inhale: 8, inhaleHold: 8, exhale: 8, exhaleHold: 8, reps: 10 }],

  ["balanced-4", {
    inhale: 4,
    inhaleHold: 0,
    exhale: 4,
    exhaleHold: 0,
    reps: 10,
  }],
  ["balanced-6", {
    inhale: 6,
    inhaleHold: 0,
    exhale: 6,
    exhaleHold: 0,
    reps: 10,
  }],
  ["balanced-8", {
    inhale: 8,
    inhaleHold: 0,
    exhale: 8,
    exhaleHold: 0,
    reps: 10,
  }],

  ["calm", { inhale: 4, inhaleHold: 0, exhale: 4, exhaleHold: 4, reps: 10 }],
  ["calm-4", { inhale: 4, inhaleHold: 0, exhale: 4, exhaleHold: 4, reps: 10 }],
  ["calm-6", { inhale: 6, inhaleHold: 0, exhale: 6, exhaleHold: 6, reps: 10 }],
  ["calm-8", { inhale: 8, inhaleHold: 0, exhale: 8, exhaleHold: 8, reps: 10 }],
  ["bottomtriangle", {
    inhale: 4,
    inhaleHold: 0,
    exhale: 4,
    exhaleHold: 4,
    reps: 10,
  }],
  ["bottomtriangle-4", {
    inhale: 4,
    inhaleHold: 0,
    exhale: 4,
    exhaleHold: 4,
    reps: 10,
  }],
  ["bottomtriangle-6", {
    inhale: 6,
    inhaleHold: 0,
    exhale: 6,
    exhaleHold: 6,
    reps: 10,
  }],
  ["bottomtriangle-8", {
    inhale: 8,
    inhaleHold: 0,
    exhale: 8,
    exhaleHold: 8,
    reps: 10,
  }],

  ["energize", {
    inhale: 4,
    inhaleHold: 4,
    exhale: 4,
    exhaleHold: 0,
    reps: 10,
  }],
  ["energize-4", {
    inhale: 4,
    inhaleHold: 4,
    exhale: 4,
    exhaleHold: 0,
    reps: 10,
  }],
  ["energize-6", {
    inhale: 6,
    inhaleHold: 6,
    exhale: 6,
    exhaleHold: 0,
    reps: 10,
  }],
  ["energize-8", {
    inhale: 8,
    inhaleHold: 8,
    exhale: 8,
    exhaleHold: 0,
    reps: 10,
  }],
  ["toptriangle", {
    inhale: 4,
    inhaleHold: 4,
    exhale: 4,
    exhaleHold: 0,
    reps: 10,
  }],
  ["toptriangle-4", {
    inhale: 4,
    inhaleHold: 4,
    exhale: 4,
    exhaleHold: 0,
    reps: 10,
  }],
  ["toptriangle-6", {
    inhale: 6,
    inhaleHold: 6,
    exhale: 6,
    exhaleHold: 0,
    reps: 10,
  }],
  ["toptriangle-8", {
    inhale: 8,
    inhaleHold: 8,
    exhale: 8,
    exhaleHold: 0,
    reps: 10,
  }],

  ["sleep", { inhale: 4, inhaleHold: 7, exhale: 8, exhaleHold: 0, reps: 10 }],

  ["competition", {
    inhale: 4,
    inhaleHold: 1,
    exhale: 8,
    exhaleHold: 4,
    reps: 10,
  }],

  ["wimhof", { inhale: 1, inhaleHold: 0, exhale: 1, exhaleHold: 0, reps: 30 }],
]);

export const models = Array.from(modelNameToParams.keys());
