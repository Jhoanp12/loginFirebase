import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formReg: FormGroup;
  constructor(private userService: UserService,
    private router: Router
    ) {
    this.formReg = new FormGroup({
      email : new FormControl(),
      password: new FormControl()
    })
   }


  ngOnInit(): void {

  }
  onSubmit(){
    this.userService.login(this.formReg.value)
    .then(res =>{
      console.log(res);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error));
  }

  onClickG(){
    this.userService.loginWithGoogle().then(res => {
      console.log(res);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error))
  }

  onClickF(){
    this.userService.loginWithFacebook().then(res => {
      console.log(res);
      this.router.navigate(['/main']);
    })
    .catch(error => console.log(error))
  }
}
