import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/Muyao-Softbrush-2.ttf",
});

export default function Home() {
  return (
    <main className="flex w-full h-full  space-y-6 flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
      <div className=" space-y-6 text-center text-white">
        <h1 className=" text-4xl  font-semibold drop-shadow-lg">🔐 权限管理</h1>
        <p className={cn("text-clip", headingFont.className)}>
          输入你的账号登录
        </p>
        <Button
          variant={"secondary"}
          size={"lg"}
          // onClick={() => console.log("11")}
        >
          登录
        </Button>
      </div>
    </main>
  );
}
