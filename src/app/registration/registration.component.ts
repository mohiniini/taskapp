import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Name: any;
  Email :any;
  Password : any;
  constructor( private routew: Router,private aRoute: ActivatedRoute) { }
  public items = []; 
  ngOnInit(): void {
  }


  addToList()
{
  if(this.Name=='' || this.Email=='' || this.Password=='')
  {
    return []
  }
  else{
    localStorage.setItem("name",this.Name)
     localStorage.setItem("email",this.Email)
     localStorage.setItem("password",this.Password)
  
    this.items.push(this.Name); 
    this.items.push(this.Email);
    this.items.push(this.Password);
      this.Name = ''; 
      this.Email = '';
      this.Password= '';
      console.log(this.items)
     localStorage.getItem(this.Name)
      localStorage.getItem(this.Email)
      localStorage.getItem(this.Password)
      this.routew.navigate(['/login'], {
        relativeTo: this.aRoute
      });
   
  }
  

}
}
