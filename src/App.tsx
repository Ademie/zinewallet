import { ChartSection } from "./components/ChartSection";
import { Investment } from "./components/Investment";
import { ShowCase } from "./components/Showcase";
import { FeaturesSection } from "./components/FeaturesSection";
import { ContactSection } from "./components/ContactSection";
import { DownloadSection } from "./components/DownloadSection";

function App() {
  return (
    <div>
      <ShowCase />
      <ChartSection/>
      <Investment/>
      <FeaturesSection/>
      <ContactSection/>
      <DownloadSection/>
    </div>
  );
}

export default App;
