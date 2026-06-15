import Container from './ui/Container'
import Section from './ui/Section'
import Button from './ui/Button'

export default function CTA() {
  return (
    <Section className="bg-brand-600">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Empieza a usar Nimbus hoy mismo
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 md:text-lg">
          Prueba todas las funciones durante 14 días, sin tarjeta de crédito y
          sin compromiso.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="#top" variant="inverse">
            Crear cuenta gratis
          </Button>
        </div>
      </Container>
    </Section>
  )
}
