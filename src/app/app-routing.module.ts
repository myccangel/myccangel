import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'loader', pathMatch: 'full' },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then(m => m.LoaderPageModule),
    data: { pageName: 'Loader' }
  },
  {
    path: 'records',
    loadChildren: () => import('./pages/records/records.module').then(m => m.RecordsPageModule),
    data: { pageName: 'Records' }
  },
  {
    path: 'update',
    loadChildren: () => import('./pages/update/update.module').then(m => m.UpdatePageModule),
    data: { pageName: 'Update' }
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    data: { pageName: 'Home' }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    data: { pageName: 'Login' }
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule),
    data: { pageName: 'Register' }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
    data: { pageName: 'Profile' },
    canLoad: [AuthGuard]
  },
  {
    path: 'library',
    loadChildren: () => import('./pages/library/library.module').then( m => m.LibraryPageModule),
    data: { pageName: 'Library' },
    canLoad: [AuthGuard]
  },
  {
    path: 'connections',
    loadChildren: () => import('./pages/connections/connections.module').then( m => m.ConnectionsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/donation/donation.module').then( m => m.DonationPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./pages/video/video.module').then( m => m.VideoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'photo',
    loadChildren: () => import('./pages/photo/photo.module').then( m => m.PhotoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule),
    canLoad: [AuthGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
