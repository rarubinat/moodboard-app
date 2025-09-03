export type UserRole = 'contributor' | 'owner' | 'reviewer' | 'maintainer';

export interface User {
  id?: string;             // UUID generado por Supabase
  email: string;           // Email único del usuario
  password?: string;       // ⚠️ Usar solo en cliente para signup (NO guardar plano en DB)
  hashed_password?: string;// Guardar en DB (Supabase puede gestionarlo)
  name?: string;           // Nombre opcional
  role: UserRole;          // Rol en el board
  created_at?: string;     // Fecha de creación (autogenerada en Supabase)
}