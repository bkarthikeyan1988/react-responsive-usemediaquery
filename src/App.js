import './App.css';

import { useMediaQuery } from 'react-responsive';
import MediaQuery from  'react-responsive';

import { Desktop } from "./components/desktop/desktop";
import { Laptop } from "./components/laptop/laptop";
import { BigScreen } from "../src/components/big-screen/big-screen";
import { Mobile } from "../src/components/mobile/mobile";
import { TabletMobile } from "../src/components/tablet-mobile/tablet-mobile";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <div className="App">
      <h1>React Responsive - a guide</h1>      
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <TabletMobile />}
      {isDesktop && <Desktop />}
      {isLaptop && <Laptop />}
      {isBigScreen && <BigScreen />}
      
      <MediaQuery minDeviceWidth={1200}>
        <p>Manipulate me with the powers of React Responsive</p>
      </MediaQuery>
      <MediaQuery minWidth={1224}>
        <p>You are a desktop or laptop</p>
        <MediaQuery minWidth={1824}>
          <p>You also have a huge screen</p>
        </MediaQuery>
      </MediaQuery>
    </div>
  );
}

export default App;
