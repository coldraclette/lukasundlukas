import Link from "next/link";

export const NavigationFrontpage = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2">
        <Link href="/work">work</Link>
      </div>
      <div className="mx-2">
        <Link href="/about">about</Link>
      </div>
      <div className="mx-2">
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};
