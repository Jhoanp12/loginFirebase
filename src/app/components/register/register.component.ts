import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formReg: FormGroup;
  constructor(private userService : UserService,
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
    this.userService.register(this.formReg.value)
    .then(res =>{
      console.log(res);
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
