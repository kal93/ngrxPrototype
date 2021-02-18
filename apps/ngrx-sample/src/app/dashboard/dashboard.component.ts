import { Component, OnInit } from '@angular/core';
import { Item } from '@jl/core-data';
@Component({
  selector: 'jl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items = DATA;
  constructor() {}

  ngOnInit(): void {}
}

const DATA: Item[] = [
  {
    name: 'Cap',
    image:
      'https://drive.google.com/uc?export=view&id=1IENs8fKOYpjeFfPdrHr3mRODYcz1s_gn',
    price: 299.0,
  },
  {
    name: 'Shades',
    image:
      'https://drive.google.com/uc?export=view&id=1BGCosKHSfLmxsm3JzNe_MTcBQ33KieSW',
    price: 1099.0,
  },
  {
    name: 'T-Shirt',
    image:
      'https://drive.google.com/uc?export=view&id=14nELhUsFtf5892K-d_i4wFFzD5Sudg7v',
    price: 799.0,
  },
  {
    name: 'Jeans',
    image:
      'https://drive.google.com/uc?export=view&id=18y944GiqgoOnC5BPOeAQXhMTbIOF9MWo',
    price: 2999.0,
  },
  {
    name: 'Socks',
    image:
      'https://drive.google.com/uc?export=view&id=1XHCNNuoDUnP-Ys0vJ69Nt9477VSIWQo8',
    price: 99.0,
  },
  {
    name: 'Shoe',
    image:
      'https://drive.google.com/uc?export=view&id=1ElqRr2l9WnrboYW6Fou_izgk_XpRh9sU',
    price: 5499.0,
  },
];
