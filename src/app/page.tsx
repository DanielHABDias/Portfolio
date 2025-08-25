import * as Client from "@/components/Client";
import Banner from "@/components/Banner";

export default function Home() {
  
  return (
    <div>
      <Client.Header name={'Daniel'}/>
      <Banner name={'Daniel Dias'}/>
      <Client.About/>
    </div>
  );
}
