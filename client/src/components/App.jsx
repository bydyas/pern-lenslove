import { useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';

import Header from './Header';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import Footer from './Footer';

function App() {
  const { authWithEmailAndPassword } = useAuth();

  useEffect(() => {
    (async () => {
      authWithEmailAndPassword('CHECK');
    })();
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <main className="container">
        <AppRouter />
      </main>
      <Footer />
    </>
  );
}

export default App;
