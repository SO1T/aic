import xw, { cx } from 'xwind';
import React, { useState } from 'react';
import { SideBar } from '../components';

const styles = {
  container: xw`md:flex flex-col md:flex-row md:min-h-screen w-full`,
  contentWrapper: xw`flex flex-col w-full bg-black`
}

const Index = () => {
  
  return (
        <div css={styles.container}>
          <SideBar />
          
          <div css={styles.contentWrapper}>
                    <h1>Content wrapper</h1>
          </div>
        </div>
  )
}

export default Index
