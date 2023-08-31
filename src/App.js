import './App.css';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
      <Textfrom heading='Enter Your Text'/>
      </div>
    </>
  );
}

export default App;
