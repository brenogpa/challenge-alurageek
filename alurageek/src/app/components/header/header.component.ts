import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  toDisplay = true;

  hideButton(){
    this.toDisplay = !this.toDisplay;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
