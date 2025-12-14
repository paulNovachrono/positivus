import Service from "./components/AllServices/Service";
import Cta1 from "./components/cta1/Cta1";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";

const App = () => {
  return (
    <div className="h-screen w-full bg-white">
      <Hero />
      <Partners />
      <Service />
      <Cta1/>
    </div>
  );
};

export default App;
