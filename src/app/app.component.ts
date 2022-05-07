import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'educationApp';
  constructor(private router: Router){}
  showToggle=false;
  showSection=false;
  ngOnInit() {
    this.router.navigate([''])
  } 



}
