/*
 * @Author: wulongjiang
 * @Date: 2022-11-04 20:42:04
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-18 14:35:21
 * @Description:新建一个知识库页面
 * @FilePath: \abook\src\views\BookSpace\index.tsx
 */
import BookContent from './components/BookContent';
import BookDetail from './components/BookDetail';

import { Layout, Space, Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const BookSpace = () => {
  return (
    <Layout className="w-full h-full">
      <Sider theme="light" className="h-full p-4 w-60 shadow">
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
        <Content className="bg-white">Content</Content>
      </Layout>
    </Layout>
  );
};

BookSpace.displayName = 'BookSpace';

export default BookSpace;
