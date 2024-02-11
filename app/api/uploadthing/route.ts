import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Export routes for Next.js App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
  config: {
    // Add your configuration here, such as middleware, route parameters, etc.
    // Example:
    // middleware: [authMiddleware, loggingMiddleware],
    // parameters: { id: 'number' },
  },
});
