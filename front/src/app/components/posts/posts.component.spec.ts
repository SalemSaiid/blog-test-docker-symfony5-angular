import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostService } from '../../services/post.service';
import {CommentsComponent} from '../comments/comments.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {SortListPipe} from '../../../shared/Pipe/sortList.pipe';
import {AppComponent} from '../../app.component';
import {PostComponent} from '../post/post.component';
import {FooterComponent} from '../footer/footer.component';
import {AppRoutingModule} from '../../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule
        ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
