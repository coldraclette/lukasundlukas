import Link from "next/link";

interface props {
  closeNav: () => void;
}

export const NavigationMobile = ({ closeNav }: props) => {
  return (
    <div className="sm:hidden fixed h-screen w-full top-0 left-0 backdrop-blur-md z-40">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="flex flex-col text-center justify-between h-full my-32">
          <div className="text-7xl" onClick={() => closeNav()}>
            <Link href="/work">
              <a>work</a>
            </Link>
          </div>
          <div className="text-7xl" onClick={() => closeNav()}>
            <Link href="/awards">
              <a>awards</a>
            </Link>
          </div>
          <div className="text-7xl" onClick={() => closeNav()}>
            <Link href="/about">
              <a>about</a>
            </Link>
          </div>
          <div className="text-7xl" onClick={() => closeNav()}>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
