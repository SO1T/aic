import React from 'react'
import { SideBar } from '@components/SideBar';
import styles from './Layout.module.css'

export const Layout = ({children}) => {
  return (
    <div className={styles.root}>
        <SideBar />
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
