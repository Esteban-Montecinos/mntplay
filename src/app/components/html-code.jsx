"use client";

import Editor from '@monaco-editor/react';
import { usePlayStore } from "../store/play-store";

export default function HtmlCode() {
  const inputHtml = usePlayStore(state => state.inputHtml);
  const setInputHtml = usePlayStore(state => state.setInputHtml);

  function handleEditorChange(valorInput) {
    setInputHtml(valorInput);
  }

  return (
    <Editor theme="vs-dark" className="flex-1" height="95vh" width="50vw" defaultLanguage="html" defaultValue={inputHtml} onChange={handleEditorChange}/>
  );
}
