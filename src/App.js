import magic from './spongbobmagic.jpeg'
import patrick from './HD_image_of_Patrick_Star.jpg'
import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <h1>React Training Lab</h1>
      {/* Iteration 1 */}
      <h3><b>Iteration 1</b></h3>
      <IdCard 
        firstName='Spongebob'
        lastName='Squarepants'
        gender='They'
        height={'100'}
        birth={'1000 - 11 - 11'}
        picture={magic}
      />

      <IdCard
        firstName='Patrick'
        lastName='Star'
        gender='They'
        height={'101'}
        birth={'1000 - 11 -11'}
        picture={patrick}
      />
      
    </div>
  );
}

export default App;
