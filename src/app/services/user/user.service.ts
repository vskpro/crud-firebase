import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = this.afs.collection('users');

  constructor(private afs: AngularFirestore) { }

  insert(data) {
    return this.user.add(data);
  }

  getById(id) {
    return this.user.doc(id).get();
  }

  getAll() {
    return this.user.snapshotChanges();
  }

  update(id, data) {
    return this.user.doc(id).update(data);
  }

  delete(id) {
    return this.user.doc(id).delete();
  }

}
