import './App.css';
import About from './components/About/About';
import BookFood from './components/BookFood/BookFood';
import Counter from './components/Counter/Counter';
import ExploreFood from './components/Explore-Food/ExploreFood';
import Faq from './components/FAQ/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Newsletter from './components/Newsletter/Newsletter';
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
      <Faq></Faq>
      <BookFood></BookFood>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
