import React from 'react'

const RadialGradientBackground = ({ variant = 'hero', gradients = [] }) => {

  const variants = {
    hero: [
      // {
      //   position: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      //   size: 'w-[1400px] h-[1400px]',
      //   colors: [
      //     { color: 'rgba(141, 255, 105, 0.25)', stop: '0%' },
      //     { color: 'rgba(141, 255, 105, 0.45)', stop: '30%' },
      //     { color: 'rgba(141, 255, 105, 0.5)', stop: '45%' },
      //     { color: 'rgba(141, 255, 105, 0.45)', stop: '60%' },
      //     { color: 'rgba(141, 255, 105, 0.25)', stop: '75%' },
      //   ],
      //   opacity: 0.6,
      // },
      // {
      //   position: 'bottom-0 right-0',
      //   size: 'w-[1400px] h-[1400px]',
      //   colors: [
      //     { color: 'rgba(141, 255, 105, 0.25)', stop: '0%' },
      //     { color: 'rgba(141, 255, 105, 0.45)', stop: '30%' },
      //     { color: 'rgba(141, 255, 105, 0.5)', stop: '45%' },
      //     { color: 'rgba(141, 255, 105, 0.45)', stop: '60%' },
      //     { color: 'rgba(141, 255, 105, 0.25)', stop: '75%' },
      //   ],
      //   opacity: 0.6,
      // },

      {
        position: 'top-0 left-1/2 -translate-x-1/2',
        size: 'w-[1600px] h-[200px]',
        colors: [
          { color: 'rgba(236, 72, 153, 0.35)', stop: '0%' },
          { color: 'rgba(236, 72, 153, 0.25)', stop: '25%' },
          { color: 'rgba(236, 72, 153, 0.15)', stop: '45%' },
          { color: 'rgba(236, 72, 153, 0.08)', stop: '60%' },
        ],
        opacity: 0.7,
      }

    ],
  }

  const activeGradents =
    variant === 'custom' ? gradients : variants[variant] || variants.hero

  const generateGradient = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(', ')

    return `radial-gradient(circle at center, ${colorStops}, transparent 85%, transparent 100%)`
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradents.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: 'blur(120px)',
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  )

}

export default RadialGradientBackground
