import PokeList from './components/PokeList';
import Team from './components/Team';
import './index.css';
function App() {
  return (
    <>
    <div
      style={{
        backgroundColor: "#52A4B1",
        height: "100vh",
        width: "100vw",
      }}
    >
    <div className='box-border p-20 bg-pokemon-landscape bg-center'>
      <h1 className='flex justify-center font-bold text-9xl text-title'>Pokemon Database</h1>
    </div>
    <div className='bg-gradient-to-br from-light-light-green to-blue'>
    <Team />
    <PokeList />
    <div
        className='text-right pr-4 pb-4'
      >Source Code on <a className='underline' href='https://github.com/bkinaan/software-saturdays-final-project'>GitHub</a></div>
    </div>
    </div>
    
    </>
  );
}

export default App;
