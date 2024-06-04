import { ChartSection } from "./components/ChartSection";
import { Investment } from "./components/Investment";
import { ShowCase } from "./components/Showcase";

function App() {
  return (
    <div>
      <ShowCase />
      <ChartSection/>
      <Investment/>
    </div>
  );
}

export default App;
