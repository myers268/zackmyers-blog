import { Button } from "#app/components/button";
import { Link, Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div className="p-md flex flex-col h-screen">
      <nav className="flex items-center justify-end gap-xs">
        <Link to="/">Home</Link>
        <Link to="articles">Writing</Link>
        <Link to="about">About</Link>
        <Button onPress={() => {
          const htmlTag = document.getElementsByTagName("html").item(0)
          const theme = htmlTag?.getAttribute("data-force-color-scheme");
          htmlTag?.setAttribute("data-force-color-scheme", theme === "dark" ? "light" : "dark");
        }}>Theme</Button>
      </nav>
      <Outlet />
    </div>
  );
}