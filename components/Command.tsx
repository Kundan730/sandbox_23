import React from "react";
// import {
//   Calendar,
//   Clock,
//   FileText,
//   PenTool,
//   Search,
//   Settings,
//   Star,
// } from "lucide-react";
import { Brain, Code, Cloudy, Wrench, Search, Boxes } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export const LandingPageCommand = () => {
  return (
    <Command
      className="rounded-none  md:min-w-[450px] mt-8"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <CommandInput
        placeholder="Search productivity tools..."
        className="text-base py-3"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Popular Tracks">
          <CommandItem className="py-3">
            <Brain className="mr-2 h-5 w-5" />
            <span className="text-base">AI/ML</span>
            {/* <span className="ml-auto text-xs text-muted-foreground">
              Productivity
            </span> */}
          </CommandItem>
          <CommandItem className="py-3">
            <Boxes className="mr-2 h-5 w-5" />
            <span className="text-base">BlockChain</span>
            {/* <span className="ml-auto text-xs text-muted-foreground">
              Time Tracking
            </span> */}
          </CommandItem>
          <CommandItem className="py-3">
            <Cloudy className="mr-2 h-5 w-5" />
            <span className="text-base">Cloud Computing</span>
            {/* <span className="ml-auto text-xs text-muted-foreground">
              Project Management
            </span> */}
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Categories" className="text-slate-500">
          <CommandItem>
            <Code className="mr-2 h-5 w-5" />
            <span className="text-base">JavaScript</span>
          </CommandItem>
          <CommandItem>
            <Code className="mr-2 h-5 w-5" />
            <span className="text-base">Python</span>
          </CommandItem>

          <CommandItem>
            <Code className="mr-2 h-5 w-5" />
            <span className="text-base">BlockChain</span>
          </CommandItem>
          {/* 
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Workflow Automation</span>
          </CommandItem> */}
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};