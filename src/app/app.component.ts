import { Component, OnInit } from '@angular/core';
import { InitialNavigation } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.router.navigate(['/default-decision'])
  }
  title = 'planningRock';
}
