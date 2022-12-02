import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/website/',
    component: ComponentCreator('/website/', 'c91'),
    routes: [
      {
        path: '/website/',
        component: ComponentCreator('/website/', 'd69'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/configuration',
        component: ComponentCreator('/website/configuration', '1de'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/incubator',
        component: ComponentCreator('/website/incubator', '156'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/komondor',
        component: ComponentCreator('/website/komondor', '7c6'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/maskValue',
        component: ComponentCreator('/website/maskValue', '765'),
        exact: true
      },
      {
        path: '/website/mockto',
        component: ComponentCreator('/website/mockto', '01e'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/plugin',
        component: ComponentCreator('/website/plugin', 'eec'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/setup',
        component: ComponentCreator('/website/setup', '542'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/spec',
        component: ComponentCreator('/website/spec', '21c'),
        exact: true,
        sidebar: "mocktomata"
      },
      {
        path: '/website/zucchini',
        component: ComponentCreator('/website/zucchini', 'b40'),
        exact: true,
        sidebar: "mocktomata"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
