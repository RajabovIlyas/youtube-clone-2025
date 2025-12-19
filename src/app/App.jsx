import './App.css';
import './video-card.css';
import './channel-image.css';
import { RouterProvider } from 'react-router';
import { router } from '../features/routers/route';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
