import { auth } from "../../lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Export handlers for all HTTP methods
export const { POST, GET } = toNextJsHandler(auth); 