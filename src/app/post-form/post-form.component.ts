import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent implements OnInit{
  
  //Properties

post:Post[] =[];
  @Output() newPost: EventEmitter<Post> = new EventEmitter();   //@Output(): A decorator that marks the newPost property as an output property, 
// newPost will emit events carrying Post objects.
@Output() updatedPost: EventEmitter<Post> = new EventEmitter();

//currentPost defines an input property that will receive data from parent
  @Input() currentPost:Post ={
    id: 0,
    title: '',
    body: ''
  };
  @Input() isEdit: boolean = false; 

  constructor(private postService: PostService){
  }

  ngOnInit(): void {}

  addPost(title:string,body:string){
    if (!title || !body) {
      alert('Please add post');
    } else {
      //savePost typically sends an HTTP POST request to save the new post on the server and returns an Observable<Post>, where Post represents the saved post.
      this.postService.savePost({title,body} as Post).subscribe
      (post => {
        console.log(this.currentPost, "currentPost");
        //we are emitting an event from this component & it includes the new post
        this.newPost.emit(post);    
      })
    }
  }

  //calls updatePost method form postService service
  updatePost(){
    this.postService.updatePost(this.currentPost).subscribe
    ((post) => {
      console.log(post);
      this.isEdit=false;
      this.updatedPost.emit(post);
    }); 
  }
}
