import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.users = data;
      console.log(this.users);
    } );
  }


}
