import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full border border-white/10 focus:border-accent focus-visible:border-accent bg-primary placeholder:text-white/60 rounded-xl px-4 py-5 text-base outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
