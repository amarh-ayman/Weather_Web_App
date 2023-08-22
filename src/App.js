import { WeatherProvider } from "./components/WeatherContext";
import Main from "./components/main";

function App() {
  return (
    <div className="app">
      <WeatherProvider>
        <Main />
      </WeatherProvider>
    </div>
  );
}

export default App;
