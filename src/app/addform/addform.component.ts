import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {

  constructor(private routew: Router,private aRoute: ActivatedRoute) { }
  items=[]
  Title: any;
  Description :any;
  Priority: any;
  
  ngOnInit(): void {
  }


  addToList()
  {
  if(this.Title=='' || this.Description=='' || this.Priority=='')
    {
    return []
    }
  else{
    localStorage.setItem("title",this.Title)
     localStorage.setItem("description",this.Description)
     localStorage.setItem("priority",this.Priority)
  
    this.items.push(this.Title); 
    this.items.push(this.Description);
    this.items.push(this.Priority);
      this.Title = ''; 
      this.Description = '';
      this.Priority= '';
      console.log(this.items)
     localStorage.getItem(this.Title)
      localStorage.getItem(this.Description)
      localStorage.getItem(this.Priority)
      // this.routew.navigate(['/tasktable'], {
      //   relativeTo: this.aRoute
      // });
   
    }
  

}
}
