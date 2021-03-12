import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent implements OnInit {
@Input() pages!: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
