import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(snapShots => {
      const temp = [];
      snapShots.forEach(snap => {
        temp.push({
          id: snap.payload.doc.id,
          content: snap.payload.doc.data()
        });
      });
      this.users = temp;
    });
  }

}
