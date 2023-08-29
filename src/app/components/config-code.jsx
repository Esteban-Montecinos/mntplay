'use client'

import Editor from '@monaco-editor/react';
import { usePlayStore } from '../store/play-store';

export default function ConfigCode() {
    const {inputHtml, inputConfig} = usePlayStore();
    const setInputConfig = usePlayStore(state => state.setInputConfig);

  function handleEditorChange(valorInput) {
    setInputConfig(valorInput);
    setUrl(encodeURI(`${inputHtml}+${valorInput}`))
  }
  return (
    <Editor theme="vs-dark" className="flex-1" height="calc(100vh - 40px)" width="50vw"  defaultLanguage="javascript" defaultValue={inputConfig} onChange={handleEditorChange}/>
  )
}
