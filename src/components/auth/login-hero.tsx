import Image from "next/image";

import { LOGIN_BANNER } from "@/constants/images";
import { COPYRIGHT, SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

export default function LoginHero() {
  return (
    <aside className="relative hidden lg:block border-r border-border-soft">
      <Image
        src={LOGIN_BANNER}
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 flex h-full flex-col justify-between p-12">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-foreground">
            Chào mừng bạn đến với {SITE_NAME}
          </h1>
          <p className="mt-2 max-w-md text-lg text-text-1">
            {SITE_DESCRIPTION}
          </p>
        </div>
        <p className="text-sm text-text-1">{COPYRIGHT}</p>
      </div>
    </aside>
  );
}