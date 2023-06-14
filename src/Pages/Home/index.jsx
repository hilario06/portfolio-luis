import { Layout } from "../../Components/Layout"
import "./Home.css";
import jsLogo from '/javascript.svg';
import reactLogo from '/react.svg';
import vuejsLogo from '/vuejs.svg';
import typescriptLogo from '/typescript.svg';
import cssLogo from '/css.svg';
import sassLogo from '/sass.svg';
import tailwindLogo from '/tailwind.svg';
import chakraUILogo from '/chakra.svg';
import antDesing from '/ant-design.svg';
import nodeLogo from '/nodejs.svg';
import rubyLogo from '/ruby.svg';
import railsLogo from '/rails.svg';
import nestLogo from '/nestjs.svg';
import pgLogo from '/postgresql.svg';
import mysqlLogo from '/mysql.svg';
import gitLogo from '/git.svg';
import gitHubLogo from '/github.svg';


// https://seeklogo.com/
const technologies = [
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Typescript', logo: typescriptLogo},
    { name: 'React JS', logo: reactLogo },
    { name: 'Vue JS', logo: vuejsLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Sass', logo: sassLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Chakra UI', logo: chakraUILogo },
    { name: 'Ant Design', logo: antDesing },
    { name: 'Node', logo: nodeLogo },
    { name: 'Ruby', logo: rubyLogo },
    { name: 'Rails', logo: railsLogo },
    { name: 'Nest', logo: nestLogo},
    { name: 'PostgreSQL', logo: pgLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: gitHubLogo },
  ]

export const Home = () => {
  return (
    <Layout>
      <section className="py-24 presentation">
        <h1 className="font-bold text-4xl mb-4">👋 Hola, mi nombre es Luis Hilario Huamán.</h1>
        <h2 className="font-serif italic text-2xl">
          Soy un desarrollador web de Chanchamayo - Perú, y actualmente formo parte del equipo de Drupvon como Full Stack Developer. En mi tiempo libre, disfruto jugando al fútbol para mantenerme activo y equilibrado. Además, soy un apasionado del aprendizaje continuo y siempre busco cursos y recursos relacionados con el desarrollo web para ampliar mis habilidades. Mis herramientas preferidas son Ruby y Ruby on Rails para el backend, y JavaScript y React para el frontend. Estoy entusiasmado por explorar nuevas tecnologías y desafíos para seguir evolucionando como desarrollador.
        </h2>
      </section>
      <section className="pb-12 technologies">
        <h3 className="uppercase text-base font-bold mb-12">Tecnologías</h3>
        <div className="flex flex-wrap justify-between">
          { technologies.map(({ name, logo }) => (
              <div key={name} className="pb-4 px-2">
                <img src={logo} alt={name} width={100} height={100} />
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}
