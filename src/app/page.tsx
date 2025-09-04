import * as Client from "@/components/Client";
import { UserProvider } from "@/contexts/UserContext";

export default function Home() {
  return (
    <div>
      <video loop muted className="background-video" autoPlay playsInline={false} controls={false} disablePictureInPicture>
        <source src="/background_1.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
      <UserProvider>
        <Client.Body />
      </UserProvider>
    </div>
  );
}
