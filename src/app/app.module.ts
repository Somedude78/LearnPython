import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './Pages/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    ContactUsComponent,
    AdminComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
