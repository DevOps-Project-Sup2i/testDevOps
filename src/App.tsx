import { useState } from 'react';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'courses'>('home');

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onExplore={() => setCurrentPage('courses')} />
      ) : (
        <CoursesPage onBack={() => setCurrentPage('home')} />
      )}
    </>
  );
}

export default App;
