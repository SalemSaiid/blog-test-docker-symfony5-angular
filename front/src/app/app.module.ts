import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortListPipe } from '../shared/Pipe/sortList.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    NotFoundComponent,
    FooterComponent,
    SortListPipe
  ],
  exports: [
      SortListPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
