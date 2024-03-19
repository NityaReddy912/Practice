import './App.css';
import Header from './Components/header';
import Main from './Components/main';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main /> {/*Shell page where further views are getting routed*/}
      <Footer/>
    </div>
  );
}

export default App;
