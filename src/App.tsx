import { ChartSection } from "./components/ChartSection";
import { Investment } from "./components/Investment";
import { ShowCase } from "./components/Showcase";
import { FeaturesSection } from "./components/FeaturesSection";

function App() {
  return (
    <div>
      <ShowCase />
      <ChartSection/>
      <Investment/>
      <FeaturesSection/>
    </div>
  );
}

export default App;
