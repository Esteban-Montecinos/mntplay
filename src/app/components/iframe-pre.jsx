'use client'

import { usePlayStore } from "../store/play-store";

export default function IframePre() {
    const inputHtml = usePlayStore(state => state.inputHtml);
    const inputConfig = usePlayStore(state => state.inputConfig);
  return (
    <iframe className="flex-1 h-screen bg-white" srcdoc={`
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
`} frameborder="0"></iframe>
  )
}
