import Container from './ui/Container'
import Section from './ui/Section'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-neutral-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Equipos que ya confían en Nimbus
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Cientos de empresas usan Nimbus para simplificar su día a día.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200"
            >
              <blockquote className="flex-1 text-sm text-neutral-600">
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt=""
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-600">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
