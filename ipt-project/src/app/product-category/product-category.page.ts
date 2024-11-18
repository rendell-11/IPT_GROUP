import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import required Ionic components for standalone usage
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonImg,
    IonCardContent
  ],
})
export class ProductCategoryPage implements OnInit {
  // Sample product data for display
  products = [
    { id: 1, name: 'Product 1', price: '$10.00', image: 'assets/images/product1.webp' },
    { id: 2, name: 'Product 2', price: '$20.00', image: 'assets/images/product2.webp' },
    { id: 3, name: 'Product 3', price: '$15.00', image: 'assets/images/product3.webp' },
    { id: 4, name: 'Product 4', price: '$25.00', image: 'assets/images/product4.webp' },
    { id: 5, name: 'Product 5', price: '$30.00', image: 'assets/images/product5.webp' },
    { id: 6, name: 'Product 6', price: '$35.00', image: 'assets/images/product6.webp' }
  ];

  constructor() {}

  ngOnInit() {}
}
