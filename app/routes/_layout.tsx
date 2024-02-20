// import { Button } from "#app/components/button";
import { Link, Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div className="flex justify-center">
      <div className="p-xs gap-sm flex flex-col w-[70ch]">
        <nav className="flex items-center gap-xs">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          {/* <Button className="ml-auto" onPress={() => {
            const htmlTag = document.getElementsByTagName("html").item(0)
            const theme = htmlTag?.getAttribute("data-force-color-scheme");
            htmlTag?.setAttribute("data-force-color-scheme", theme === "dark" ? "light" : "dark");
          }}>Theme</Button> */}
        </nav>
        <Outlet />
      </div>
    </div>
  );
}