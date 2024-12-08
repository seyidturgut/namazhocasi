import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import PrayersPage from '../pages/Prayers';
import PrayerDuasPage from '../pages/PrayerDuas';
import PrayerDetailPage from '../pages/PrayerDetail';
import AblutionsPage from '../pages/Ablutions';
import AblutionDetailPage from '../pages/AblutionDetail';
import PrayerSuras from '../pages/PrayerSuras';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'prayers',
        element: <PrayersPage />,
      },
      {
        path: 'prayers/:id',
        element: <PrayerDetailPage />,
      },
      {
        path: 'ablutions',
        element: <AblutionsPage />,
      },
      {
        path: 'ablutions/:id',
        element: <AblutionDetailPage />,
      },
      {
        path: 'prayer-duas',
        element: <PrayerDuasPage />,
      },
      {
        path: 'prayer-suras',
        element: <PrayerSuras />,
      },
    ],
  },
]);
