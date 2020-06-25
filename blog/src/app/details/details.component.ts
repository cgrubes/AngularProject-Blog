import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { facts} from "../facts";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
fact;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.fact = facts[+params.get('factId')];
  });
  }
}
