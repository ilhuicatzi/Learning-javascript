import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4">
      <Link to="/" className="text-3xl font-bold">
        <img
          src="/js.svg"
          alt="logo javascript"
          className="w-9 h-9 rounded-md"
        />
      </Link>
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/theory-questions"
            className="px-3 py-1.5 hover:bg-muted rounded-md"
          >
            Teoría
          </Link>
          <Link
            to="/code-questions"
            className="px-3 py-1.5 hover:bg-muted rounded-md"
          >
            Código
          </Link>
        </div>
        <div className="sm:hidden">
          <Button
          size="icon"
          variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-16 right-4 bg-muted w-full py-4 rounded-md shadow-md">
            <Link
              onClick={() => setIsOpen(false)}
              to="/theory-questions"
              className="flex justify-center items-center w-full hover:bg-background py-2"
            >
              Teoría
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/code-questions"
              className="flex justify-center items-center w-full hover:bg-background py-2"
            >
              Código
            </Link>
          </div>
        )}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
