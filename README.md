# Breathwork V2

> A simple app to help you do breathwork exercises without counting.

You can use your breathing to influence your autonomic nervious system. This can
be useful if you want to feel calm, energetic, focused, or go to sleep.

I read a great
[book on breathwork](https://www.amazon.com/Practical-Guide-Breathwork-Remedy-Condition-ebook/dp/B08V9FHD3P?dib_tag=se&dib=eyJ2IjoiMSJ9.p7_6k6knHZ0xvML9DJ2WAzdQM18W-0kmrI3L_VjuUPhid9bj_w4s0Z_mCT_9BDzcvD6TxJ8k0BT8mDttq1FWScwStQaspROWAL095B-a1BxAhnD37jNcbVTI2HSju3djZPl35goQROUmigX1zD962FSdH64zxzQ06hrTPMi4HGakaj9pPQi9jf45yKrbnUGfRWs2e-dSbKR4WIeE_8cnyEiaLnhO9BkhEJh0t_pI44A.YFQROoJ_opxg7Iy80_5LxmYabK8HvuJIAFBdMm_OH4s&qid=1714685969&sr=8-1)
and it laid out several simple breathing techniques that you could do to change
your state.

However, I don't have the patience to pull up my notes everytime I want to
quickly do some breathwork, and counting is a pain. There are apps out there
that can do this for you, but I found them less configurable than I would like
and it wasn't easy to save a routine to pull up later, if they were
configurable.

This app seeks to fill this gap. It's main features are that you can

- set inhale, inhale-hold, exhale, exhale-hold, and the number of repetitions
- bookmark or save the URL to save your configuration
- follow along with a simple visualization so you don't have to count seconds or
  reps
- use several shortcode links to go to specific breathwork plans for specific
  purposes, like calming, focus, sleep, or energy

## Local Setup

This project uses the [Deno](https://deno.com/) typescript runtime and
[Fresh 1.x](https://fresh.deno.dev/). Make sure you have Deno installed. And
then you can run the project locally with

```bash
deno task start
```

This project is also hosted with [Deno Deploy](https://deno.com/deploy). There
is a deploy Github action that handles that deployment.

You can run the tests for the project with

```bash
deno task test
```
