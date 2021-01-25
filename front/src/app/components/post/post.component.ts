import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = {
      id : this.route.snapshot.params.postId,
      title: '',
      content: '',
      createdBy: '',
      createdAt: '',
      comments: []
  } ;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getPost();
    }

    getPost(): void{
        this.postService.findById(this.post.id)
            .subscribe(post => {
                this.post = post;
            });
    }

}
