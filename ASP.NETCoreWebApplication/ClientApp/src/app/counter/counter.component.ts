import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})

export class CounterComponent {
  public currentCount = 0;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  private updateCounter() {
    const counterData = new CounterData(this.currentCount);
    const url = this.baseUrl + 'api/counter';
    this.http.put<CounterData>(url, counterData).subscribe();
  }

  public incrementCounter() {
    this.currentCount++;
    this.updateCounter();
  }
}

class CounterData {
  count: number;

  constructor(count: number) {
    this.count = count;
  }
}
