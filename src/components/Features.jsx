import Container from './ui/Container'
import Section from './ui/Section'
import { features } from '../data/features'

export default function Features() {
  return (
    <Section id="features" className="bg-neutral-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Everything your team needs
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Designed so you spend less time configuring tools and more time
            growing your business.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200"
            >
              <img src={feature.icon} alt="" width="48" height="48" className="h-12 w-12" />
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
