import './App.css';
import City from './components/city';
import { cities } from './cz-cities';
import './global.css';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
        <main>
          <Grid container spacing={-10} xs={10} sm={8}>
              {cities.map(c => <City key={c.name} name={c.name} population={c.population} area={c.area} district={c.district} photo={c.photo}></City>)}
          </Grid>
      </main>
    </div>
  );
}

export default App;
