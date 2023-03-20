import React from 'react';

import { Layout } from 'antd';
const { Header, Content } = Layout;

import RichText from './components/RichText';

export default function Editor() {
  return (
    <Layout className="h-full w-full">
      <Header className="!bg-white" style={{ borderBottom: '1px solid hsla(0, 0%, 0%, 0.04)' }}>
        <h1>无标题文档</h1>
      </Header>
      <Content className="bg-white">
        <RichText />
      </Content>
    </Layout>
  );
}
