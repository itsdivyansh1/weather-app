import React from "react";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface HeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

function Header({ title, description, icon }: HeaderProps) {
  return (
    <div className="flex justify-between space-y-2">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-x-2">
        <Button size={"icon"} variant={"link"}>
          {icon}
        </Button>
      </div>
    </div>
  );
}

export default Header;
