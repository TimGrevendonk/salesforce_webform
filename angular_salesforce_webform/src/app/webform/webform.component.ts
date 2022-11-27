import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webform',
  templateUrl: './webform.component.html',
  styleUrls: ['./webform.component.css'],
})
export class WebformComponent implements OnInit {
  isSubmitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.isSubmitted = true;
  }
}
