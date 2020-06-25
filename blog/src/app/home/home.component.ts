import { Component, OnInit } from '@angular/core';
import { facts} from "../facts";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
facts = facts;
  constructor() { }

  ngOnInit(): void {
  }

}
