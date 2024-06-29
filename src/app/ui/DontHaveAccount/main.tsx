/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
export default function DontHaveAccount() {
  return (
    <div className="flex mb-[10px] p-[10px]
      border border-stroke w-[350px]
      text-center items-center justify-center
      h-[63px]
    ">
      <p className="text-sm">Don't have an account?&nbsp;
        <Link
          href="/sign-up"
          className="font-semibold text-primary-button opacity-[0.7]"
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}