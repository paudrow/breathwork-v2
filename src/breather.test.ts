import { Breather } from "./breather.ts";

import { assertEquals } from "@std/assert";

Deno.test("Breather works for one rep", () => {
  const breather = new Breather({
    inhale: 4,
    inhaleHold: 2,
    exhale: 4,
    exhaleHold: 2,
  });

  assertEquals(breather.getState(0), {
    percentFull: 0,
    state: "inhale",
    timeRemaining: 4,
    currentRep: 0,
  });

  assertEquals(breather.getState(1), {
    percentFull: 0.25,
    state: "inhale",
    timeRemaining: 3,
    currentRep: 0,
  });

  assertEquals(breather.getState(2), {
    percentFull: 0.5,
    state: "inhale",
    timeRemaining: 2,
    currentRep: 0,
  });

  assertEquals(breather.getState(3), {
    percentFull: 0.75,
    state: "inhale",
    timeRemaining: 1,
    currentRep: 0,
  });

  assertEquals(breather.getState(4), {
    percentFull: 1,
    state: "inhaleHold",
    timeRemaining: 2,
    currentRep: 0,
  });

  assertEquals(breather.getState(5), {
    percentFull: 1,
    state: "inhaleHold",
    timeRemaining: 1,
    currentRep: 0,
  });

  assertEquals(breather.getState(6), {
    percentFull: 1,
    state: "exhale",
    timeRemaining: 4,
    currentRep: 0,
  });

  assertEquals(breather.getState(7), {
    percentFull: 0.75,
    state: "exhale",
    timeRemaining: 3,
    currentRep: 0,
  });

  assertEquals(breather.getState(10), {
    percentFull: 0,
    state: "exhaleHold",
    timeRemaining: 2,
    currentRep: 0,
  });

  assertEquals(breather.getState(11), {
    percentFull: 0,
    state: "exhaleHold",
    timeRemaining: 1,
    currentRep: 0,
  });

  assertEquals(breather.getState(12), {
    percentFull: 0,
    state: "inhale",
    timeRemaining: 4,
    currentRep: 1,
  });

  assertEquals(breather.getState(13), {
    percentFull: 0.25,
    state: "inhale",
    timeRemaining: 3,
    currentRep: 1,
  });
});

Deno.test("Breather counts reps correctly", () => {
  const breather = new Breather({
    inhale: 5,
    inhaleHold: 0,
    exhale: 5,
    exhaleHold: 0,
  });

  for (let i = 0; i < 10; i++) {
    const { currentRep } = breather.getState(i * 10);
    assertEquals(currentRep, i);
  }
});
