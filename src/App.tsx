import './App.css'
import Counter from "./components/Counter.tsx";
import Welcome from "./components/Welcome.tsx";

function App() {
  const welcomeMessage: string = 'Hello World';
  return (
    <>
      <Welcome message={welcomeMessage} />
      <Counter />
    </>
  )
}

export default App
