import './App.css';
import gsap from 'gsap';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <>
        <Content />
      </>
    </div>
  );
}

export default App;
