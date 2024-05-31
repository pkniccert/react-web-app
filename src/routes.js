import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const CaseNew = React.lazy(() => import('./views/case/index'))
const CaseManage = React.lazy(() => import('./views/case/manage'))
const UserManage = React.lazy(() => import('./views/users/index'))
const UserCreate = React.lazy(() => import('./views/users/create'))
const Logout = React.lazy(() => import('./views/pages/logout/Logout'))
import withAuth from './middleware/withAuth';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: withAuth(Dashboard) },
  { path: '/case/new', name: 'New Case', element: withAuth(CaseNew) },
  { path: '/case', name: 'Manage Case', element: withAuth(CaseManage) },
  { path: '/users', name: 'New Case', element: withAuth(UserManage) },
  { path: '/users/new', name: 'Manage Case', element: withAuth(UserCreate) },
  { path: '/logout', name: 'Logout', element: withAuth(Logout) },
]

export default routes
