import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Prayer from './pages/Prayer';
import PrayerSuras from './pages/PrayerSuras';
import PrayerDuas from './pages/PrayerDuas';
import Ablutions from './pages/Ablutions';
import FuneralPrayer from './pages/FuneralPrayer';
import HutbePrayers from './pages/HutbePrayers';
import EidPrayer from './pages/EidPrayer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'prayers/:id',
        element: <Prayer />,
      },
      {
        path: 'ablutions',
        element: <Ablutions />,
      },
      {
        path: 'prayer-suras',
        element: <PrayerSuras />,
      },
      {
        path: 'prayer-duas',
        element: <PrayerDuas />,
      },
      {
        path: 'funeral-prayer',
        element: <FuneralPrayer />,
      },
      {
        path: 'hutbe-prayers',
        element: <HutbePrayers />,
      },
      {
        path: 'eid-prayer',
        element: <EidPrayer />,
      },
    ],
  },
]);
