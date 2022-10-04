import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  @Output() term = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch(text: string) {
    this.term.emit(text);
    console.log(text);
  }

}
