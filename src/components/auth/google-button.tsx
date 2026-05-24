"use client";

import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/icons/google-icon";

export default function GoogleButton() {
  const handleLogin = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleLogin}
      className="group flex h-14 w-full border border-border-strong cursor-pointer items-center justify-center gap-3 rounded-md bg-background px-6 font-semibold text-foreground shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <GoogleIcon />

      <span>Tiếp tục với Google</span>
    </button>
  );
}
