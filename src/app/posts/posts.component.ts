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

  //these will be passed to the parent Component
  currentPost: Post={
    id: 0,
    title: '',
    body: ''
  }
  isEdit:boolean=false;

  constructor(private postService: PostService){}

  ngOnInit(){
    //remember its an observable
    this.postService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.posts = posts;   //displaying the fetched data in the component
  });
  }

  onNewPost(post :Post){
    this.posts.unshift(post);
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit=true;
  }

  onUpdatedPost(post:Post){
    this.posts.forEach((cur,index)=>{
if (post.id === cur.id) {
  this.posts.splice(index,1);
  this.posts.unshift(post);
  this.isEdit=false;
  this.currentPost={
    id:0,
    title:'',
    body:''
  }
}
    });
  }

  removePost(post:Post){
  if (confirm('Are you sure?')) {
    this.postService.removePost(post.id).subscribe(()=>{
      this.posts.forEach((cur,index)=>{
        if (post.id === cur.id) {
          this.posts.splice(index,1);
          this.isEdit=false;
        }
            });
    })
  }}
}
 