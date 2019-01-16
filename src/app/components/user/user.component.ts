import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserAddress } from '../../interface/User';
import { Post } from '../../interface/Post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string; // OR  name:string = "test"
  age:number;
  email:string;
  address:UserAddress;
  hobbies:string[]; //either string, number etc
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    //when component init
    this.name = "aaa";
    this.age = 30;
    this.email = "john@gmail.com"
    this.address = {
      street: '357 Camarin',
      city: 'Caloocan City',
      state: 'PH'
    }
    this.hobbies = ['Music', 'Games', 'Code']
    this.hello = 1 //ANY

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts
    })
  }

  onClick(){
    this.name='Joe';
    // this.hobbies.push('New Hobby')
  }

  addHobby(hobby){
      this.hobbies.unshift(hobby);
      return false;
  }

  deleteHobby(hobby){
    for(let i = 0; i <this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    //if isEdit true then isEdit will false (vice versa)
    this.isEdit = !this.isEdit;
  }

}
