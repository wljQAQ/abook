/*
 * @Author: wulongjiang
 * @Date: 2023-03-16 20:55:24
 * @LastEditors: wlj
 * @LastEditTime: 2023-03-22 14:38:08
 * @Description:
 * @FilePath: \abook\src\views\BookSpace\components\BookContent\components\RichText.tsx
 */
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import '@/assets/style/editor.less'; //引入重置样式

import React, { memo, useState, useEffect, ChangeEventHandler } from 'react';

import { Input } from 'antd';

import markdownModule from '@wangeditor/plugin-md';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig, Boot } from '@wangeditor/editor';

const { TextArea } = Input;

Boot.registerModule(markdownModule);

interface Props {
  onTitleChange: (newTitle: string) => void;
}

const RichText = memo(({ onTitleChange }: Props) => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // 编辑器内容
  const [html, setHtml] = useState('<p>hello</p>');

  const handleTitleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    onTitleChange(event.target.value);
  };

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>');
    }, 1500);
  }, []);

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...'
  };

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: ['fullScreen', 'group-image', 'group-video']
  };
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      console.log(toolbarConfig);
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
      console.log(111);
    };
  }, [editor]);

  return (
    <>
      <div className="h-full flex flex-col">
        <Toolbar
          className="w-11/12 m-auto flex items-center justify-center"
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
        />

        <div className="flex-1 overflow-y-hidden w-3/4  max-w-4xl m-auto py-6">
          <TextArea
            className="w-full font-bold text-4xl"
            bordered={false}
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={handleTitleChange}
            placeholder="请输入标题"
          />
          <Editor
            defaultConfig={editorConfig}
            value={html}
            onCreated={setEditor}
            onChange={editor => setHtml(editor.getHtml())}
            mode="default"
          />
        </div>
      </div>
      {/* <div style={{ marginTop: '15px' }}>{html}</div> */}
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
