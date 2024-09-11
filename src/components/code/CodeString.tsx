import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CodeString({code}:{code:string}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <pre className="dark:bg-zinc-900 bg-zinc-100 my-2 rounded-md flex justify-between w-full max-w-xl">
      <code className="font-inconsolata text-sm select-all pl-4 py-2 text-zinc-800 dark:text-zinc-100">
        {code}
      </code>
      <div className="flex justify-end items-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="button copy code"
                onClick={copyToClipboard}
                className="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 p-1 rounded-md"
              >
                <Copy className=" w-4 h-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </pre>
  );
}

export default CodeString;
