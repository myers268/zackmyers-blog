import { Outlet } from "@remix-run/react"

export default function Component() {
  return (
    <div className="text-balance">
      <Outlet />
    </div>
  );
}