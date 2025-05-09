import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import { T as TextLink } from "./text-link-MURpqApF.js";
import { B as Button } from "./app-logo-icon-C3md9RLq.js";
import { A as AuthLayout } from "./auth-layout-BS6KLUtT.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(AuthLayout, { description: "Please verify your email address by clicking on the link we just emailed to you.", title: "Verify email", children: [
    /* @__PURE__ */ jsx(Head, { title: "Email verification" }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-center text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsxs("form", { className: "space-y-6 text-center", onSubmit: submit, children: [
      /* @__PURE__ */ jsxs(Button, { disabled: processing, variant: "secondary", children: [
        processing && /* @__PURE__ */ jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
        "Resend verification email"
      ] }),
      /* @__PURE__ */ jsx(TextLink, { className: "mx-auto block text-sm", href: route("logout"), method: "post", children: "Log out" })
    ] })
  ] });
}
export {
  VerifyEmail as default
};
