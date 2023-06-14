import { Layout } from "../../Components/Layout";
import "./Experiences.css";

const experiencies = [
  {
    'date': 'Jun. 2022 - Actualidad',
    'position': 'Desarrollador Full Stack',
    'company': 'Drupvon',
    'description': '',
    'tasks': [
      "Desarrolle la aplicación 'Find Me' de anuncios de servicios.",
      "Utilice el patrón de diseño 'Service Object', Rspec para pruebas unitarias bajo el patrón TDD.",
      'Usé Chakra-ui para las interfaces gráficas.',
      'Implementé técnicas de principios SOLID y Clean Code.'
    ],
    'technologies': [
      'Ruby', 'React JS', 'JavaScript', 'Chakra UI', 'PostgreSQL', 'Git', 'GitHub', 'Asana'
    ]
  },
  {
    'date': 'Febr. 2020 - febr. 2021',
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
      'PHP', 'Laravel', 'React Js', 'JavaScript', 'Ant Design', 'Mysql', 'Git', 'Figma', 'Asana', 'VScode'
    ]
  },
  {
    'date': 'Jun. 2019 - sept. 2019',
    'position': 'Desarrollador Full Stack',
    'company': 'Siges Perú',
    'description': '',
    'tasks': [
      "Desarrollé servicios web para soportar funcionalidades de pedidos, carta-menú, ambientes (mesas).",
      "Diseñé y construí APIs.",
    ],
    'technologies': [
      'PHP', 'Laravel', 'Angular', 'Angular Material', 'Postgresql', 'Git'
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
                    <p>{description}</p>
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
