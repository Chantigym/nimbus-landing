import Container from './ui/Container'
import Section from './ui/Section'
import Button from './ui/Button'
import heroImage from '../assets/images/hero/hero-placeholder.svg'

export default function Hero() {
  return (
    <Section id="top" className="pt-12 md:pt-16">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Nuevo · Panel de control en tiempo real
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Gestiona tu negocio sin perder el control
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-neutral-600 md:mx-0 md:text-lg">
            Nimbus centraliza tus métricas, equipos y procesos en un solo lugar
            para que tomes mejores decisiones, más rápido.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button href="#pricing">Comenzar gratis</Button>
            <Button href="#features" variant="secondary">
              Ver características
            </Button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Vista previa del panel de control de Nimbus"
            width="600"
            height="450"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl ring-1 ring-neutral-200"
          />
        </div>
      </Container>
    </Section>
  )
}
