import GoogleButton from "@/components/auth/google-button";

export default function LoginCard() {
  return (
    <section className="flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-foreground">
            Đăng nhập
          </h2>
          <p className="mt-3 text-text-1">
            Đăng nhập hoặc đăng ký bằng tài khoản Google
          </p>
        </div>
        <GoogleButton />
        <p className="mt-6 text-center text-sm text-text-1">
          Khi tiếp tục, bạn đồng ý với điều khoản và chính sách bảo mật.
        </p>
      </div>
    </section>
  );
}