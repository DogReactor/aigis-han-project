import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilesComponent } from './files/files.component';
import { EditorComponent } from './editor/editor/editor.component';
import { LoginComponent } from './login/login.component';
import { MypageComponent } from './mypage/mypage.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  { path: '', redirectTo: '/files', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'files', component: FilesComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mypage', component: MypageComponent },
  { path: 'reg', component: RegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
