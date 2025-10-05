import { Employee } from '../types';

export const empleados: Employee[] = [
  {
    slug: 'jesus-freites',
    name: 'Jesus Freites',
    title: {
      en: 'Electronic Engineer',
      es: 'Ingeniero Electrónico'
    },
    company: {
      en: 'Solware Agency',
      es: 'Agencia Solware'
    },
    photo: 'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Equipo/Jesus.png',
    email: 'ventas@solware.agency',
    phone: '+58 414 2323332',
    whatsapp: '584120564628',
    linkedin: 'jesus-freites21',
    website: 'solware.agency',
    calendly: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ'
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return empleados.find(emp => emp.slug === slug);
};