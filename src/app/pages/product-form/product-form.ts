import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductFormComponent {

  name: string = '';
  price: number = 0;

  onSubmit() {
    console.log('Produto criado:', this.name, this.price);
  }

}