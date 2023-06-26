'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
        <span className="logo-text">Prompt Journey</span>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button>Sign Out</button>
            <Link href="/profile">
              <Image src="/assets/images/profile.svg" alt="profile" width={37} height={37} className="rounded-full" />
            </Link>
          </div>
        ) : (
          <div>blabla</div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
