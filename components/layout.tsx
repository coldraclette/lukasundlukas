import Link from "next/link";
import { useRouter } from "next/router";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const activeLink = (url: string, pathname: string) =>
    pathname === url ? "font-bold" : "";

  return (
    <div className="h-full max-w-screen-xl m-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
          <a className="text-lg font-bold">Lukas und Lukas.</a>
        </Link>
        <div className="flex">
          <div className="mr-2">
            <Link href="/">
              <a className={`text-lg ${activeLink(router.pathname, "/")}`}>
                work
              </a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a className={`text-lg ${activeLink(router.pathname, "/about")}`}>
                about
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
