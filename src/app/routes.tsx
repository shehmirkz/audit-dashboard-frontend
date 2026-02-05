import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PageLayout } from '../components/layout/PageLayout';
import { Dashboard } from '../pages/Dashboard.tsx';
import { Perspectives } from '../pages/Perspectives.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PageLayout>
        <Dashboard />
      </PageLayout>
    ),
  },
  {
    path: '/perspectives',
    element: (
      <PageLayout>
        <Perspectives />
      </PageLayout>
    ),
  },
  {
    path: '/tasks',
    element: (
      <PageLayout>
        <div className="p-6 text-gray-600">Tasks – Coming soon</div>
      </PageLayout>
    ),
  },
  {
    path: '/documents',
    element: (
      <PageLayout>
        <div className="p-6 text-gray-600">Documents – Coming soon</div>
      </PageLayout>
    ),
  },
  {
    path: '/reports',
    element: (
      <PageLayout>
        <div className="p-6 text-gray-600">Reports – Coming soon</div>
      </PageLayout>
    ),
  },
  {
    path: '/users',
    element: (
      <PageLayout>
        <div className="p-6 text-gray-600">Users & Roles – Coming soon</div>
      </PageLayout>
    ),
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
