import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) { }
  currentUser: any;
  title = 'angular-recipes-frontend';

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    // @ts-ignore
    this.userService.searchSubject.subscribe((currentUser: any) => {
      this.currentUser = currentUser;
      console.log(currentUser);
    });
  }
}
