import './App.css';
import { Fragment } from 'react';
import TemplatesGenerator from './components/templates/TemplateGenerator';
import TemplateHome from './components/templates/TemplateHome';
import TemplateRandomQuote from './components/templates/TemplateRandomQuote';
import Format from './components/layout/Format';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Format children={
            <Routes>
              <Route path='/' element={<TemplateHome />} />
              <Route path='/qr-code' element={<TemplatesGenerator />} />
              <Route path='/random-quote' element={<TemplateRandomQuote />} />
            </Routes>
      } />
    </Fragment>
  );
}

export default App;
