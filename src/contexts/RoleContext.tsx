import React, { createContext, useContext, useMemo, useState } from 'react';

export type Persona = 'student' | 'representative' | 'organization' | 'institution' | 'platform';

export interface PersonaProfile {
  id: Persona;
  label: string;
  role: string;
  scope: string;
  permissions: string[];
}

export const personas: PersonaProfile[] = [
{
  id: 'student',
  label: 'Student',
  role: 'Student',
  scope: 'Sabaragamuwa University',
  permissions: ['create_post', 'join_community', 'save_resource', 'register_event']
},
{
  id: 'representative',
  label: 'Student representative',
  role: 'Representative',
  scope: 'SE 2026 Batch',
  permissions: ['create_post', 'create_announcement', 'create_event', 'join_community']
},
{
  id: 'organization',
  label: 'Club / society admin',
  role: 'Organization admin',
  scope: 'Computing Society',
  permissions: ['create_post', 'create_event', 'manage_members', 'upload_resource']
},
{
  id: 'institution',
  label: 'Institution admin',
  role: 'Institution admin',
  scope: 'Sabaragamuwa University',
  permissions: [
  'create_announcement',
  'create_event',
  'verify_users',
  'approve_organization',
  'moderate_content',
  'manage_workspace',
  'view_analytics']

},
{
  id: 'platform',
  label: 'Super administrator',
  role: 'Super admin',
  scope: 'Entire platform',
  permissions: [
  'manage_platform',
  'manage_institutions',
  'manage_roles',
  'moderate_content',
  'manage_workspace',
  'view_analytics',
  'create_announcement']

}];


interface RoleContextValue {
  persona: PersonaProfile;
  setPersona: (id: Persona) => void;
  can: (permission: string) => boolean;
}

const RoleContext = createContext<RoleContextValue>({
  persona: personas[0],
  setPersona: () => {},
  can: () => false
});

export function RoleProvider({ children }: {children: React.ReactNode;}) {
  const [id, setId] = useState<Persona>('student');

  const value = useMemo<RoleContextValue>(() => {
    const persona = personas.find((item) => item.id === id) ?? personas[0];
    return {
      persona,
      setPersona: setId,
      can: (permission: string) => persona.permissions.includes(permission)
    };
  }, [id]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole(): RoleContextValue {
  return useContext(RoleContext);
}