/*
 * @Author: wlj
 * @Date: 2022-11-02 17:29:38
 * @LastEditors: wlj
 * @LastEditTime: 2022-11-03 16:14:38
 * @Description: 新建知识库弹窗
 */
import { memo, useCallback, useEffect, useState } from 'react';
import { Modal, Input } from 'antd';
import { BookTwoTone } from '@ant-design/icons';
import { useImmer } from 'use-immer';
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

  const handleOk = useCallback(() => {
    if (onOk) {
      onOk();
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
  console.log(
    window.DeviceOrientationEvent,
    window.DeviceMotionEvent,
    window.navigator.userAgent
  );
  
  window.addEventListener("devicemotion", (e) => {
    console.log(e);
    //  if(this.devicemotionReturn) return ;
    //  this.historyDevicemotion = JSON.parse(JSON.stringify(this.devicemotion))
    //  this.devicemotion.accelerationIncludingGravity.x = e.accelerationIncludingGravity.x
    //  this.devicemotion.accelerationIncludingGravity.y = e.accelerationIncludingGravity.y
    //  this.devicemotion.accelerationIncludingGravity.z = e.accelerationIncludingGravity.z
    //  if(this.historyDevicemotion.accelerationIncludingGravity.x ||
    //      this.historyDevicemotion.accelerationIncludingGravity.y ||
    //      this.historyDevicemotion.accelerationIncludingGravity.z){
    //      // 计算单一方向加速度的差值
    //      var thresholdCount = Math.max(
    //          Math.abs(this.historyDevicemotion.accelerationIncludingGravity.x - e.accelerationIncludingGravity.x),
    //          Math.abs(this.historyDevicemotion.accelerationIncludingGravity.y - e.accelerationIncludingGravity.y),
    //          Math.abs(this.historyDevicemotion.accelerationIncludingGravity.z - e.accelerationIncludingGravity.z)
    //      )
    //      // 阈值判断
    //      if(thresholdCount > 1) this.devicemotion.thresholdCount_1++;
    //      if(thresholdCount > 5) this.devicemotion.thresholdCount_5++;
    //      if(thresholdCount > 10) this.devicemotion.thresholdCount_10++;
    //      if(thresholdCount > 15) this.devicemotion.thresholdCount_15++;
    //      if(thresholdCount > 20) this.devicemotion.thresholdCount_20++;
    //      if(thresholdCount > 25) this.devicemotion.thresholdCount_25++;
    //      if(thresholdCount > 50) this.devicemotion.thresholdCount_50++;
    //      if(thresholdCount > 100) this.devicemotion.thresholdCount_100++;
    //      // 颜色变化逻辑
    //      if(thresholdCount > 20) this.devicemotion.shakeValue = Math.min(255, this.devicemotion.shakeValue + 10)
    //  }
  });

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
