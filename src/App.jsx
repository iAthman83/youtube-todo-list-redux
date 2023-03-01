import backgroundImg from "./assets/gradient.png";
import Card from "./components/Card";
function App() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="h-screen w-screen"
    >
      <div className="container mx-auto flex items-center justify-center h-screen">
        <Card />
      </div>
    </div>
  );
}

export default App;
