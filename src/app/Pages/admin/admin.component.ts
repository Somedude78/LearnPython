import { Title } from '@angular/platform-browser';
import { Post } from './../../Models/Post.model';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/Post/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  homeData: Post[] = [];
  placeholder: string = "../../../assets/img/placeholder.png";

  constructor( private title: Title, private postService: PostService ) {
    this.title.setTitle("Admin Section");
  }

  ngOnInit(): void {
    this.loadData();
    console.log( this.homeData );
  }

  loadData(){
    this.homeData = this.postService.getList();
  }

}
