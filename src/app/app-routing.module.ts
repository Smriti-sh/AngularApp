import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Routes[] loaded from above modeule & this will map the URL paths, whatever component we want to load 
const routes: Routes = [
  // component is the to HomeComponent we just brought in
  {path:'',component: HomeComponent},
  {path:'posts',component: PostsComponent},
  {path:'users',component: UsersComponent},
  {path:'post/:id',component: PostComponent},
  {path:'**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
