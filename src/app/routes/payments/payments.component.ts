import { Component, OnInit } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [CurrencyPipe],
})
export class PaymentsComponent implements OnInit {
  public data: Array<any> = [];

  constructor(
    private currencyPipe: CurrencyPipe,
  ) { }

  ngOnInit() {
    const numOfItems = Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i < numOfItems; i++) {
      this.data.push({
        transaction: this.generateTransactionId(12),
        amount: this.currencyPipe.transform(this.generateAmount()),
        status: this.generateStatus(),
        timeStamp: this.generateDate(),
      });
    }
    this.data.sort((a, b) => new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime());
  }

  generateTransactionId(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  generateAmount(): number {
    return Math.floor(Math.random() * 1000) + 1;  
  }

  generateStatus(): string {
    const statuses = [
      'paid',
      'refunded',
      'pending',
    ]
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  generateDate(): string {
    const randomDate = Math.floor((Math.random() * 31) + 1);
    const randomHour = Math.floor((Math.random() * 23));
    const randomMinute = Math.floor((Math.random() * 59));
    const date: Date = new Date(`July ${randomDate}, 2019 ${randomHour}:${randomMinute}:00`);
    return `${date.toLocaleString('default', { month: 'short', day: 'numeric', hour: 'numeric', hour12: true, minute: '2-digit' })}`;
  }

}
