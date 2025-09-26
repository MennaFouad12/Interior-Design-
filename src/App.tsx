
import {
  Header,
  Hero,
  OurServices,
  DesigningYourDream,
  ThreeSimpleSteps,
  CustomersFeedbacks,
  Newsletter,
  Footer,
} from "./components";

const App = () => {
  return (
    <div>
    <div className="max-w-[1400px] mx-auto px-5" >
      <Header />
      <Hero />
      <OurServices />
      <DesigningYourDream />
      <ThreeSimpleSteps />
      <CustomersFeedbacks />
      <Newsletter />
      </div>
      <Footer />
    
    </div>
  );
};

export default App;
