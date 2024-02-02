import { Button } from "../ui/button";
import React from "react";
import { RiAlignLeft } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <RiAlignLeft className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-xl text-black mt-10">
                  <Link href={"/"}>Sign in</Link>
                  <Link href={"/"}>Get Started</Link>
                  <Link href={"/"}>Pricing</Link>
                  <Link href={"/"}>About</Link>
                  <Link href={"/"}>Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Sign in
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </div>
  );
};

export default ActionButtons;
