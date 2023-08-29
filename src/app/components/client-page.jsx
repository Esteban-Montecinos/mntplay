"use client";

import { Tab, Tabs } from "@nextui-org/react";
import HtmlCode from "./html-code";
import ConfigCode from "./config-code";

export default function ClientPage() {
  return (
    <aside className="flex flex-col justify-end">

    <Tabs fullWidth aria-label="Opciones" radius="lg" size="sm" color="default" className="py-1">
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
