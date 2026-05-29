import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gold">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          That page took a detour. Let's get you back on track.
        </p>
        <Link to="/" className="inline-flex mt-6 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try refreshing the page.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 px-5 py-2.5 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium"
        >Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Elizabetho — SEO Specialist & Digital Growth Consultant" },
      { name: "description", content: "Elizabetho is a results-driven SEO specialist and digital growth consultant helping brands rank on Google, build authority, and convert more clients in 2026." },
      { name: "author", content: "Elizabetho" },
      { name: "theme-color", content: "#1a1a1a" },
      { property: "og:site_name", content: "Elizabetho" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Elizabetho — SEO Specialist & Digital Growth Consultant" },
      { property: "og:description", content: "Rank higher. Convert better. Grow faster with premium SEO." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@bayewuelizabeth" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Elizabetho",
          jobTitle: "SEO Specialist & Digital Growth Consultant",
          email: "hello@elizabetho.com.ng",
          telephone: "+2347038905749",
          sameAs: ["https://x.com/bayewuelizabeth"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
