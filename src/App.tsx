import './App.css';
import { Fragment } from 'react';
import TemplatesGenerator from './components/templates/TemplateGenerator';
import TemplateHome from './components/templates/TemplateHome';
import TemplateRandomQuote from './components/templates/TemplateRandomQuote';
import Format from './components/layout/Format';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Format children={
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<TemplateHome />} />
              <Route path='/qr-code' element={<TemplatesGenerator />} />
              <Route path='/random-quote' element={<TemplateRandomQuote />} />
            </Routes>
          </BrowserRouter>
      } />
    </Fragment>
  );
}

export default App;
