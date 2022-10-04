import React from 'react';
import styles from './Header.module.css';
import { useAppContext } from 'context';

export const Header = ({ posts }) => {
    const { activeTab } = useAppContext();
    return (
        <div className={styles.header}>
            <span className={styles.title}>{activeTab}</span>
            <div className={styles.connectWalletWrapper}>
                <h3 className={styles.connectWallet}>CONNECT WALLET</h3>
            </div>
        </div>
    )
}

// jXvdFjkWAMuqHxcAgMoVm7-THRhSpdIqt9HcPcANcdI - Use this access token to consume published content (i.e. content in “Published” status)
// 5nY8XKfqd_zU7gMQEWyOK51gZs8rhPBCUiYbTFSYteI - Use this access token to preview and consume unpublished content 
// 3y9eyn91ulcz - space ID