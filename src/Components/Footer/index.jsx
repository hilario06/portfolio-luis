import { Layout } from "../Layout"
import "./Footer.css";

export const Footer = () => {
  return (
    <Layout>
      <footer className="py-12 footer">
        <h2 className="uppercase text-base mb-12 font-bold text-accent">CONÉCTATE CONMIGO</h2>
        <ul className="grid gap-4">
          {/* <li>
            <a className="font-serif text-lg opacity-80 hover:opacity-100 underline" href="https://twitter.com/hilario06" target="_blank" rel="noreferrer">Twitter</a>
          </li> */}
          <li>
            <a className="font-serif text-lg opacity-80 hover:opacity-100 underline" href="https://github.com/hilario06" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a className="font-serif text-lg opacity-80 hover:opacity-100 underline" href="https://www.linkedin.com/in/luis-hilario-huaman/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="font-serif text-lg opacity-80 hover:opacity-100 underline" href="mailto:hilario.huaman.6@gmail.com?subject=Email from your website" target="_blank" rel="noreferrer">Email</a>
          </li>
        </ul>
      </footer>
    </Layout>
  )
}
