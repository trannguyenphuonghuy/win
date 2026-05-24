import LoginCard from "@/components/auth/login-card";
import LoginHero from "@/components/auth/login-hero";

export default function LoginWrapper() {
  return (
    <main className="min-h-screen">
      <div className="grid min-h-screen lg:grid-cols-2">
        <LoginHero />
        <LoginCard />
      </div>
    </main>
  );
}