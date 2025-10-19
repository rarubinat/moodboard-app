import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoodboardItem } from '../../models/moodboard-item.model';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../models/moodboard-user.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Output() itemAdded = new EventEmitter<MoodboardItem>();

  // Estado local del formulario
  newItem: MoodboardItem = this.getEmptyItem();

  types: MoodboardItem['type'][] = [
    'idea', 'research', 'design', 'task', 'code', 'test', 'asset', 'note', 'doc',
  ];

  statuses: MoodboardItem['status'][] = [
    'draft', 'in_progress', 'completed', 'pending', 'error', 'archived',
  ];

  subtypesByType: { [key in MoodboardItem['type']]: string[] } = {
    idea: ['concept', 'brainstorm', 'vision'],
    research: ['competitor', 'market', 'technical'],
    design: ['ui', 'ux', 'wireframe', 'prototype'],
    task: ['bug', 'feature', 'refactor', 'maintenance'],
    code: ['frontend', 'backend', 'api', 'script'],
    test: ['unit', 'integration', 'e2e'],
    asset: ['image', 'icon', 'video', 'audio'],
    note: ['meeting', 'summary', 'quick'],
    doc: ['spec', 'guide', 'manual', 'readme'],
  };

  get availableSubtypes(): string[] {
    return this.subtypesByType[this.newItem.type] || [];
  }

  showForm = false;
  isAnimating = false;

  constructor(private authService: AuthService) {}

  openDrawer() {
    this.showForm = true;
    setTimeout(() => (this.isAnimating = true), 10);
  }

  closeDrawer() {
    this.isAnimating = false;
    setTimeout(() => (this.showForm = false), 300);
  }

  submitForm() {
    if (!this.newItem.content.trim()) return;

    const currentUser = this.authService.currentUser;

    const itemToEmit: MoodboardItem = {
      ...this.newItem,
      created_by: currentUser?.id ?? 'unknown',
      creator_role: (currentUser?.role as UserRole) ?? 'guest',
    };

    // Emitir al componente padre
    this.itemAdded.emit(itemToEmit);

    // Resetear formulario
    this.newItem = this.getEmptyItem();

    this.closeDrawer();
  }

  private getEmptyItem(): MoodboardItem {
    return {
      type: 'note',
      content: '',
      title: '',
      status: 'draft',
      subtype: '',
      created_by: '',
      creator_role: undefined,
    };
  }
}
