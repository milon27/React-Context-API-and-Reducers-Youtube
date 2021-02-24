import Router from "./components/routers/Router";
import MainContext from "./utils/context/MainContext";

function App() {
  return (
    <MainContext>
      <Router />
    </MainContext>
  );
}

export default App;
