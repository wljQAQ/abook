/*
 * @Author: wlj
 * @Date: 2022-11-02 17:29:38
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-02 17:34:05
 * @Description: 新建知识库弹窗
 */
import { memo, useState } from 'react';
import { Modal } from 'antd';

interface Properties {
  show: boolean;
}

const NewBooksModal = memo(({ show }: Properties) => {
  const [isModalOpen, setIsModalOpen] = useState(show);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title="新建知识库" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
});

NewBooksModal.displayName = 'NewBooksModal';

export default NewBooksModal;
