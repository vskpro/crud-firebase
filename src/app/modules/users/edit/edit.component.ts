import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editData;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param && param.id) {
        this.editData = {
          id: param.id
        };
        this.userService.getById(param.id).subscribe(snap => {
          console.log(snap);
          this.editData.name = snap.data().name;
        });
      } else {
        alert('No user id passed');
      }
    });
  }

  update() {

    const data = {
      name: this.editData.name
    };

    if (this.editData.name) {
      this.userService.update(this.editData.id, data).then(() => {
        this.router.navigate(['/dashboard/users']);
      }).catch(error => {
        console.log(error);
        alert(error.message);
      });
    } else {
      alert('Name cannot be empty');
    }

  }

}
