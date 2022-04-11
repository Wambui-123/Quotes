import { Component, Input, OnInit } from '@angular/core';

interface Quote {
  id: number;
  name: string;
  content: string;
  author: string;
  upVotes: number;
  downVotes: number;
  lastUpdatedAt: string;
}

@Component({
  selector: 'app-quote-input',
  templateUrl: './quote-input.component.html',
  styleUrls: ['./quote-input.component.css'],
})
export class QuoteInputComponent implements OnInit {
  someText: any;
  name: string = '';
  content: string = '';
  author: string = '';

  @Input()
  quotes: Quote[] = [];

  addQuote() {
    this.quotes.push({
      id: this.quotes.length + 1,
      name: this.name,
      content: this.content,
      author: this.content,
      upVotes: 0,
      downVotes: 0,
      lastUpdatedAt: new Date().toISOString(),
    });
  }
  
  constructor() {}

  ngOnInit(): void {
    console.log(this.addQuote);
  }
}