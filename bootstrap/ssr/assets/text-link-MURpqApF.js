import { jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { c as cn } from "./app-logo-icon-C3md9RLq.js";
function TextLink({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",
        className
      ),
      ...props,
      children
    }
  );
}
export {
  TextLink as T
};
