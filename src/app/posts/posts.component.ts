import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  
  posts: Post[] =[];

  constructor(private postService: PostService){}

  ngOnInit(){
    //remember its an observable
    this.postService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;   //displaying the fetched data in the component
      
  });
  }
}
 