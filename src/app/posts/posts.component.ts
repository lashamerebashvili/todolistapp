import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from './posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService ,private route: ActivatedRoute) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(
      (posts: any) => this.posts = posts
    );

  }

}
