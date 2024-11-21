import InfoBoxes from "./components/InfoBoxes";
import Navbar from "./components/Navbar";
import { ReferencesSheet } from "./components/SideSheet";



function App() {


  return (
    <div className="bg-white text-white h-screen">
      <Navbar />
      <main>
        <InfoBoxes />
        
      </main>
    </div>
  )
}

export default App
