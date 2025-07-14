import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MoodboardItem {
  type: 'image' | 'color' | 'quote' | 'link';
  content: string;
  title?: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output() itemAdded = new EventEmitter<MoodboardItem>();

  newItem: MoodboardItem = {
    type: 'image',
    content: '',
    title: '',
  };

  submitForm() {
    if (!this.newItem.content.trim()) return;

    this.itemAdded.emit({ ...this.newItem });

    this.newItem = { type: 'image', content: '', title: '' };
  }
}
