import React from 'react';

import { Layout } from 'antd';
const { Header, Content } = Layout;

import RichText from './components/RichText';

export default function Editor() {
  return (
    <Layout className="h-full w-full">
      <Header className="!bg-white" style={{ borderBottom: '1px solid hsla(0, 0%, 0%, 0.04)' }}>
        <div>hello</div>
      </Header>
      <Content className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RichText />
        </div>
      </Content>
    </Layout>
  );
}
