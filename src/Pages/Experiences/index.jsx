import { Layout } from "../../Components/Layout";
import "./Experiences.css";

const experiencies = [
  {
    'date': 'Nov. 2023 - Abr 2024',
    'position': 'Desarrollador Full Stack',
    'company': 'TRUDAN SPA (Kuroro)',
    'description': 'Empresa que destaca con su juego Kuroro Beasts (Juego donde cada participante recibe 7 bestias aleatorias por semana, con la opción de adquirir más. Los jugadores pueden automatizar sus bestias según su estrategia. Para jugar, seleccionan 5 bestias y deben derrotar a las bestias del oponente para ganar).',
    'tasks': [
      "Adapté la aplicación del juego para que se pueda jugar desde el móvil.",
      "Capturé las direcciones IP de cada dispositivo para identificar usuarios con múltiples cuentas.",
      'Agregué nuevas insignias y su otorgación de experiencia (EXP).',
      'Agregué nuevas misiones temporales con otorgación de experiencia (EXP).',
      'Identifiqué y corregí diversos bugs reportados por los usuarios, optimize y refactorice código.'
    ],
    'technologies': [
      'Nest JS', 'React JS', 'Tailwind CSS', 'Chakra UI', 'Postgresql', 'MongoDB', 'C#', '.NET 8', 'Git', 'Linear'
    ]
  },
  {
    'date': 'Jul. 2023 - Oct. 2023',
    'position': 'Desarrollador Full Stack',
    'company': 'Universidad Agraria de la Selva (UNAS)',
    'description': 'Sistema de Gestión de Investigación (SGI-UNAS), una plataforma que alberga investigaciones realizadas en la universidad, gestionando el proceso de evaluación y entrega de resultados. El sistema se estructura en base a la jerarquía facultad-escuela-área-grupo-linea.',
    'tasks': [
      "Modifiqué con éxito la estructura de las investigaciones conforme a los requisitos de la SUNEDU, pasando de la secuencia facultad-escuela-grupo-linea a facultad-escuela-área-grupo-linea, a fin de cumplir con las normativas establecidas.",
      "Implementé índices que optimizaron la automatización de consultas, mejorando la eficiencia en la obtención de datos en las estructuras de 'facultad-area-grupo-linea' y 'facultad-escuela'.",
      'Realicé la refactorización del código y desarrollé métodos específicos para resolver tareas particulares, promoviendo la reutilización del código. Entre estos métodos se incluyen la obtención de escuelas por facultad, la lista de áreas de una facultad, la lista de grupos y líneas de investigación, y la jerarquización de las relaciones padre-hijo en la base de datos.',
      'Actualicé los reportes del sistema según los nuevos requerimientos, como la exportación de datos de Word a Excel y PDF a Excel, además de la inclusión de nuevos campos en los archivos exportables, como área, grupo, línea y escuela profesional.',
    ],
    'technologies': [
      'Laravel', 'Vue Js', 'Ant Design', 'Postgresql', 'Git', 'Asana'
    ]
  },
  {
    'date': 'Febr. 2022- Febr. 2023',
    'position': 'Desarrollador Full Stack',
    'company': 'LWP Developers',
    'description': '',
    'tasks': [
      "Merced Conductiva es una aplicación web encargada de administrar los cobros de deudas de puestos de comerciales.",
      "Desarrolle el modulo de deudas, notificaciones, fraccionamientos, multas, caja, estado de cuentas, reportes.",
      'Participé en reuniones con el jefe de proyecto y los usuarios del sistema.',
      'Diseñé y construí APIs.'
    ],
    'technologies': [
      'PHP', 'Laravel', 'Vue Js', 'JavaScript', 'Ant Design', 'Mysql', 'Git', 'Figma', 'Asana', 'VScode'
    ]
  },
  {
    'date': 'En. 2021 - Nov. 2021',
    'position': 'Desarrollador Full Stack',
    'company': 'Siges Perú',
    'description': '',
    'tasks': [
      "Desarrollé servicios web para soportar funcionalidades de pedidos, carta-menú, ambientes (mesas).",
      "Diseñé y construí APIs.",
    ],
    'technologies': [
      'C#', 'Net Core', 'Angular', 'Angular Material', 'Postgresql', 'Git'
    ]
  }
];

export const Experiences = () => {
  return (
    <Layout>
      <section className="pt-24 pb-12 experiences">
        <h2 className="text-4xl mb-5 font-bold">Experiencias</h2>
        <div className="list-experiencies">
          {
            experiencies.map(({
              date,
              company,
              technologies,
              position,
              tasks,
              description }) => (
                <div key={company} className="flex md:flex-nowrap flex-wrap mb-8">
                  <p className="font-serif italic text-lg date w-80">{date}</p>
                  <div className="w-full">
                    <h3 className="leading-snug uppercase text-base font-bold">{position}</h3>
                    <p className="mb-2 font-medium text-base font-bold company">{company}</p>
                    <p className="mb-2">{description}</p>
                    <div>
                      <ul className="space-y-1 list-disc list-inside">
                        { tasks.map((task) => (<li key={task}>{task}</li>)) }
                      </ul>
                    </div>
                    <div>
                      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                        {
                          technologies.map((technology) => (
                            <li key={technology} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium leading-5 text-black">
                                {technology}
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            )
          }
        </div>
      </section>
    </Layout>
  )
}
