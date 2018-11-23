import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
<<<<<<< HEAD
  ReactDOM.unmountComponentAtNode(div);
=======
>>>>>>> 3c853b0899e27319ae0bbb2ecc75925e026051dc
});
