import { createStart } from "@tanstack/react-start";
import { createCsrfMiddleware, errorMiddleware } from "@tanstack/react-start/server";

const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  functionMiddleware: [],
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
