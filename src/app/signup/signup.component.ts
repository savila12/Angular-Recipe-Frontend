import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userName: string | undefined;
  public emailAddress: string | undefined;
  public password: string | undefined;

  registerUser(): void {
    const newUser = {userName: this.userName, emailAddress: this.emailAddress, password: this.password};
    this.userService.registerUser(newUser);
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
