import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { Transition } from "@headlessui/react";
import { useForm, Head } from "@inertiajs/react";
import { S as SettingsLayout, H as HeadingSmall } from "./layout-Be2EkmW0.js";
import { L as Label, I as Input, a as InputError } from "./label-BreugeMW.js";
import { B as Button } from "./app-logo-icon-C3md9RLq.js";
import { A as AppLayout } from "./app-layout-CjiCg5zp.js";
import "@radix-ui/react-separator";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "lucide-react";
import "@radix-ui/react-dialog";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-avatar";
const breadcrumbs = [
  {
    title: "Password settings",
    href: "/settings/password"
  }
];
function Password() {
  const passwordInput = useRef(null);
  const currentPasswordInput = useRef(null);
  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const updatePassword = (e) => {
    e.preventDefault();
    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors2) => {
        var _a, _b;
        if (errors2.password) {
          reset("password", "password_confirmation");
          (_a = passwordInput.current) == null ? void 0 : _a.focus();
        }
        if (errors2.current_password) {
          reset("current_password");
          (_b = currentPasswordInput.current) == null ? void 0 : _b.focus();
        }
      }
    });
  };
  return /* @__PURE__ */ jsxs(AppLayout, { breadcrumbs, children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile settings" }),
    /* @__PURE__ */ jsx(SettingsLayout, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsx(HeadingSmall, { description: "Ensure your account is using a long, random password to stay secure", title: "Update password" }),
      /* @__PURE__ */ jsxs("form", { className: "space-y-6", onSubmit: updatePassword, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "current_password", children: "Current password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "current-password",
              className: "mt-1 block w-full",
              id: "current_password",
              placeholder: "Current password",
              ref: currentPasswordInput,
              type: "password",
              value: data.current_password,
              onChange: (e) => setData("current_password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.current_password })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "New password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "new-password",
              className: "mt-1 block w-full",
              id: "password",
              placeholder: "New password",
              ref: passwordInput,
              type: "password",
              value: data.password,
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "new-password",
              className: "mt-1 block w-full",
              id: "password_confirmation",
              placeholder: "Confirm password",
              type: "password",
              value: data.password_confirmation,
              onChange: (e) => setData("password_confirmation", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Save password" }),
          /* @__PURE__ */ jsx(
            Transition,
            {
              enter: "transition ease-in-out",
              enterFrom: "opacity-0",
              leave: "transition ease-in-out",
              leaveTo: "opacity-0",
              show: recentlySuccessful,
              children: /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: "Saved" })
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Password as default
};
