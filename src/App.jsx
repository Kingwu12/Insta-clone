import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/HomePage/AuthPage/AuthPage';
import PageLayouts from './Layouts/PageLayouts/PageLayouts';

function App() {
  return (
    <PageLayouts>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>
    </PageLayouts>
  );
}

export default App;
