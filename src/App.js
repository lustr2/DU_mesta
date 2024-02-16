import './App.css';
import City from './components/city';
import { cities } from './cz-cities';
import './global.css';

function App() {
  return (
    <div className="App">
        <main>
        <article>
          <div className="container">{cities.map(c => <div><City key={c.name} name={c.name} population={c.population} area={c.area} district={c.district} photo={c.photo}></City></div>)}</div>
        </article>
      </main>

    </div>
  );
}

export default App;
