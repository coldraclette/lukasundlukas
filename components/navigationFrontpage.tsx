import Link from "next/link";

export const NavigationFrontpage = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2">
        <Link href="/work">
          <a className="text-4xl">work</a>
        </Link>
      </div>
      <div className="mx-2">
        <Link href="/about">
          <a className="text-4xl">about</a>
        </Link>
      </div>
      <div className="mx-2">
        <Link href="/contact">
          <a className="text-4xl">contact</a>
        </Link>
      </div>
    </div>
  );
};
