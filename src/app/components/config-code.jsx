'use client'

import Editor from '@monaco-editor/react';
import { usePlayStore } from '../store/play-store';

export default function ConfigCode() {
    const inputConfig = usePlayStore(state => state.inputConfig);
    const setInputConfig = usePlayStore(state => state.setInputConfig);

  function handleEditorChange(valorInput) {
    setInputConfig(valorInput);
  }
  return (
    <Editor theme="vs-dark" className="flex-1" height="95vh" width="50vw" defaultLanguage="javascript" defaultValue={inputConfig} onChange={handleEditorChange}/>
  )
}
