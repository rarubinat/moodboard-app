export interface MoodboardItem {
  type:
    | 'image'
    | 'color'
    | 'quote'
    | 'link'
    | 'font'
    | 'component'
    | 'code'
    | 'tool'
    | 'video'
    | 'text';
  content: string;
  title?: string;
  status?: 'available' | 'in_progress' | 'completed' | 'pending' | 'error' | 'archived';

}
