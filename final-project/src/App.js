import PokeList from './components/PokeList';
import Team from './components/Team';
import './index.css';
 /* bg-slate-100 py-4 */
function App() {
  return (
    <>
    <div className='box-border p-20 bg-pokemon-landscape bg-center'>
   
      <h1 className='flex justify-center font-bold text-9xl'>Pokemon Database</h1>
    </div>
    <Team />
    <PokeList />
    </>
  );
}

export default App;
