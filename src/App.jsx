import { BrowserRouter } from 'react-router-dom';
import {
  WhoWeAre,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  RoboCup,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>

        <div className="bg-about bg-cover bg-center bg-no-repeat">
          <WhoWeAre />
        </div>
         <div className="bg-tech bg-cover bg-center bg-no-repeat">
          <RoboCup />
        </div> 
       
        {/* <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div> */}
        <Projects />
        
        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
