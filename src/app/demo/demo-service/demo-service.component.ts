import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.scss'],
  providers: [BookService]
})
export class DemoServiceComponent implements OnInit {

  books: any[];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .then(res => {
        this.books = res.books;
        console.log(this.books);
      });

  }

}
