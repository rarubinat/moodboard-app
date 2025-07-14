import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moodboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moodboard.component.html',
})
export class MoodboardComponent {
  items = [
    {
      type: 'image',
      content: 'https://source.unsplash.com/random/400x300?sig=1',
      title: 'Random Image'
    },
    {
      type: 'quote',
      content: 'Creativity is intelligence having fun.',
      title: 'Einstein'
    },
    {
      type: 'color',
      content: '#FF6B6B'
    },
    {
      type: 'link',
      content: 'https://dribbble.com/',
      title: 'Dribbble'
    }
  ];
}
