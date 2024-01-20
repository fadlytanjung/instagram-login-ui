import Image from "next/image"
export default function GetApp() {
  return (
    <div className="flex flex-col items-center justify-center gap-[10px]">
      <p className="text-sm">Get the app.</p>
      <Image
        width={255}
        height={44}
        src="/get-it.png"
        alt="get app"
      />
    </div>
  )
}