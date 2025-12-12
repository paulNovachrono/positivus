import Service from "./components/AllServices/Service";
import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";

const App = () => {
  return (
    <div className="h-screen w-full bg-white">
      <Hero />
      <Partners />
      <Service />
    </div>
  );
};

export default App;
