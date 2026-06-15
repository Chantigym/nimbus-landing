import Container from './ui/Container'
import logo from '../assets/images/logo/logo-placeholder.svg'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Company: [
    { label: 'About us', href: '#top' },
    { label: 'Careers', href: '#top' },
    { label: 'Contact', href: '#top' },
  ],
  Legal: [
    { label: 'Privacy', href: '#top' },
    { label: 'Terms of service', href: '#top' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img src={logo} alt="Nimbus" width="140" height="32" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-neutral-600">
              The platform that brings your metrics, teams, and processes
              together in one place.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} Nimbus. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
