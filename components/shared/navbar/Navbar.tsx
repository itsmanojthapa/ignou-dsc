import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-between background-light850_dark100 fixed z-50 w-full gap-5 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/">
        <Image
          src={"/assets/images/logo.png"}
          width={200}
          height={200}
          alt="Devflow"
        />
      </Link>
      {/* TODO:Global Search */}
      <div className="flex-between gap-5">
        ThemeComponent
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#2563EB",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};
export default Navbar;
