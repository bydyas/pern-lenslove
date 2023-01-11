import { Link } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Form from './components/Form';

function App() {
  return (
    <>
      <Form />
      <AppRouter />
      <Link to="/admin">GO TO ADMIN PAGE</Link>
    </>
  );
}

export default App;
