"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div
      className="bg-white flex justify-between items-center p-3 md:px-20 shadow-md
    fixed w-full top-0 left-0 z-20"
    >
      <Image src="/logo.png" alt="logo" width={150} height={150} />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search />
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}

export default Header;
