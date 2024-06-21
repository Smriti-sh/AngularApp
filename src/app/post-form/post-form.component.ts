import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit{

  post:Post[] =[];
  @Output() newPost: EventEmitter<Post> = new EventEmitter();

  constructor(private postService: PostService){}

  ngOnInit(): void {
  }

  addPost(title:string,body:string){
    if (!title || !body) {
      alert('Please add post');
    } else {
      //savePost typically sends an HTTP POST request to save the new post on the server and returns an Observable<Post>, where Post represents the saved post.
      this.postService.savePost({title,body} as Post).subscribe(post => {
        //we are emitting an event from this component & it includes the new post
        this.newPost.emit(post);    
      })
    }
  }
}
