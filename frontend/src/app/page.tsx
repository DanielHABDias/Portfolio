import * as Client from "@/components/Client";
import { UserProvider } from "@/contexts/UserContext";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Client.StarBackground />

      <UserProvider>
        <Client.Body />
      </UserProvider>
    </div>
  );
}
