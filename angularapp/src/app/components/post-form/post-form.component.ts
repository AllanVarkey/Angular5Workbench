import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;
  //here we are emitting the Post from this component to the post component
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  //for edit we need to bring 
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private postServices: PostService) { }

  ngOnInit() {
  }
  addPost(title: String, body: String) {

    if (!title || !body) {
      alert("Add a title and body please");
    }
    else {
      this.postServices.savePost({ title, body } as Post).subscribe(response => {
        //emit an event from here to the post component with the new post
        this.newPost.emit(response);
      });
    }
  }
  updatePost() {
    this.postServices.updatePost(this.currentPost).subscribe(response => {
      console.log(response);
      this.updatedPost.emit(response);
    })
  }

}
