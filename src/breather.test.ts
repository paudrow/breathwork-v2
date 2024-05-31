import { Breather } from "./breather.ts";

import { assertEquals } from "@std/assert";

Deno.test("Breather getState works for one rep", () => {
  const breather = new Breather({
    inhale: 4,
    inhaleHold: 2,
    exhale: 4,
    exhaleHold: 2,
  });

  assertEquals(breather.getState(0), {
    percentFull: 0,
    state: "inhale",
    secondsRemaining: 4,
    currentRep: 1,
  });

  assertEquals(breather.getState(1), {
    percentFull: 0.25,
    state: "inhale",
    secondsRemaining: 3,
    currentRep: 1,
  });

  assertEquals(breather.getState(2), {
    percentFull: 0.5,
    state: "inhale",
    secondsRemaining: 2,
    currentRep: 1,
  });

  assertEquals(breather.getState(3), {
    percentFull: 0.75,
    state: "inhale",
    secondsRemaining: 1,
    currentRep: 1,
  });

  assertEquals(breather.getState(4), {
    percentFull: 1,
    state: "inhaleHold",
    secondsRemaining: 2,
    currentRep: 1,
  });

  assertEquals(breather.getState(5), {
    percentFull: 1,
    state: "inhaleHold",
    secondsRemaining: 1,
    currentRep: 1,
  });

  assertEquals(breather.getState(6), {
    percentFull: 1,
    state: "exhale",
    secondsRemaining: 4,
    currentRep: 1,
  });

  assertEquals(breather.getState(7), {
    percentFull: 0.75,
    state: "exhale",
    secondsRemaining: 3,
    currentRep: 1,
  });

  assertEquals(breather.getState(10), {
    percentFull: 0,
    state: "exhaleHold",
    secondsRemaining: 2,
    currentRep: 1,
  });

  assertEquals(breather.getState(11), {
    percentFull: 0,
    state: "exhaleHold",
    secondsRemaining: 1,
    currentRep: 1,
  });

  assertEquals(breather.getState(12), {
    percentFull: 0,
    state: "inhale",
    secondsRemaining: 4,
    currentRep: 2,
  });

  assertEquals(breather.getState(13), {
    percentFull: 0.25,
    state: "inhale",
    secondsRemaining: 3,
    currentRep: 2,
  });
});

Deno.test("Breather getState counts reps correctly", () => {
  const breather = new Breather({
    inhale: 5,
    inhaleHold: 0,
    exhale: 5,
    exhaleHold: 0,
  });

  for (let i = 0; i < 10; i++) {
    const { currentRep } = breather.getState(i * 11);
    assertEquals(currentRep, i + 1);
  }
});
