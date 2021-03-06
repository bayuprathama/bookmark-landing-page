import Container from './components/Container';
import Hero from './components/Hero';
import Faq from './components/Faq';
import Features from './components/Features';
function App() {
  return (
    <div className="App">
      <Container>
        <Hero />
        <Features />
        <Faq />
      </Container>
    </div>
  );
}

export default App;
