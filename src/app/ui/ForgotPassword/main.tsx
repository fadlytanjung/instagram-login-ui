import Link from "next/link"

export default function ForgotPassword() {
  return (
    <Link href="/forgot-password" className="text-center my-[12px]">
      <p className="text-link text-xs">Forgot Password?</p>
    </Link>
  )
}