import { Layout } from "../../Components/Layout";
import "./Experiences.css";

const experiencies = [
  {
    'date': 'Jul. 2024 - Presente',
    'position': 'Desarrollador Full Stack',
    'company': 'JJSS CONSULTING E.I.R.L.',
    'description': '',
    'projects': {
      'isVariousProjects': true,
      'projects': [
        {
          'name': 'Proyecto - Merch',
          'tasks': [
            'Hice que la página web sea responsive, especialmente para dispositivos móviles.',
            'Implementé filtros dinámicos, en los que cada uno es dependiente del otro, con funcionalidades similares a las de Excel.',
            'Agregué dashboards en la página web usando la librería ECharts.',
            'Añadí las cargas masivas a partir de un Excel con muchos registros, agregando validaciones para cada uno.',
            'Desarrollé la funcionalidad de tomar fotos desde el dispositivo móvil. La compresión se realizó en el frontend para que pudieran enviarse al backend de manera más rápida. Asimismo, las fotografías que toman los usuarios (BDR) se suben a Azure.',
            'Implementé la descarga de los registros a través de archivos Excel.',
            'Implementé la funcionalidad de guardado en IndexedDB cuando no hay Internet. A través de un botón de sincronización, toda la información almacenada en IndexedDB se envía a la base de datos.',
            'Desarrollé un ETL para transferir información de los registros que generan los usuarios dentro de la aplicación web. Los datos se consumen desde Power BI, permitiendo su visualización y comparación mediante gráficos.',
          ],
          'technologies': ['Angular', 'Ant Design', 'Node JS', 'Express', 'Azure', 'MongoDB', 'Echarts', 'xlsx', 'Trello']
        },
        {
          'name': 'Proyecto - Das Excelencia Comercial',
          'tasks': [
            'Colaboré en la migración de Power BI a una aplicación web, que consiste en recopilar información, como el número de ventas, el tiempo de entrega, etc., de los productos BACKUS en todas las cadenas del Perú.',
            'Construí la interfaz de la aplicación web igual a lo que estaba en Power BI y añadiendo que sea responsive.',
            'Desarrollé la gestión de usuarios.',
            'Desarrollé los filtros que se encontraban en Power BI, donde cada filtro era dependiente del otro.',
            'Implementé la descarga de los registros a través de archivos Excel.',
          ],
          'technologies': ['Angular', 'Ant Design', 'Nest JS', 'Fastify', 'PostgreSQL', 'xlsx', 'Trello']
        },
        {
          'name': 'Proyecto - Data Entry',
          'tasks': [
            'Implementé la estructura para la carga masiva desde la aplicación web a Databricks. Esta cuenta con una estructura basada en catálogo, esquema y tabla. Además, cada tabla permite agregar columnas, definir su tipo y aplicar validaciones.',
            'Desarrollé la estructura para agregar tipos de columnas y tipos de validaciones.',
            'Desarrollé la gestión de usuarios.',
            'Agregué validaciones en la carga masiva a Databricks. Las filas del Excel que no pasan las validaciones se muestran en un modal, donde se organizan en tablas paginables de 10 en 10.',
            'Agregué un historial de las fechas en las que se realizaron cargas masivas.',
          ],
          'technologies': ['Angular', 'Ant Design', 'Nest JS', 'Fastify', ' Mongo DB', 'Databricks', 'xlsx', 'Trello']
        },
        {
          'name': 'Proyecto - Zbb',
          'tasks': [
            'Implementé la paginación de Scroll infinito (de 100 en 100) de los gastos de la empresa BACKUS.',
            'Implementé filtros dinámicos en la mayoría de las listas que se muestran en tablas, cada uno es dependiente del otro, con funcionalidades similares a las de Excel.',
            'Desarrollé la gestión de usuarios.',
            'Implementé la descarga de los registros a través de archivos Excel.',
            'Agregué dashboards en la página web usando la librería ECharts.',
            'Añadí las cargas masivas a partir de un Excel con muchos registros, agregando validaciones para cada uno.',
          ],
          'technologies': ['Angular', 'Ant Design', 'Nest JS', 'Fastify', 'PostgreSQL', 'ECharts','xlsx', 'Trello']
        },
      ]
    },
  },
  {
    'date': 'Nov. 2023 - Abr 2024',
    'position': 'Desarrollador Full Stack',
    'company': 'TRUDAN SPA (Kuroro)',
    'description': 'Empresa que destaca con su juego Kuroro Beasts (Juego donde cada participante recibe 7 bestias aleatorias por semana, con la opción de adquirir más. Los jugadores pueden automatizar sus bestias según su estrategia. Para jugar, seleccionan 5 bestias y deben derrotar a las bestias del oponente para ganar).',
    'projects': {
      'isVariousProjects': false,
      'tasks': [
        "Adapté la aplicación del juego para que se pueda jugar desde el móvil.",
        "Capturé las direcciones IP de cada dispositivo para identificar usuarios con múltiples cuentas.",
        'Agregué nuevas insignias y su otorgación de experiencia (EXP).',
        'Agregué nuevas misiones temporales con otorgación de experiencia (EXP).',
        'Identifiqué y corregí diversos bugs reportados por los usuarios, optimize y refactorice código.'
      ],
      'technologies': ['Nest JS', 'React JS', 'Tailwind CSS', 'Chakra UI', 'PostgreSQL', 'MongoDB', 'Git', 'Linear']
    },
  },
  {
    'date': 'Ene. 2023 - Jun. 2023',
    'position': 'Desarrollador Full Stack',
    'company': 'Universidad Nacional Agraria de la Selva (UNAS)',
    'description': 'Sistema de Gestión de Investigación (SGI-UNAS), una plataforma que alberga investigaciones realizadas en la universidad, gestionando el proceso de evaluación y entrega de resultados. El sistema se estructura en base a la jerarquía facultad-escuela-área-grupo-linea.',
    'projects': {
      'isVariousProjects': false,
      'tasks': [
        "Modifiqué con éxito la estructura de las investigaciones conforme a los requisitos de la SUNEDU, pasando de la secuencia facultad-escuela-grupo-linea a facultad-escuela-área-grupo-linea, a fin de cumplir con las normativas establecidas.",
        "Implementé índices que optimizaron la automatización de consultas, mejorando la eficiencia en la obtención de datos en las estructuras de 'facultad-area-grupo-linea' y 'facultad-escuela'.",
        'Realicé la refactorización del código y desarrollé métodos específicos para resolver tareas particulares, promoviendo la reutilización del código. Entre estos métodos se incluyen la obtención de escuelas por facultad, la lista de áreas de una facultad, la lista de grupos y líneas de investigación, y la jerarquización de las relaciones padre-hijo en la base de datos.',
        'Actualicé los reportes del sistema según los nuevos requerimientos, como la exportación de datos de Word a Excel y PDF a Excel, además de la inclusión de nuevos campos en los archivos exportables, como área, grupo, línea y escuela profesional.',
      ],
      'technologies': ['PHP', 'Laravel', 'React Js', 'Ant Design', 'PostgreSQL', 'Git', 'Asana']
    },
  },
  {
    'date': 'Ene. 2022 - Dic. 2022',
    'position': 'Desarrollador Full Stack',
    'company': 'LWP Developers',
    'description': '',
    'projects': {
      'isVariousProjects': false,
      'tasks': [
        "Merced Conductiva es una aplicación web encargada de administrar los cobros de deudas de puestos de comerciales.",
        "Desarrolle el modulo de deudas, notificaciones, fraccionamientos, multas, caja, estado de cuentas, reportes.",
        'Participé en reuniones con el jefe de proyecto y los usuarios del sistema.',
        'Diseñé y construí APIs.'
      ],
      'technologies': ['PHP', 'Laravel', 'Vue Js', 'JavaScript', 'Ant Design', 'Mysql', 'Git', 'Figma', 'Asana', 'VScode']
    },
  },
  {
    'date': 'May. 2021 - Dic. 2021',
    'position': 'Desarrollador Full Stack',
    'company': 'Siges Perú',
    'description': '',
    'projects': {
      'isVariousProjects': false,
      'tasks': [
        "Desarrollé servicios web para soportar funcionalidades de pedidos, carta-menú, ambientes (mesas).",
        "Diseñé y construí APIs.",
      ],
      'technologies': ['C#', 'Net Core', 'Angular', 'Angular Material', 'PostgreSQL', 'Git']
    },
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
              position,
              company,
              description,
              projects }) => (
                <div key={company} className="flex md:flex-nowrap flex-wrap mb-8">
                  <p className="font-serif italic text-lg date w-80">{date}</p>
                  <div className="w-full">
                    <h3 className="leading-snug uppercase text-base font-bold">{position}</h3>
                    <p className="mb-2 font-medium text-base font-bold company">{company}</p>
                    <p className="mb-2">{description}</p>
                    {
                      projects.isVariousProjects ? (
                        projects.projects.map((project) => (
                          <div key={project.name}>
                            <div><b>{project.name}</b></div>
                            <div>
                              <ul className="space-y-1 list-disc list-inside">
                                { project.tasks.map((task) => (<li key={task}>{task}</li>))}
                              </ul>
                            </div>
                            <div className="mb-4">
                              <ul className="flex flex-wrap" aria-label="Technologies used">
                                {
                                  project.technologies.map((technology) => (
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
                        ))
                      ) : (
                        <>
                          <div>
                            <ul className="space-y-1 list-disc list-inside">
                              { projects.tasks.map((task) => (<li key={task}>{task}</li>)) }
                            </ul>
                          </div>
                          <div className="mb-4">
                            <ul className="flex flex-wrap" aria-label="Technologies used">
                              {
                                projects.technologies.map((technology) => (
                                  <li key={technology} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-zinc-200 px-3 py-1 text-sm font-medium leading-5 text-black">
                                      {technology}
                                    </div>
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </>
                      )
                    }
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
