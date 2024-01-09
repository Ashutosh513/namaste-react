import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => <h1>Namaste React From JSX!</h1>;

const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Namaste React from Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);

root.render(<HeadingComponent />);
