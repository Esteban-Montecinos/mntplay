"use client";

import Editor from '@monaco-editor/react';
import { usePlayStore } from "../store/play-store";

export default function HtmlCode() {
  const {inputHtml, inputConfig} = usePlayStore();
  const setInputHtml = usePlayStore(state => state.setInputHtml);

  function handleEditorChange(valorInput) {
    setInputHtml(valorInput);
    setUrl(encodeURI(`${valorInput}+${inputConfig}`))
  }

  return (
    <Editor theme="vs-dark" className="flex-1" height="calc(100vh - 40px)" width="50vw" defaultLanguage="html" defaultValue={inputHtml} onChange={handleEditorChange}/>
  );
}
