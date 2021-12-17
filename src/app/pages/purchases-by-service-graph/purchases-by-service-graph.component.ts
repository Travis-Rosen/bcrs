import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-purchases-by-service-graph',
  templateUrl: './purchases-by-service-graph.component.html',
  styleUrls: ['./purchases-by-service-graph.component.css']
})
export class PurchasesByServiceGraphComponent implements OnInit {
  purchases: any;
  data: any;
  itemCount= [];
  labels = [];

  constructor(private cartService: CartService) {
    this.cartService.findPurchasesByServiceGraph().subscribe(res => {
      this.purchases = res['data'];

      for (const item of this.purchases) {
        this.labels.push(item._id.name);
        this.itemCount.push(item.count);
      }

      this.data = {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: [
              '#ED0A3F',
              '#FF8833',
              '#5FA777',
              '#0066CC',
              '#6B3FA0',
              '#AF593E',
              '#6CDAE7',
              '#7FFFD4',
              '#FF7F50',
              '#BDB76B',
              '#9932CC',
              '#FF1493',
              '#B22222',
              '#FF69B4',
              '#ADD8E6',
              '#90EE90',
              '#FF00FF',
            ],
            hoverBackgroundColor: [
              '#FAF0E6',
            ],
            data: this.itemCount
          },
        ]
      };
      console.log('Data object');
      console.log(this.data);
    })
   }

  ngOnInit(): void {
  }

}
