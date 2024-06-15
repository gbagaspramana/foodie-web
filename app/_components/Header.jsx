"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CartUpdateContext } from "../_context/CartUpdateContext";
import GlobalApi from "../_utils/GlobalApi";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Cart from "./Cart";

function Header() {
  const { user, isSignedIn } = useUser();
  const { updateCart, setUpdateCart } = useContext(CartUpdateContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    console.log("Execute Me!");
    user && GetUserCart();
  }, [updateCart && user]);

  const GetUserCart = () => {
    GlobalApi.GetUserCart(user?.primaryEmailAddress.emailAddress).then(
      (resp) => {
        console.log(resp);
        setUpdateCart(resp.cart);
        setCart(resp?.userCarts);
      }
    );
  };

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
        <div className="flex gap-3 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex gap-2 items-center">
                <ShoppingCart />
                <label className="p-1 px-3 rounded-full bg-slate-200">
                  {cart?.length}
                </label>
              </div>
            </PopoverTrigger>
            <PopoverContent classname="w-full ">
              <Cart cart={cart} />
            </PopoverContent>
          </Popover>

          <UserButton />
        </div>
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
