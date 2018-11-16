import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service'; // services added
import { PostService } from './services/post.service'; // services added
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component'; // this is your root app component
//declare everything you create. you need to declare it here
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  //for components used in angular app project
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostComponent,
    PostFormComponent,
    HomeComponent
  ],
  //for angular imports like forms module 
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, PostService], //put your services here
  bootstrap: [AppComponent]
})
export class AppModule { }
