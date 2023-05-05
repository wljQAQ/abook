/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wlj
 * @LastEditTime: 2023-05-05 09:20:16
 * @Description:新建一个知识库页面
 */
import BookContent from './components/BookContent';
import BookDetail from './components/BookDetail';

import { Layout, Space, Button } from 'antd';

import { useParams } from 'react-router-dom';

import { getArticlesDetail } from '@/http/api/bookSpace';
import { Article } from '@/http/api/bookSpace/type';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import '@/assets/style/editor.less'; //引入重置样式

import { IDomEditor } from '@wangeditor/editor';
import { Editor } from '@wangeditor/editor-for-react';

const { Header, Sider, Content } = Layout;

const BookSpace = () => {
  const { bookId, ArticleId } = useParams();
  const navigate = useNavigate();
  //获取文章对线
  const [articleObj, setArticleObj] = useState<Article | null>(null);
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  async function fetchArticlesHomePage() {
    if (ArticleId === undefined) return;
    const { code, msg, data } = await getArticlesDetail(Number(ArticleId));
    setArticleObj(data);
    // getArticlesList(Number(id));
  }

  useEffect(() => {
    fetchArticlesHomePage();
  }, [ArticleId]);

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <Layout className="w-full h-full">
      <Sider theme="light" width={250} className="h-full pt-4 px-2 shadow">
        <BookDetail></BookDetail>
      </Sider>
      <Layout className=" overflow-y-auto">
        {/* <BookContent></BookContent> */}
        <Header
          className="!px-5 flex justify-between"
          style={{ backgroundColor: '#fff', borderBottom: '1px solid#f5f5f5' }}
        >
          <div className=" text-gray-400">{articleObj?.title || '暂未设置首页'}</div>
          <Space>
            <Button type="primary" onClick={() => navigate(`/editor/${articleObj?.id}`)}>
              编辑
            </Button>
          </Space>
        </Header>
        <Content className="bg-white pt-5 pl-5">
          <h1>{articleObj?.title || '暂未设置首页'}</h1>
          <Editor
            defaultConfig={{
              readOnly: true,
            }}
            value={articleObj?.body || ''}
            onCreated={setEditor}
            mode="default"
          />
        </Content>
      </Layout>
    </Layout>
  );
};

BookSpace.displayName = 'BookSpace';

export default BookSpace;
