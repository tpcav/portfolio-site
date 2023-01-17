const features = [
  { name: 'Material', description: 'Pine wood base' },
  { name: 'Finish', description: 'Hand sanded and finished with walnut wood stain' },
  { name: 'Features', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Form, shape, and materials.' },
]

export default function Example() {
  return (
    <div className="bg-zinc-900 p-10">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Smart Lamp</h2>
          <p className="mt-4 text-gray-500">
            The bulb sits inside of the curved shape, allowing for bounce and fall off of light onto the table and wall. On the other side of the shape, there is a space for books and other items to be placed.
          </p>
          <div className="grid grid-cols-2 grid-rows-1 mt-8 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="./lampHand.png"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="./lampOff.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-200">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
