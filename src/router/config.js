import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import answer_fix_Layout from '@/components/layout/answer_fix_Layout.vue';
import answer_input_Layout from '@/components/layout/answer_input_Layout.vue';

export const mainRouter = [
  {
    path: '/',    
    component: DefaultLayout,
    redirect: '/',
    meta: {},
    children: [
      {
        path: 'mainPage',
        name: 'mainPage',
        meta: {},
        props: true,
        component: () => import('@/views/mainPage.vue'),
      },
      
    ],
  },
  {
    path: '/fixPage',
    component: answer_fix_Layout,
    redirect: '/fixPage',
    meta: { },
    children: [
      {
        path: '',
        name: 'fixPage',
        meta: {},
        props: true,
        component: () => import('@/views/fixPage.vue'),
      },
    ],
  },
  {
    path: '/inputPage',
    component: answer_input_Layout,
    redirect: '/inputPage',
    meta: { },
    children: [
      {
        path: '',
        name: 'inputPage',
        meta: {},
        props: true,
        component: () => import('@/views/inputPage.vue'),
      },
    ],
  },
];
