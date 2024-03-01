import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './DraftJsTextEditor.css';

export const DraftJsTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleEditorChange = (e: any) => {
    setEditorState(e);
    console.log(e);
  };
  return (
    <>
      <h1>Editor</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        placeholder="Enter some text..."
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
    </>
  );
};
