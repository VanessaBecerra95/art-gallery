import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import globalStyles from "~/styles/global.css";
import { NavLink } from "@remix-run/react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  const linkClassName = ({
    isActive,
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }) => {
    if (isPending) {
      return "pending";
    } else if (isActive) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={globalStyles} />
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <NavLink to="/" className={linkClassName}>
            Inicio
          </NavLink>
          <NavLink to="/gallery" className={linkClassName}>
            Galería
          </NavLink>
          <NavLink to="/contact" className={linkClassName}>
            Contacto
          </NavLink>
        </nav>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
