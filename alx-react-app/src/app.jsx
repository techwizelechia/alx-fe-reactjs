import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

import WelcomeMessage from './components/WelcomeMessage';
import './app.css'

function App() {
  return (

      <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <Footer />
      </div>
  );
}

export default App;
