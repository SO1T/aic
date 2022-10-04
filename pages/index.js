import React, { useState } from 'react';
import { Layout, Header, Main } from '@components/index.js';
import { useAppContext } from 'context';
import axios from 'axios';

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS
})

const Index = ({ data }) => {
  console.log(33, data);
  return (
        <Layout>
          <Header />
          <Main data={data.items} />
        </Layout>
  )
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'card'
  })
  return {
    props: {
      data: data
    },
    revalidate: 1
  }
}

export default Index
