import React, { useState } from 'react'
import Image from 'next/image'
import xw from 'xwind'
import { logo } from '../../assets'
import { menus } from './config.js'

const styles = {
  nav: xw`flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`,
  navLink: xw`flex items-center gap-3 px-4 py-2 mt-2 text-sm font-semibold text-black bg-white rounded-lg hover:bg-blue-100 focus:bg-blue-500 focus:text-white`,
  logoContainer: xw`flex-shrink-0 px-8 py-4 flex flex-row items-center justify-center`,
  logoLink: xw`text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-none`,
  sidebarWrapper: xw`flex flex-col gap-20 w-full md:w-80 border-black text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0`,
  logoButton: xw`rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-none`,
}

export const SideBar = ({}) => {
  const [sidebarOpen, setSideBarOpen] = useState(true)
  return (
    <div css={styles.sidebarWrapper}>
      <div css={styles.logoContainer}>
        <Image src={logo} alt={'Logo icon'} width={180} height={133} />
        {/* onClickEvent */}
        <button
          css={styles.logoButton}
          onClick={() => setSideBarOpen(!sidebarOpen)}
        >
          <svg fill="currentColor" viewBox="0 0 20 20" css={xw`w-6 h-6`}>
            {sidebarOpen ? (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button>
      </div>
      <nav css={styles.nav}>
        {menus.map((menu) => (
          <a css={styles.navLink} href="#">
            <Image src={menu.icon} alt={'Menu icon'} width={32} height={32} />
            {menu.name}
          </a>
        ))}
      </nav>
    </div>
  )
}
