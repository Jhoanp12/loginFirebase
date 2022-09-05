import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    this.userService.logout().then(()=>{
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}
