export interface MoodboardItem {
  type:
    | 'idea'       // Conceptos o propuestas iniciales
    | 'research'   // Referencias, benchmarks, investigaciones
    | 'design'     // Diseño visual, mockups, wireframes
    | 'task'       // Acción concreta a realizar
    | 'code'       // Fragmentos o referencias de código
    | 'test'       // Casos de prueba o validaciones
    | 'asset'      // Recursos gráficos, imágenes, fuentes, etc.
    | 'note'       // Apuntes rápidos o aclaraciones
    | 'doc';       // Documentación formal o estructurada
  content: string;
  title?: string;
  status?: 'draft' | 'in_progress' | 'completed' | 'pending' | 'error' | 'archived';
  subtype?: string;
}
