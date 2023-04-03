import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  postText: string = '';
  posts: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  createPost(): void {
    if (this.postText.trim() !== '') {
      this.posts.unshift(this.postText.trim());
      this.postText = '';
    }
  }
}
