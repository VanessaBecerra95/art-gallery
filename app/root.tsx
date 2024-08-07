import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "~/styles/main.css?url";
import "./tailwind.css";
import { Nav } from "./routes/nav";
import { Footer } from "./routes/footer";
import type { LinksFunction } from "@remix-run/node";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lora:ital,wght@0,400..700;1,400..700&family=Oswald:wght@200..700&display=swap",
  },
];

export default function App() {
  return <Outlet />;
}
