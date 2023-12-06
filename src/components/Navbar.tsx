import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";
import { getServerSideUser } from "../lib/paylaod-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 h-16">
      <header className="relative bg-white w-full">
        <MaxWidthWrapper>
          <div className="flex items-center">
            <div className="hidden absolute top-2 right-2 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {user ? null : (
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "outline",
                  })}
                >
                  Se connecter
                </Link>
              )}

              {user ? null : (
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              )}

              

              {user ? (
                <UserAccountNav user={user} />
              ) : (
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    variant: "outline",
                  })}
                >
                  Créer un compte
                </Link>
              )}

              {user ? (
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              ) : null}

              {user ? null : (
                <div className="flex lg:ml-6">
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>
              )}
              <div className="ml-4 flow-root lg:ml-6">
                <Cart />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 w-full flex justify-center mt-14">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-2  flex mb-12 mr-2 lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-16 w-16" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-4 lg:block lg:self-stretch ">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
