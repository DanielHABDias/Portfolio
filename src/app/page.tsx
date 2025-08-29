import * as Client from "@/components/Client";
import { UserProvider } from "@/contexts/UserContext";

export default function Home() {
  return (
    <div>
      <video autoPlay loop muted className="background-video">
        <source src="/background_1.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <UserProvider className="content">
        <Client.Body />
      </UserProvider>
    </div>
  );
}
