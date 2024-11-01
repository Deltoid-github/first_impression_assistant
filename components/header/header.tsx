import HeaderLogo from "@/components/header/header-logo";
import { MenuIcon } from "@/components/header/header-menu";

export function Header() {
  return (
    <header className="z-10 fixed w-screen top-0 h-[70px] md:h-[100px]">
      <div className="px-3 w-full md:px-9 h-full gap-12">
        <div
          className="flex flex-row justify-between w-full h-full max-w-[1400px] items-center mx-auto"
          style={{ padding: "0 1rem" }}
        >
          <HeaderLogo />
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
