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
            New · Real-time dashboard
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Run your business without losing control
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-neutral-600 md:mx-0 md:text-lg">
            Nimbus brings your metrics, teams, and processes together in one
            place so you can make better decisions, faster.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <Button href="#pricing">Get started for free</Button>
            <Button href="#features" variant="secondary">
              See features
            </Button>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="Preview of the Nimbus dashboard"
            width="600"
            height="450"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl ring-1 ring-neutral-200"
          />
        </div>
      </Container>
    </Section>
  )
}
