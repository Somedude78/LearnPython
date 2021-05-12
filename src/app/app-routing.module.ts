import { MessagesComponent } from './Pages/messages/messages.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { PostComponent } from './Pages/post/post.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "Home",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "Post",
    component: PostComponent,
    pathMatch: "full"
  },
  {
    path: "Contact",
    component: ContactUsComponent,
    pathMatch: "full"
  },
  {
    path: "admin",
    component: AdminComponent,
    pathMatch: "full"
  },
  {
    path: "messages",
    component: MessagesComponent,
    pathMatch: "full"
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
