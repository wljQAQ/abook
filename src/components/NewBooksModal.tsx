/*
 * @Author: wlj
 * @Date: 2022-11-02 17:29:38
 * @LastEditors: wulongjiang
 * @LastEditTime: 2022-11-04 21:33:11
 * @Description: 新建知识库弹窗
 */
import { memo, useCallback, useEffect, useState } from 'react';
import { Modal, Input } from 'antd';
import { BookTwoTone } from '@ant-design/icons';
import { useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
interface Properties {
  show: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

const NewBooksModal = memo(({ show, onOk, onCancel }: Properties) => {
  const [isModalOpen, setIsModalOpen] = useState(show);
  const [booksDetail, setBooksDetail] = useImmer({
    name: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleOk = useCallback(() => {
    if (onOk) {
      onOk();
      navigate('/bookSpack');
    }
  }, [onOk]);

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    }
  }, [onCancel]);

  useEffect(() => {
    setIsModalOpen(show);
  }, [show]);

  return (
    <Modal
      title="新建知识库"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width="400px"
      cancelText="取消"
      okText="新建"
      okButtonProps={{
        disabled: booksDetail.name === '' ? true : false
      }}
    >
      <p>基本信息</p>
      <div className="flex items-center mb-2">
        <div className="flex-center border-solid border h-8 rounded-md mr-2 px-1 border-purple-400">
          <BookTwoTone twoToneColor="#7e5bef" className=" text-xl" />
        </div>
        <Input
          placeholder="知识库名称"
          value={booksDetail.name}
          onChange={e =>
            setBooksDetail(draft => {
              draft.name = e.target.value;
            })
          }
        />
      </div>

      <Input.TextArea placeholder="知识库介绍（选填）" autoSize={{ minRows: 3, maxRows: 5 }} />
    </Modal>
  );
});

NewBooksModal.displayName = 'NewBooksModal';

export default NewBooksModal;
