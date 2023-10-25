import './App.css'
import Counter from "./components/Counter/Counter.tsx";
import Welcome from "./components/Welcome/Welcome.tsx";
import List from "./components/List/List.tsx";

function App() {
  const welcomeMessage: string = 'Hello World';
  return (
    <>
      <Welcome message={welcomeMessage} />
      <Counter />
      <List />
    </>
  )
}

export default App
