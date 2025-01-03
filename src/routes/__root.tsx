import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>{" "}
        <Link
          to="/contact"
          activeProps={{
            className: "font-bold",
          }}
        >
          Contact
        </Link>{" "}
        <Link
          to="/settings"
          activeProps={{
            className: "font-bold",
          }}
        >
          Settings
        </Link>{" "}
        <Link
          to="/settings/notifications"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
          from={Route.fullPath}
          params={{
            settingsId: "notifications",
            auto: true,
          }}
        >
          Settings-Notification
        </Link>{" "}
        <Link to="/blog/post">
          {({ isActive }) => {
            return (
              <>
                <span>My Blog Post</span>
                <Icon className={isActive ? "active" : "inactive"} />
              </>
            );
          }}
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
