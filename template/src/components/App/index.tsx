import React from 'react';

// Note: Using an Alias in Webpack
import { Header } from 'components/Header/index';
import { Bottom } from 'components/Bottom/index';

// Note: Without curly braces importing a function which use export default
import Hero from 'components/Hero/index';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Hero />
          <Bottom />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
