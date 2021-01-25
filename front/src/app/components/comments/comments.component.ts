import { Component, OnInit, Input } from '@angular/core';
import {Comment} from '../../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[] = [];

  ngOnInit(): void {
  }

}
