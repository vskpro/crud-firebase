import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  username: string;
  users: any;
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

  addUser() {
    if (this.username) {
      this.userService.insert({ name: this.username })
        .then(data => {
          console.log(data);
          this.username = '';
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      alert('Enter a valid username');
    }
  }

  delete(id) {
    this.userService.delete(id).then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
      alert(error.message);
    });
  }

}
