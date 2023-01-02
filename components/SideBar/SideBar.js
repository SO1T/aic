import React, { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { logo } from '../../assets';
import { menus } from './config.js';
import { useAppContext } from 'context';

import styles from './SideBar.module.css'

export const SideBar = ({}) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const { activeTab, setActiveTab } = useAppContext();
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
        <Image src={logo} alt={'Logo icon'} width={180} height={133} />
        </div>
        <h2 className={styles.logoText}>H2C</h2>
        {/* onClickEvent */}
        <button
          className={styles.logoButton}
          onClick={() => setSideBarOpen(!sidebarOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className={'w-6 h-6'}>
            {sidebarOpen ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ): (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button> 
      </div>
      <nav className={cn(styles.nav, {[styles.activeMenu]: sidebarOpen})}>
        {menus.map((menu, i) => (
          <a className={cn(styles.navLink, {[styles.navLinkActive]: activeTab === menu.name })} key={i} href="#" onClick={() => setActiveTab(menu.name)}>
            <Image src={menu.icon} alt={'Menu icon'} width={32} height={32} />
            {menu.name}
          </a>
        ))}
      </nav>
    </div>
  )
}