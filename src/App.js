import magic from './spongbobmagic.jpeg'
import patrick from './HD_image_of_Patrick_Star.jpg'
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';



function App() {
  return (
    <div className="App">
      <h1>React Training Lab</h1>
     
      {/* Iteration 1 */}
      
      <h1>Iteration 1</h1>
      <div className='iteration1'>
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
      <div className='iteration2'>
      <h1>Iteration 2</h1>
      <Greetings lang='fr'>Spongebob</Greetings>
      <Greetings lang='de'>Patrick</Greetings>
      <Greetings lang='es'>Zoro</Greetings>
        <Greetings lang='en'>James Bond</Greetings>
        </div>
<div className='iteration3'>
      <h1> Iteration 3</h1>
          <Random min={1} max={5} />
          </div>
        
    </div>
  );
}

export default App;
