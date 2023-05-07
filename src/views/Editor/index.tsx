/*
 * @Author: wlj
 * @Date: 2023-03-17 16:55:52
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-05-06 10:23:00
 * @Description:
 */
import { useEffect } from 'react';

import { Layout, Button, message } from 'antd';
const { Header, Content } = Layout;

import { getArticlesDetail, updateArticleDetail } from '@/http/api/bookSpace';
import { Article } from '@/http/api/bookSpace/type';

import { useParams } from 'react-router-dom';

import RichText from './components/RichText';

import { useNavigate } from 'react-router-dom';

import { useImmer } from 'use-immer';

export default function Editor() {
  const { id } = useParams();
  const navigate = useNavigate();
  //获取文章对线
  const [articleObj, setArticleObj] = useImmer<Article | null>(null);

  async function fetchArticlesDetail() {
    if (id === undefined) return;
    const { data } = await getArticlesDetail(id);
    setArticleObj(data);
  }

  useEffect(() => {
    fetchArticlesDetail();
  }, []);

  const handleTitleChange = (newTitle: string) => {
    // setTitle(newTitle);/
    setArticleObj(draft => {
      if (draft?.title === undefined) return;
      draft.title = newTitle;
    });
  };

  const handleRichTextBodyChange = (body: string) => {
    setArticleObj(draft => {
      if (draft?.body === undefined) return;
      draft.body = body;
    });
  };

  const onSave = async function () {
    if (!articleObj) return;
    const { code, msg, data } = await updateArticleDetail(articleObj);
    if (code === 0) {
      message.success('保存成功');
      setTimeout(() => {
        navigate(`/bookSpace/${data.bookId}/${data.id}`);
      }, 500);
    } else {
      message.error(msg);
    }
  };

  return (
    <Layout className="h-full w-full overflow-y-auto bg-white">
      <Header
        className="!bg-white flex justify-between items-center"
        style={{ borderBottom: '1px solid hsla(0, 0%, 0%, 0.04)' }}
      >
        <h1>{articleObj?.title || '暂无标题'}</h1>
        <Button onClick={onSave}>更新</Button>
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
