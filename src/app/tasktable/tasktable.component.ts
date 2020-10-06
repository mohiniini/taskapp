import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css']
})
export class TasktableComponent implements OnInit {



  // @Input() childPost :any[] = [];
  constructor(private routew: Router,private aRoute: ActivatedRoute) { }

  Title;
Description ;
Priority ;

title: any;
description;
priority;
obj1=[]

  


ngOnInit() {
 
  this.title = localStorage.getItem('title');
  this.description = localStorage.getItem('description');
  this.priority = localStorage.getItem('priority');

  var obj={
    title: this.title,
    description : this.description,
    priority : this.priority
    
  }
  console.log(obj)
  this.obj1.push(obj)
 
}

Addform()
{
  this.routew.navigate(['/addform'], {
    // relativeTo: this.aRoute
  });
  console.log("dsd")
}

public deleteTask() { 
  
   console.log(this.obj1);
  this.obj1.splice(1,1); 
  console.log(this.obj1)
  return this.obj1;
  
} 


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('email');
    this.routew.navigate(['/login'], {
      relativeTo: this.aRoute
    });
  }

}
