"use client";

import { Tab, Tabs } from "@nextui-org/react";
import HtmlCode from "./html-code";
import ConfigCode from "./config-code";
import { usePlayStore } from "../store/play-store";
import { decode } from 'js-base64';

export default function ClientPage({code}) {
  const setInputHtml = usePlayStore(state => state.setInputHtml);
  const setInputConfig = usePlayStore(state => state.setInputConfig);
 if (code) {
  const response = decode(code)
  const [htmlDecode, configDecode] = response.split("+")
  setInputHtml(htmlDecode);
  setInputConfig(configDecode);
 }
  return (
    <aside className="flex flex-col justify-end">

    <Tabs fullWidth aria-label="Opciones" radius="lg" size="sm" color="default">
      <Tab key="HTML" title="HTML" className="p-0">
        <HtmlCode />
      </Tab>
      <Tab key="Config" title="Config" className="p-0">
        <ConfigCode />
      </Tab>
    </Tabs>
    </aside>
  );
}