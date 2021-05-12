import { PostService } from './../../Services/Post/post.service';
import { Post } from './../../Models/Post.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: Post[] = [];
  placeholder: string = "../../../assets/img/placeholder.png";
  constructor( private title: Title, private postService: PostService ) {
    this.title.setTitle("Home");
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    const ListAuxiliar = this.postService.getList();
    for( let index of ListAuxiliar )
      if( index.state )
        this.homeData.push( index );
  }
}
