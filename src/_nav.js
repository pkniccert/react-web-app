import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilNotes,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '',
    },
  },
  {
    component: CNavGroup,
    name: 'Case',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'New',
        to: 'case/new',
      },
      {
        component: CNavItem,
        name: 'Manage',
        to: 'case/manage',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Logout',
    to: '/logout',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: '',
    },
  },
]

export default _nav
