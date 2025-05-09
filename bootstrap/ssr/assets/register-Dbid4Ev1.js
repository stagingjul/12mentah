import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { L as Label, I as Input, a as InputError } from "./label-BreugeMW.js";
import { T as TextLink } from "./text-link-MURpqApF.js";
import { B as Button } from "./app-logo-icon-C3md9RLq.js";
import { A as AuthLayout } from "./auth-layout-BS6KLUtT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { description: "Enter your details below to create your account", title: "Create an account", children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-6", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "name",
              disabled: processing,
              id: "name",
              placeholder: "Full name",
              tabIndex: 1,
              type: "text",
              value: data.name,
              autoFocus: true,
              required: true,
              onChange: (e) => setData("name", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { className: "mt-2", message: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email address" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "email",
              disabled: processing,
              id: "email",
              placeholder: "email@example.com",
              tabIndex: 2,
              type: "email",
              value: data.email,
              required: true,
              onChange: (e) => setData("email", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              autoComplete: "new-password",
              disabled: processing,
              id: "password",
              placeholder: "Password",
              tabIndex: 3,
              type: "password",
              value: data.password,
              required: true,
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
              disabled: processing,
              id: "password_confirmation",
              placeholder: "Confirm password",
              tabIndex: 4,
              type: "password",
              value: data.password_confirmation,
              required: true,
              onChange: (e) => setData("password_confirmation", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
        ] }),
        /* @__PURE__ */ jsxs(Button, { className: "mt-2 w-full", disabled: processing, tabIndex: 5, type: "submit", children: [
          processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
          "Create account"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground text-center text-sm", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsx(TextLink, { href: route("login"), tabIndex: 6, children: "Log in" })
      ] })
    ] })
  ] });
}
export {
  Register as default
};
