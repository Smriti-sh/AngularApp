import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{

  post !: Post;

  constructor(
    //dependency injection
    private route:ActivatedRoute,
    private postService:PostService
  ){}

  ngOnInit(){

    //  retrieve and convert a route parameter to a number within an Angular component or service
    // const idString = +this.route.snapshot.paramMap.get('id');
    const idString = this.route.snapshot.paramMap.get('id') ?? '';
    const id = +idString;
    //1st post= variable representing the data fetched by getPost (functions's parameter)
    // this.post = fetch the post object & make it accessible
    //3rd post = fetched object
    this.postService.getPost(id).subscribe(post => this.post = post);
    
  }
}
