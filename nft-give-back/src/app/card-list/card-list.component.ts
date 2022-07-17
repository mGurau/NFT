import { Component, Input, OnInit } from '@angular/core';
import { PrizeModel } from '../shared/models/prize.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() data: PrizeModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}