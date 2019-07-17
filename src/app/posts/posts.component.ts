import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './posts.service';
import { UserService } from '../shared/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService,
              public userService: UserService
    ) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
