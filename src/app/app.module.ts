import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './core/components/page/page.component';
import { StudentTableComponent } from './core/components/student-table/student-table.component';
import { HeaderComponent } from './shared/header/header.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { StudentDialogComponent } from './shared/components/student-dialog/student-dialog.component';
import { MyMaterialModule } from './shared/modules/my-material/my-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StudentTableComponent,
    HeaderComponent,
    SideNavbarComponent,
    StudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
