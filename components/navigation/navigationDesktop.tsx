import Link from "next/link";
import { useRouter } from "next/router";

export const NavigationDesktop = () => {
  const router = useRouter();
  const activeLink = (url: string, pathname: string) =>
    pathname === url ? "font-bold" : "";
  return (
    <div className="hidden sm:flex items-center">
      <div className="flex">
        <div className="mr-2">
          <Link href="/work">
            <a className={`text-lg ${activeLink(router.pathname, "/work")}`}>
              work
            </a>
          </Link>
        </div>
        <div className="mr-2">
          <Link href="/awards">
            <a className={`text-lg ${activeLink(router.pathname, "/awards")}`}>
              awards
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
