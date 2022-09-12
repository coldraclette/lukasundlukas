import Link from "next/link";
import { useRouter } from "next/router";

export const Navigation = () => {
  const router = useRouter();
  const activeLink = (url: string, pathname: string) =>
    pathname === url ? "font-bold" : "";

  return (
    <div className="flex justify-between items-center mb-4">
      <Link href="/">
        <a className="text-lg font-bold">Lukas und Lukas.</a>
      </Link>
      <div className="flex">
        <div className="mr-2">
          <Link href="/work">
            <a className={`text-lg ${activeLink(router.pathname, "/work")}`}>
              work
            </a>
          </Link>
        </div>
        <div className="mr-2">
          <Link href="/about">
            <a className={`text-lg ${activeLink(router.pathname, "/about")}`}>
              about
            </a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a className={`text-lg ${activeLink(router.pathname, "/contact")}`}>
              contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
