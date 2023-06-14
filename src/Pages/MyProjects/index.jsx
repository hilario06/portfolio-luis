import { Carousel } from "../../Components/Carousel";
import { Layout } from "../../Components/Layout";
import "./MyProjects.css";

export const MyProjects = () => {
  const projects = [
    {
      title: 'Tienda Virtual',
      name: 'store',
      slides: [ 1, 2, 3, 4, 5, 6, 7 ],
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
      description: "Plataforma web que ofrece una amplia variedad de productos para compras en línea. Explorar cómodamente a través de distintas categorías, añade artículos al carrito y crea una lista personalizada de tus productos favoritos. Además, podrás dejar comentarios y valoraciones a los productos. Si eres administrador, tendrás la posibilidad de gestionar eficientemente el inventario, creando, editando y eliminando productos y categorías según tus necesidades.",
      urlGitHub: 'https://github.com/hilario06/tienda',
      UrlDocumentation: '',
    },
    {
      title: 'Digi Grafikka',
      name: 'digi-grafikka',
      slides: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      technologies: ['Ruby on Rails', 'PostgreSQL', 'Bootstrap', 'Trello', 'Cloudinary', 'Stimulus'],
      description: "Es una plataforma para diseñadores donde muestran su talento y comparten sus increíbles trabajos, si te gusta un diseño en particular puedes expresar tu aprecio dándole un 'me gusta', dejar un comentario con respecto a sus trabajos, seguir a los diseñadores cuyo trabajo te inspire y te fascine, chat en vivo con el diseñador. Y Si eres un diseñador nuevo que busca mostrar su talento, puedes registrarte.",
      urlGitHub: 'https://github.com/hilario06/digi-grafikka',
      UrlDocumentation: ''
    },
    {
      title: 'Disney - Api',
      name: '',
      slides: [],
      technologies: ['Ruby on Rails', 'PostgreSQL'],
      description: "Esta API ayuda explorar el mundo de Disney, la cual permitirá conocer y modificar los personajes  que lo componen este universo, así como obtener información sobre las películas en las que participarón.",
      urlGitHub: 'https://github.com/hilario06/movies-disney-api',
      UrlDocumentation: 'https://documenter.getpostman.com/view/16069434/UzQys4iG'
    },
    {
      title: 'Stimulus Gifs',
      name: 'stimulus-gifs',
      slides: [ 1, 2 ],
      technologies: ['Javascript', 'Stimulus', 'Giphy API'],
      description: "",
      urlGitHub: 'https://github.com/hilario06/stimulus-gifs',
      UrlDocumentation: '',
    }
  ]

  return (
    <Layout>
      <section className="pt-24 pb-12 experiences title-projects">
        <h2 className="text-4xl mb-4 font-bold">Proyectos</h2>
        <h3 className="font-serif italic text-2xl max-w-[820px]">
        </h3>
      </section>
      {
        projects.map((project) => (
          <section className="pb-12 list-technologies" key={ project.name }>
            <h3 className="uppercase text-base font-bold mb-2">
              { project.title }
              <a
                href={ project.urlGitHub }
                target="_blank"
                className="ml-3"
                rel="noreferrer">
                <img src="/github2.svg" alt="" className="inline-block" width={40}/>
              </a>
            </h3>
            <p className="font-serif italic text-lg mb-2 description">{ project.description }</p>
            <ul className="flex flex-wrap mb-2" aria-label="Technologies used">
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
            {
              project.UrlDocumentation && (
                <p className="font-serif italic text-lg mb-2">
                  <a
                    href={ project.UrlDocumentation }
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-600 underline">Documentación</a>
                </p>
              )
            }
            <div>
              <Carousel>
                {
                  project.slides.map((item) => (
                    <img
                      src={`assets/${project.name}-${item}.png`}
                      key={item}
                      className="object-contain"
                    />
                  ))
                }
              </Carousel>
            </div>
          </section>
        ))
      }
    </Layout>
  )
}
