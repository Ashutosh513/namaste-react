const heading = React.createElement(
  'h1',
  {
    id: 'heading',
    name: 'ashu',
  },
  [
    React.createElement('p', {}, 'Hello From Paragraph'),
    React.createElement('p', {}, 'Second Hello From Paragraph'),
  ]
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(root);

root.render(heading);
