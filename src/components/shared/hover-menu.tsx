import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  text: string;
  hoverItems?: {
    text: string;
    link?: string;
  }[];
}

export const HoverMenu: FC<Props> = ({ className, text, hoverItems }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger
            className={cn(
              "bg-transparent h-14 flex  gap-3 justify-between min-w-full text-base cursor-pointer items-center hover:bg-slate-300/50 transition-all",
              className
            )}
          >
            {text}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-surface_container shadow flex flex-col pb-2 rounded-[2px] w-40 items-center justify-center px-4 pt-2">
            {hoverItems?.map((item, i) => (
              <NavigationMenuLink key={i} className="h-14 py-2 w-full">
                <Link to={item.link ?? ""}>{item.text}</Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
