import Container from './ui/Container'
import Section from './ui/Section'
import Button from './ui/Button'

export default function CTA() {
  return (
    <Section className="bg-brand-600">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Start using Nimbus today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-100 md:text-lg">
          Try every feature for 14 days, no credit card required and no
          commitment.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="#top" variant="inverse">
            Create free account
          </Button>
        </div>
      </Container>
    </Section>
  )
}
