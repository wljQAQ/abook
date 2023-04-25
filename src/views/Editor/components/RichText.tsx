/*
 * @Author: wulongjiang
 * @Date: 2023-03-16 20:55:24
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-04-25 22:36:57
 * @Description:
 */
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import '@/assets/style/editor.less'; //引入重置样式

import React, { memo, useState, useEffect, ChangeEventHandler, KeyboardEventHandler } from 'react';

import { Input } from 'antd';

import markdownModule from '@wangeditor/plugin-md';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig, Boot } from '@wangeditor/editor';

import { throttle } from 'lodash-es';

const { TextArea } = Input;

Boot.registerModule(markdownModule);

interface Props {
  title: string;
  body: string;
  onBodyChange: (body: string) => void;
  onTitleChange: (newTitle: string) => void;
}

const RichText = memo(({ onTitleChange, title, body, onBodyChange }: Props) => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);

  // 编辑器内容

  const handleTitleChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    const title = event.target.value;
    if (title === '') {
      onTitleChange('无标题文档');
      return;
    }
    onTitleChange(title);
  };

  const handleTitlePressEnter: KeyboardEventHandler<HTMLTextAreaElement> = event => {
    editor?.focus();
    event.preventDefault();
  };

  // 模拟 ajax 请求，异步设置 html
  // useEffect(() => {
  // }, []);

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
  };

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: ['fullScreen', 'group-image', 'group-video'],
  };
  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      console.log(toolbarConfig);
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
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

        <div className="flex-1  w-3/4  max-w-4xl m-auto py-6">
          <TextArea
            value={title}
            className="w-full font-bold text-4xl"
            bordered={false}
            autoSize={{ minRows: 1, maxRows: 3 }}
            onChange={handleTitleChange}
            onPressEnter={handleTitlePressEnter}
            placeholder="请输入标题"
          />
          <Editor
            defaultConfig={editorConfig}
            value={body}
            onCreated={setEditor}
            onChange={throttle(editor => onBodyChange(editor.getHtml()), 500)}
            mode="default"
          />
        </div>
      </div>
    </>
  );
});

RichText.displayName = 'RichText';

export default RichText;
