export interface MoodboardItem {
  id?: string;                     // UUID del item (Supabase lo genera)
  type:
    | 'idea'
    | 'research'
    | 'design'
    | 'task'
    | 'code'
    | 'test'
    | 'asset'
    | 'note'
    | 'doc';
  title?: string;                  // Título opcional para mejor legibilidad
  content: string;                 // Contenido principal del item
  subtype?: string;                // Categoría más específica si aplica
  status?: 'draft' | 'in_progress' | 'completed' | 'pending' | 'error' | 'archived';
  //ownerId?: string;                // UUID del usuario responsable (Owner)
  //createdById?: string;            // UUID del usuario que creó el item (Contributor)
  created_at?: string;             // Timestamp de creación (Supabase lo genera)
  updated_at?: string;             // Timestamp de última actualización
}