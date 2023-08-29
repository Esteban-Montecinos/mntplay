import ClientPage from "./components/client-page";
import IframePre from "./components/iframe-pre";

export default function Home() {
  return (
    <main className="flex flex-row items-end min-h-screen ">
      <ClientPage />
      <IframePre />
    </main>
  );
}
