import './App.css';
import About from './components/About/About';
import Counter from './components/Counter/Counter';
import ExploreFood from './components/Explore-Food/ExploreFood';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Header></Header>
      <Counter></Counter>
      <About></About>
      <Story></Story>
      <ExploreFood></ExploreFood>
      <Testimonial></Testimonial>
    </div>
  );
}

export default App;
