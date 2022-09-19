import Head from "next/head";
import Background from "../components/Background";
import { TiWeatherSnow } from "react-icons/ti";

const Home = () => {
  return (
    <Background>
      <Head>
        <title>Portfólio - Adam Neves</title>
        <meta name="description" content="Um portfólio poderoso!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-white flex justify-center items-center flex-col">
        <TiWeatherSnow />
        <p className="m-2">Adam Neves - Portfólio</p>
        <hr className="w-full m-2" />
        <p className="m-2">Something very powerful is coming!</p>
      </div>
    </Background>
  );
};
export default Home;
