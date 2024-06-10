import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuSection from "./MenuSection";

const RestroTabs = ({ restaurant }) => {
  return (
    <Tabs defaultValue="category" className="w-full mt-10">
      <TabsList className="bg-slate-200 text-black">
        <TabsTrigger
          value="category"
          className="hover:bg-primary hover:text-white"
        >
          Category
        </TabsTrigger>
        <TabsTrigger
          value="about"
          className="hover:bg-primary hover:text-white"
        >
          About
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="hover:bg-primary hover:text-white"
        >
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="category">
        <MenuSection restaurant={restaurant} />
      </TabsContent>
      <TabsContent value="about">About</TabsContent>
      <TabsContent value="reviews">Review</TabsContent>
    </Tabs>
  );
};

export default RestroTabs;
