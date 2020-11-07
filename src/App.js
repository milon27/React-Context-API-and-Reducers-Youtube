import Demo from "./components/layouts/Demo";
import MainContext from "./utils/context/MainContext";

function App() {
  return (
    <MainContext>
      <Demo />
    </MainContext>
  );
}

export default App;
