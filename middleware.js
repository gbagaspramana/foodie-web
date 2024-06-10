import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
