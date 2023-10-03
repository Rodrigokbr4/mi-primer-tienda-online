import { Link } from "react-router-dom";

export function Logo() {
    return (
      <div className=" text-center md:text-right">
        <Link  to="/" className="text-2xl my-2 font-mono font-semibold md:text-4xl">
          TiendaX
        </Link>
      </div>
    );
  }
  