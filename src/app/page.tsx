import DontHaveAccount from "./ui/DontHaveAccount";
import GetApp from "./ui/GetApp";
import LoginForm from "./ui/LoginForm";
import LoginLogo from "./ui/LoginLogo";

export default function Home() {
  return (
  <main className="flex items-center justify-center
    flex-col gap-[10px] mt-[12px]
  ">
    <div className="border border-stroke w-[350px]
    flex flex-col items-center py-[12px]">
      <LoginLogo />
      <LoginForm />
    </div>
    <DontHaveAccount />
    <GetApp />
  </main>
  );
}
