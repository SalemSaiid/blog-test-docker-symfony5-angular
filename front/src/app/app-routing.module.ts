import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
    { path: '', component: PostsComponent, },
    { path: 'posts/:postId', component: PostComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
