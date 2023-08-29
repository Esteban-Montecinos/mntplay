import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlayStore = create(persist((set) => ({
  inputHtml: `<section class="flex flex-col items-center justify-center w-full h-screen px-2 mx-auto bg-neutral-950">
      <div class="flex flex-col w-full max-w-lg p-4 text-center text-white rounded-lg gap-y-10 bg-neutral-900">
        <h2 class="mb-4 text-4xl font-semibold tracking-tight">
          Bienvenido a *MNTplay
        </h2>
        <p class="text-sm text-muted-foreground">
          creado por <a class="underline" href="https://github.com/Esteban-Montecinos" target="_blank">Esteban Montecinos</a>
        </p>
      </div>
    </section>`,
  inputConfig: `tailwind.config = {
        theme: {
          extend: {
            // ...
          }
        }
      }`,
  setInputHtml: (inputHtml) => set({ inputHtml }),
  setInputConfig: (inputConfig) => set({ inputConfig }),
}),{name: "play-store"}));
