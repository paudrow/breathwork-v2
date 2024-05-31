import { Handlers } from "$fresh/server.ts";
import { modelNameToParams } from "../src/models.ts";

export const handler: Handlers = {
  GET(req, ctx) {
    const { model } = ctx.params;
    const params = modelNameToParams.get(model);
    if (!params) {
      return new Response("Model not found", { status: 404 });
    }
    const url = new URL(req.url);

    url.pathname = "/";
    url.searchParams.set("inhale", params.inhale.toString());
    url.searchParams.set("inhaleHold", params.inhaleHold.toString());
    url.searchParams.set("exhale", params.exhale.toString());
    url.searchParams.set("exhaleHold", params.exhaleHold.toString());
    url.searchParams.set("reps", params.reps.toString());

    return new Response(null, {
      status: 302, // redirect to the root path
      headers: {
        Location: url.toString(),
      },
    });
  },
};
