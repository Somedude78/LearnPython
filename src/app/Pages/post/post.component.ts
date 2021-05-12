import { PostService } from 'src/app/Services/Post/post.service';
import { FormsModule } from '@angular/forms';
import { Post } from './../../Models/Post.model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  PostToAdd: Post = <Post>{};
  title: string;
  image: string;
  link: string;
  description: string;

  constructor( private Title: Title, public postService: PostService ) {
    this.Title.setTitle("Post");
  }

  ngOnInit(): void {
    // console.log( this.postService.getList() );
    // console.log( this.postService.getAllItems() );
  }

  resetFields(){
    this.title = "";
    this.image = "";
    this.link = "";
    this.description = "";
  }

  onSubmit(){
    this.PostToAdd.title = this.title;
    this.PostToAdd.image = this.image;
    this.PostToAdd.link = this.link;
    this.PostToAdd.content = this.description;
    this.PostToAdd.state = false;
    console.log( this.PostToAdd );

    this.postService.add( this.PostToAdd );

    // this.postService.PostsList.push( this.PostToAdd )
    console.log( this.postService.PostsList );

    this.resetFields();
  }
}
