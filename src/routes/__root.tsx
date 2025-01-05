import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Camera, Icon } from "lucide-react";

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
            settingsId: "notificationsId",
            auto: true,
          }}
        >
          Settings-Notification
        </Link>{" "}
        <Link
          to="/settings/$settingsId"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
          from={Route.fullPath}
          params={{
            settingsId: "notice",
          }}
        >
          Settings-Dym
        </Link>{" "}
        <Link to="/blog/post" params={{ settingsId: 34 }}>
          {({ isActive }) => {
            return (
              <>
                <span>My Blog Post</span>
                <Camera className={isActive ? "active" : "inactive"} />
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
