import Image from "next/image"
export default function LoginLogo() {
  return (
    <Image
      src="/logo.png"
      width={175}
      height={55}
      alt="logo"
      priority
      className="mt-[36px] mb-[12px] h-[55px] w-[175px]"
    />
  );
}
