import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Name: any;
  Email :any;
  Password : any;
  constructor(private routew: Router,private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  loginfn()
{

let a = localStorage.getItem('email');
console.log(a);
 if(this.Email == localStorage.getItem('email') && this.Password == localStorage.getItem('password'))
{
    console.log("login sucessful")
    this.routew.navigate(['/tasktable'], {
      relativeTo: this.aRoute
    });
}
else{
  this.routew.navigate(['/register'], {
    relativeTo: this.aRoute
  });
}
console.log(this.Email);

}
}