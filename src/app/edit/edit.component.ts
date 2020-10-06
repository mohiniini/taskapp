import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private routew: Router,private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  home()
  {
      this.routew.navigate(['/login'], {
        relativeTo: this.aRoute
      });
  }


}
