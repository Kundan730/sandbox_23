import React from "react";
import {
  Calendar,
  Clock,
  FileText,
  PenTool,
  Search,
  Settings,
  Star,
} from "lucide-react";

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
        <CommandGroup heading="Popular Tools">
          <CommandItem className="py-3">
            <PenTool className="mr-2 h-5 w-5" />
            <span className="font-medium">Notion</span>
            <span className="ml-auto text-xs text-muted-foreground">
              Productivity
            </span>
          </CommandItem>
          <CommandItem className="py-3">
            <Clock className="mr-2 h-5 w-5" />
            <span className="font-medium">Time Doctor</span>
            <span className="ml-auto text-xs text-muted-foreground">
              Time Tracking
            </span>
          </CommandItem>
          <CommandItem className="py-3">
            <Calendar className="mr-2 h-5 w-5" />
            <span className="font-medium">Asana</span>
            <span className="ml-auto text-xs text-muted-foreground">
              Project Management
            </span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Categories">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Document Editors</span>
          </CommandItem>
          <CommandItem>
            <Star className="mr-2 h-4 w-4" />
            <span>Task Management</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Workflow Automation</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Special Offer">
          <CommandItem className="py-3 text-green-600">
            <Search className="mr-2 h-5 w-5" />
            <span className="font-medium">
              Get up to 6 months free of Notion + unlimited AI
            </span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
