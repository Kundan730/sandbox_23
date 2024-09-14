'use client';

import { useState } from 'react';
import LaunchesMenu from './menus/launches-menu';
import Link from 'next/link';
import CommunityMenu from './menus/community-menu';
import AboutMenu from './menus/about-menu';

const Menu = () => {
  const [showLaunchesMenu, setShowLaunchesMenu] = useState(false);
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  return (
    <div className="hidden lg:flex items-center relative">
      <div className="space-x-6 text-black text-lg flex items-center cursor-pointer">
        <div
          onMouseEnter={() => setShowLaunchesMenu(true)}
          onMouseLeave={() => setShowLaunchesMenu(false)}
          className="hover:text-slate-400 py-4"
        >
          Launches {showLaunchesMenu && <LaunchesMenu />}
        </div>

        <Link href={'/dashboard/categories'} className="hover:text-slate-400 py-4">
          Categories
        </Link>
        <Link href={'/admin'} className="hover:text-slate-400 py-4">
          Admin
        </Link>

        <div
          onMouseEnter={() => setShowCommunityMenu(true)}
          onMouseLeave={() => setShowCommunityMenu(false)}
          className="hover:text-slate-400 py-4"
        >
          Community {showCommunityMenu && <CommunityMenu />}
        </div>

        <Link href={'/dashboard'} className="hover:text-slate-400 py-4">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Menu;
