import ClientPage from "../components/client-page";
import IframePre from "../components/iframe-pre";

export default function Page({ params: { code } }) {
  return (
    <main className="flex flex-row items-end min-h-screen ">
      <ClientPage code={code}/>
      <IframePre />
    </main>
  );
}
