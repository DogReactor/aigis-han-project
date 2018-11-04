import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FilesComponent } from './files/files.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DashInfoComponent } from './dash-info/dash-info.component';
import { DashProgressComponent } from './dash-progress/dash-progress.component';
import { FilesDetailComponent } from './files-detail/files-detail.component';
import { ProcessbarComponent } from './processbar/processbar.component';
import { EditorModule } from './editor/editor.module';
import { LoginComponent } from './login/login.component';
import { MypageComponent } from './mypage/mypage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatDialogModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { RegComponent } from './reg/reg.component';
import { HttpClientModule } from '@angular/common/http';
import { AllocateDialogComponent } from './files-detail/allocate.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    FilesComponent,
    DashInfoComponent,
    DashProgressComponent,
    FilesDetailComponent,
    ProcessbarComponent,
    LoginComponent,
    MypageComponent,
    RegComponent,
    AllocateDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    EditorModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
  ],
  entryComponents: [
    AllocateDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
