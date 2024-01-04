import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Navbar } from "./_components/navbar";

const headingFont = localFont({
  src: "../../public/Muyao-Softbrush-2.ttf",
});
export default function DashboardPage() {
  return (
    <div
      className={cn(
        headingFont.className,
        "flex items-center justify-center flex-col"
      )}
    >
      <Navbar />
      <div className="mb-4 p-4 flex items-center border shadow-sm bg-amber-100 text-amber-700">
        <Medal className="h-6 w-6" />
        似懂非懂辅导费
      </div>
      <div className=" text-3xl md:text-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 w-fit">
        {"前进 "}
      </div>
      <Button className="mt-6" asChild>
        <Link href="sign-up"> 注册</Link>
      </Button>
    </div>
  );
}
