import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gellery',
  templateUrl: './gellery.html',
  styleUrl: './gellery.css',
  standalone: true,
  imports: [CommonModule]
})
export class Gellery {
  modalVisible = false;
  selectedImage: string | null = null;

  showImage(img: string) {
    this.selectedImage = img;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.selectedImage = null;
  }
}
