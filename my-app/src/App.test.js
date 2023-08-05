import { render, screen } from '@testing-library/react';
import App from './main-page';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
