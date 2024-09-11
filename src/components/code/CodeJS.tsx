import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import javascript from "highlight.js/lib/languages/javascript";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

hljs.registerLanguage("javascript", javascript);

type Props = {
  code: string;
};

function CodeJs({ code }: Props) {
  const highlightedCode = hljs.highlight(code, {
    language: "javascript",
  }).value;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <section className="my-2 rounded-lg relative w-full max-w-60 min-[350px]:max-w-72 min-[450px]:max-w-96 sm:max-w-lg  md:max-w-xl  lg:max-w-2xl">
      <div className="flex justify-end">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                aria-label="button copy code"
                onClick={copyToClipboard}
                className="absolute bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 p-1 rounded-md"
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
      <div
        className="w-full bg-zinc-100 dark:bg-zinc-900/70 rounded-lg overflow-auto"
      >
        <pre>
          <code
            className="inline-block px-4 py-3 text-sm language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
    </section>
  );
}

export default CodeJs;