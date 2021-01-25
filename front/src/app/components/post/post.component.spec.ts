import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { CommentsComponent } from '../comments/comments.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PostsComponent } from '../posts/posts.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SortListPipe } from '../../../shared/Pipe/sortList.pipe';
import { AppComponent } from '../../app.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

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
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
