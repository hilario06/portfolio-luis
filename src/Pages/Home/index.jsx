import { Layout } from "../../Components/Layout"
import "./Home.css";
import { SiAngular, SiMongodb, SiGo, SiPython, SiDocker, SiGraphql, SiMicrosoftazure, SiApacheecharts } from 'react-icons/si';
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


// https://seeklogo.com/ + react-icons/si for brands without a local svg
const technologies = [
    { name: 'Go', icon: SiGo },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'Typescript', logo: typescriptLogo},
    { name: 'Angular', icon: SiAngular },
    { name: 'React JS', logo: reactLogo },
    { name: 'Vue JS', logo: vuejsLogo },
    { name: 'Nest', logo: nestLogo},
    { name: 'Node', logo: nodeLogo },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'CSS', logo: cssLogo },
    { name: 'Sass', logo: sassLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Chakra UI', logo: chakraUILogo },
    { name: 'Ant Design', logo: antDesing },
    { name: 'PostgreSQL', logo: pgLogo },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Docker', icon: SiDocker },
    { name: 'Azure', icon: SiMicrosoftazure },
    { name: 'ECharts', icon: SiApacheecharts },
    { name: 'Ruby', logo: rubyLogo },
    { name: 'Rails', logo: railsLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: gitHubLogo },
  ]

export const Home = () => {
  return (
    <Layout>
      <section className="py-24 presentation">
        <h1 className="font-bold text-4xl mb-4"><span>👋</span> Hola, mi nombre es Luis Hilario Huamán.</h1>
        <h2 className="font-serif italic text-2xl">
        Soy un Desarrollador Full Stack de Perú con más de 5 años de experiencia, especializado en la creación de aplicaciones web escalables y de alto rendimiento. Tengo sólidos conocimientos en tecnologías como Angular, React JS, Vue JS, Node y Nest JS, y bases de datos como PostgreSQL y MongoDB. Me enfoco en escribir código limpio y mantenible, aplicando las mejores prácticas de desarrollo y patrones de arquitectura. Estoy entusiasmado por explorar nuevas tecnologías y desafíos para seguir evolucionando como desarrollador. En mi tiempo libre, disfruto jugando al fútbol para mantenerme activo y equilibrado.
        </h2>
      </section>
      <section className="pb-12 technologies">
        <h3 className="uppercase text-base font-bold mb-12">Tecnologías</h3>
        <div className="flex flex-wrap justify-between">
          { technologies.map(({ name, logo, icon: Icon }) => (
              <div key={name} className="pb-4 px-2 flex items-center justify-center" style={{ width: 100, height: 100 }}>
                { logo
                  ? <img src={logo} alt={name} width={100} height={100} />
                  : <Icon title={name} size={70} />
                }
              </div>
            ))
          }
        </div>
      </section>
    </Layout>
  )
}
