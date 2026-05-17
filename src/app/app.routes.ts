import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { HomePage } from './features/home/pages/home-page/home-page';
import { AboutPage } from './features/about/pages/about-page/about-page';
import { ProjectsPage } from './features/projects/pages/projects-page/projects-page';
import { WriteupsPage } from './features/writeups/pages/writeups-page/writeups-page';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'projects', component: ProjectsPage },
      { path: 'about', component: AboutPage },
      { path: 'writeups', component: WriteupsPage },
    ],
  },
];
