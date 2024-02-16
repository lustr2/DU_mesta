import { createRoot } from 'react-dom/client';
import City from './components/city/city';
import { cities } from './cz-cities';
import './global.css';

const App = () => (
        <>
      <main>
        <article>
          <div className="container">{cities.map(c => <div><City key={c.name} name={c.name} population={c.population} area={c.area} district={c.district} photo={c.photo}></City></div>)}</div>
        </article>
      </main>
    </>
  );
  
  createRoot(
    document.querySelector('#app'),
  ).render(<App />);
  