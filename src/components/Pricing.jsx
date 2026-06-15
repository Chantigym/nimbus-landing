import Container from './ui/Container'
import Section from './ui/Section'
import Button from './ui/Button'
import { pricingPlans } from '../data/pricingPlans'

export default function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Precios simples y transparentes
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Elige el plan que mejor se adapte al tamaño de tu equipo. Cambia o
            cancela cuando quieras.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-brand-600 text-white shadow-xl ring-1 ring-brand-600 md:-translate-y-4'
                  : 'bg-white text-neutral-900 shadow-sm ring-1 ring-neutral-200'
              }`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Más popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  plan.highlighted ? 'text-brand-100' : 'text-neutral-600'
                }`}
              >
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className={plan.highlighted ? 'text-brand-100' : 'text-neutral-600'}>
                    {plan.period}
                  </span>
                )}
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-brand-600'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 111.06-1.06l2.97 2.97 6.97-6.97a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="#top"
                variant={plan.highlighted ? 'inverse' : 'secondary'}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
