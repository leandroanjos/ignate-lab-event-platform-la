import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useParams } from "react-router-dom";

export function Evento() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
