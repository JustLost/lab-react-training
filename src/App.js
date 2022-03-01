import logo from './logo.svg';
import './App.css';
import IdCard from './Components/IdCard/IdCard';
import Greetings from './Components/Greetings/Greetings';
import Random from './Components/Random/Random';


function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        date={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        date={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Hallo Ludwig</Greetings>
      <Greetings lang="fr">Bonjour François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}

export default App;
