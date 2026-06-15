const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600',
  secondary:
    'bg-white text-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus-visible:outline-brand-600',
  inverse:
    'bg-white text-brand-700 hover:bg-brand-50 focus-visible:outline-white',
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
