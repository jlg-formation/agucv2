import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    price: new FormControl(1.0, Validators.required),
    qty: new FormControl(100, Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}
}
