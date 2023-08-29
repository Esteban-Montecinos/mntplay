'use client'

import { useEffect, useState } from "react";
import { usePlayStore } from "../store/play-store";
import ButtonEncode from "./button-encode";
import { encodeURI } from "js-base64";

export default function IframePre() {
    const [htmlTemplate, setHtmlTemplate] = useState("")
    const {inputHtml, inputConfig} = usePlayStore()
    const setUrl = usePlayStore(state => state.setUrl) 
    
    useEffect(() => {
        setHtmlTemplate(`
        <!doctype html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <script src="https://cdn.tailwindcss.com"></script>
                <script>
                    ${inputConfig}
                </script>
            </head>
            <body>
                ${inputHtml}
            </body>
        </html>
        `)
        setUrl(encodeURI(`${inputHtml}+${inputConfig}`))
    },[inputHtml, inputConfig,setUrl])
    
  return (
    <aside className="flex flex-col h-screen w-[50vw]">
        <ButtonEncode/>
        <iframe className="flex-1 h-[calc(100vh - 40px)] bg-white" srcDoc={htmlTemplate}></iframe>
    </aside>
  )
}
