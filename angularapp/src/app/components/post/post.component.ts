import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service'
import { log } from 'util';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: ''
  };
  isEdit: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPost().subscribe(response => {
      this.posts = response;
    })
  }
  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  updatedPost(post: Post) {

    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
      }
    });

    this.currentPost = {
      id: 0,
      title: '',
      body: ''
    };
    this.isEdit = false;
  }

  deletePost(post: Post) {
    if (confirm('are you sure')) {
      this.postService.removePost(post.id).subscribe(() => {
        this.posts.forEach((current, index) => {
          if (post.id === current.id) {
            this.posts.splice(index, 1);
          }
        });
      });
    }
  }
}
