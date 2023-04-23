/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-23 22:00:21
 * @Description:新建一个知识库页面
 */
import BookContent from './components/BookContent';
import BookDetail from './components/BookDetail';

import { Layout, Space, Button } from 'antd';

import { useParams } from 'react-router-dom';

import { getArticlesHomePage, getArticlesList } from '@/http/api/bookSpace';
import { useEffect, useState } from 'react';

import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import '@/assets/style/editor.less'; //引入重置样式

import { Editor } from '@wangeditor/editor-for-react';

const { Header, Sider, Content } = Layout;

const BookSpace = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<string>('');

  async function fetchArticlesHomePage() {
    if (id === undefined) return;
    const { code, msg, data } = await getArticlesHomePage(id);
    console.log(data);
    setArticle(data.body);
  }

  useEffect(() => {
    fetchArticlesHomePage();
  }, []);

  return (
    <Layout className="w-full h-full">
      <Sider theme="light" className="h-full pt-4 px-2 w-60 shadow">
        <BookDetail></BookDetail>
      </Sider>
      <Layout>
        {/* <BookContent></BookContent> */}
        <Header
          className="!px-5 flex justify-between"
          style={{ backgroundColor: '#fff', borderBottom: '1px solid#f5f5f5' }}
        >
          <div className=" text-gray-400">title</div>
          <Space>
            <Button type="primary">编辑</Button>
          </Space>
        </Header>
        <Content className="bg-white">
          <div id="article-content" dangerouslySetInnerHTML={{ __html: article }}></div>
        </Content>
      </Layout>
    </Layout>
  );
};

BookSpace.displayName = 'BookSpace';

export default BookSpace;
