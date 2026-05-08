import { Icon, Button, IconButton } from '@/SvsUiNova/components';

// Example: Using the Icon System

export function IconExamples() {
  return (
    <div className="p-8 space-y-8">
      {/* Basic Icons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Basic Icons</h2>
        <div className="flex gap-4 items-center">
          <Icon name="shopping-cart" />
          <Icon name="video-play" size={32} />
          <Icon name="flag" className="text-red-600" size={48} />
        </div>
      </section>

      {/* Icons in Buttons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Icons in Buttons</h2>
        <div className="flex gap-4">
          <Button icon={<Icon name="shopping-cart" size={20} />}>
            Add to Cart
          </Button>

          <Button
            variant="secondary"
            icon={<Icon name="video-play" size={20} />}
            iconPosition="right"
          >
            Watch Video
          </Button>
        </div>
      </section>

      {/* Icon Buttons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Icon Buttons</h2>
        <div className="flex gap-4">
          <IconButton
            icon={<Icon name="shopping-cart" size={16} />}
            aria-label="Shopping cart"
            variant="primary"
          />

          <IconButton
            icon={<Icon name="video-play" size={16} />}
            aria-label="Play video"
            variant="secondary"
          />

          <IconButton
            icon={<Icon name="flag" size={16} />}
            aria-label="Flag content"
            variant="ghost"
          />
        </div>
      </section>

      {/* Colored Icons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Colored Icons</h2>
        <div className="flex gap-4">
          <Icon name="minus" className="text-blue-600" size={32} />
          <Icon name="shopping-cart" className="text-green-600" size={32} />
          <Icon name="video-play" className="text-red-600" size={32} />
          <Icon name="flag" className="text-yellow-600" size={32} />
        </div>
      </section>

      {/* Interactive Icons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Interactive Icons</h2>
        <div className="flex gap-4">
          <Icon
            name="shopping-cart"
            size={32}
            className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => alert('Cart clicked!')}
          />

          <Icon
            name="flag"
            size={32}
            className="cursor-pointer text-gray-600 hover:text-red-600 transition-colors"
            onClick={() => alert('Flagged!')}
          />
        </div>
      </section>

      {/* Responsive Icons */}
      <section>
        <h2 className="text-xl font-medium mb-4">Responsive Icons</h2>
        <Icon
          name="shopping-cart"
          className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-blue-600"
        />
      </section>
    </div>
  );
}

// TypeScript autocomplete example
function iconWithAutocomplete() {
  // Type this in your editor to see autocomplete for all 329 icon names:
  const iconName = 'shopping-cart'; // Try typing here - you'll get suggestions!

  return <Icon name={iconName} />;
}
