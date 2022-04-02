import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import PatientCard from './components/PatientCard';



function App() {
  const PNF="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/patient' element={<PatientCard/>}/>
          <Route path='*' element={<img src={PNF} width={1950} height={800} alt="wait....."/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
