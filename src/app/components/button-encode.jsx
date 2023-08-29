"use client";
import { Link, Snippet } from "@nextui-org/react";
import { usePlayStore } from "../store/play-store";

export default function ButtonEncode() {
  const url = usePlayStore((state) => state.url);

  return (
    <header className="flex flex-row justify-between">
      <Snippet
        symbol="*"
        radius="lg"
        size="sm"
        className="flex-1 h-10"
        codeString={`https://mntplay.vercel.app/${url}`}
        tooltipProps={{
          color: "foreground",
          content: "Copiar al portapapeles",
        }}
      >
        https://mntplay.vercel.app/...
      </Snippet>
      <div className="flex flex-row items-center justify-center flex-1">
        <Link
          className=""
          href="https://github.com/Esteban-Montecinos"
          color="foreground"
        >
          *MNTplay
        </Link>
      </div>
    </header>
  );
}
