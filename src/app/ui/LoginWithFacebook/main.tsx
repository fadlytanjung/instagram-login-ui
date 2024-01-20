import Image from "next/image";

export default function LoginWithFacebook() {
  return (
    <div className="flex items-center justify-center my-[8px] cursor-pointer">
      <Image
        src="/facebook.png"
        width={20}
        height={20}
        alt="logo"
        className="mr-[4px] h-[20px] w-[20px]"
      />
      <p className="text-sm font-semibold text-[#385185]">Log in with Facebook</p>
    </div>
  )
}