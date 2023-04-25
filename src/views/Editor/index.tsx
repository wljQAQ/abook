/*
 * @Author: wlj
 * @Date: 2023-03-17 16:55:52
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-25 22:33:36
 * @Description:
 */
import React, { useEffect, useState } from 'react';

import { Layout, Button } from 'antd';
const { Header, Content } = Layout;

import { getArticlesDetail } from '@/http/api/bookSpace';
import { Article } from '@/http/api/bookSpace/type';

import { useParams } from 'react-router-dom';

import RichText from './components/RichText';

export default function Editor() {
  const [richTextBody, setRichTextBody] = useState<string>('');
  const { id } = useParams();
  //获取文章对线
  const [articleObj, setArticleObj] = useState<Article | null>(null);

  async function fetchArticlesDetail() {
    if (id === undefined) return;
    const { code, msg, data } = await getArticlesDetail(id);
    setArticleObj(data);
  }

  useEffect(() => {
    fetchArticlesDetail();
  }, []);

  const handleTitleChange = (newTitle: string) => {
    // setTitle(newTitle);/
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
        <h1>{articleObj?.title}</h1>
        <Button>更新</Button>
      </Header>
      <Content className="bg-white">
        <RichText
          onTitleChange={handleTitleChange}
          title={articleObj?.title || ''}
          body={articleObj?.body || ''}
          onBodyChange={handleRichTextBodyChange}
        />
      </Content>
    </Layout>
  );
}
