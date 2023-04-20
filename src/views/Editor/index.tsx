/*
 * @Author: wlj
 * @Date: 2023-03-17 16:55:52
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-20 09:06:34
 * @Description:
 */
import React, { useEffect, useState } from 'react';

import { Layout, Button } from 'antd';
const { Header, Content } = Layout;

import RichText from './components/RichText';

export default function Editor() {
  const [title, setTitle] = useState<string>('无标题文档');
  const [richTextBody, setRichTextBody] = useState<string>('');

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  const handleRichTextBodyChange = (body: string) => {
    console.log(body);
    setRichTextBody(body);
  };

  return (
    <Layout className="h-full w-full overflow-y-auto bg-white">
      <Header
        className="!bg-white flex justify-between items-center"
        style={{ borderBottom: '1px solid hsla(0, 0%, 0%, 0.04)' }}
      >
        <h1>{title}</h1>
        <Button>更新</Button>
      </Header>
      <Content className="bg-white">
        <RichText
          onTitleChange={handleTitleChange}
          title={title}
          body={richTextBody}
          onBodyChange={handleRichTextBodyChange}
        />
      </Content>
    </Layout>
  );
}
