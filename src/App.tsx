import { ChartSection } from "./components/ChartSection";
import { Investment } from "./components/Investment";
import { ShowCase } from "./components/Showcase";
import { FeaturesSection } from "./components/FeaturesSection";
import { ContactSection } from "./components/ContactSection";
import { DownloadSection } from "./components/DownloadSection";
import { Faqs } from "./components/Faqs";
import { BottomSection } from "./components/BottomSection";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <ShowCase />
      <ChartSection />
      <Investment />
      <FeaturesSection />
      <ContactSection />
      <DownloadSection />
      <Faqs />
      <BottomSection />
    </div>
  );
}

export default App;
