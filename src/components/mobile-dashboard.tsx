"use client";
import React from "react";
import { SearchIcon, Triangle } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "./ui/input";
import { ToggleTheme } from "./toggle-theme";

import { motion } from "framer-motion";

function MobileDashbard() {
  return (
    <header className="md:hidden flex flex-row justify-between w-full border-b-2">
      <div className="p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-[0.2] p-2 grid-flow-col ">
        <Input
          placeholder="Search your city"
          className="border-2 border-gray-400 focus-visible:ring-0"
        ></Input>
        <motion.div>
          <Button size={"icon"} variant={"link"}>
            <SearchIcon className="text-muted-foreground" />
          </Button>
        </motion.div>
      </nav>
      <nav className="mt-auto p-2">
        <ToggleTheme />
      </nav>
    </header>
  );
}

export default MobileDashbard;
