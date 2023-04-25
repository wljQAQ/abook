/*
 * @Author: wlj
 * @Date: 2022-11-02 17:29:38
 * @LastEditors: wlj
 * @LastEditTime: 2023-04-25 08:38:40
 * @Description: 新建知识库弹窗
 */
import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Modal, Input } from 'antd';

import { useImmer } from 'use-immer';

import { createBook } from '@/http/api/home/home';

import { useAppSelector } from '@/store/hooks';

import IconFont from '@/components/IconFont';

interface Properties {
  show: boolean;
  onOk?: () => void;
  onCancel?: () => void;
}

const NewBooksModal = memo(({ show, onOk, onCancel }: Properties) => {
  const userInfo = useAppSelector(state => state.user.userInfo);
  const [isModalOpen, setIsModalOpen] = useState(show);
  const [booksDetail, setBooksDetail] = useImmer({
    title: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleOk = useCallback(async () => {
    const { data } = await createBook({ ...booksDetail, userId: userInfo.id });
    if (onOk) {
      onOk();
      navigate(`/bookSpace/${data.id}`);
    }
  }, [booksDetail]);

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
      width="424px"
      cancelText="取消"
      okText="新建"
      okButtonProps={{
        disabled: booksDetail.title === '' ? true : false,
      }}
    >
      <p className="mt-5 mb-3">基本信息</p>
      <div className="flex items-center mb-3">
        <div className="flex-center border-solid border h-10 rounded-md mr-2 px-1 border-gray-300">
          <IconFont type="abook-book" size={30} />
        </div>
        <Input
          className="h-10"
          placeholder="知识库名称"
          value={booksDetail.title}
          onChange={e =>
            setBooksDetail(draft => {
              draft.title = e.target.value;
            })
          }
        />
      </div>

      <Input.TextArea
        placeholder="知识库介绍（选填）"
        autoSize={{ minRows: 4, maxRows: 6 }}
        onChange={e =>
          setBooksDetail(draft => {
            draft.description = e.target.value;
          })
        }
      />
    </Modal>
  );
});

NewBooksModal.displayName = 'NewBooksModal';

export default NewBooksModal;
