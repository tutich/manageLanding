import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Articles from './components/articles/Articles';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
