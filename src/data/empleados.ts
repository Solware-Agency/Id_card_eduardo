import { Employee } from '../types';

export const empleados: Employee[] = [
  {
    slug: 'eduardo-padilla',
    name: 'Eduardo Padilla',
    title: {
      en: 'Filmmaker',
      es: 'Filmmaker'
    },
    company: {
      en: 'Solware Agency',
      es: 'Agencia Solware'
    },
    photo: 'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Equipo/eduardo.jpeg',
    email: 'ventas@solware.agency',
    phone: '+584122499554',
    whatsapp: '584122499554',
    linkedin: 'eduardo-padilla',
    website: 'solware.agency',
    calendly: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ'
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return empleados.find(emp => emp.slug === slug);
};