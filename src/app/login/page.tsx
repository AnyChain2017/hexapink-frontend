import Image from "next/image";
import HomeHeader from "@/components/TheHomePage/HomeHeader";
import BackgroundImage1 from "@/assets/TheHomePage/image/bg1.png";
import LoginPageMain from "@/components/TheLoginPage/LoginPageMain";
export default function LoginPage() {
  return (
    <div className="w-full h-[calc(100vh-100px)] relative">
      <div className="absolute left-0 top-0 -z-10">
        <Image src={BackgroundImage1} alt="" />
      </div>
      <HomeHeader />
      <LoginPageMain />
    </div>
  );
}
