import { GlobalContext } from "./components/Context"
import Filters from "./components/Filters"
import ImageLoader from "./components/ImageLoader"


function App() {
  return (
    <div className="App">
      <GlobalContext>
        <ImageLoader />
        <Filters />
      </GlobalContext>
    </div>
  );
}

export default App;
