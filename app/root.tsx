import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles/global.css";

export default function App() {
  return (
    <html
      lang="en"
      data-force-color-scheme="light"
      className="bg-background text-foreground text-base accent-primary"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
