import './App.css';
import { Fragment } from 'react';
import TemplatesGenerator from './components/templates/TemplateGenerator';
import TemplateHome from './components/templates/TemplateHome';
import TemplateRandomQuote from './components/templates/TemplateRandomQuote';
import TemplateMultiStepForm from './components/templates/TemplateMultiStepForm';
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
              <Route path='/Multi-Step-Form' element={<TemplateMultiStepForm />} />
            </Routes>
      } />
    </Fragment>
  );
}

export default App;
