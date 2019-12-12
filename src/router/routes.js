
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/candidate/home' },
      { path: 'candidate/home', component: () => import('pages/candidate/Home.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
