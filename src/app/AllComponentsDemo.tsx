import { useState } from 'react';
import {
  // Layout
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Separator,
  // Buttons
  Button,
  IconButton,
  // Forms
  Input, Checkbox, Select, RadioGroup, Switch, Slider, DatePicker,
  // Data Display
  Badge, Avatar, Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  // Navigation
  Tabs, TabsMenu, ToggleGroup,
  // Feedback
  Snackbar, Callout, Tooltip,
  // Overlays
  Dialog, DialogFooter, Popover, BottomSheet,
  // Disclosure
  Accordion,
  // Specialized
  FloatingActionBar, Progress, Skeleton, Spinner,
  // Icons
  Information,
  Icon,
  // Branding
  SvenskaSpelLogoHorizontalTwoRows,
  SvenskaSpelLogoHorizontal,
  SvenskaSpelLogoVertical,
  SvenskaSpelLogoLayered,
  SvenskaSpelCube,
} from '@/SvsUiNova/components';

// Brand imports - Sport & Casino
import * as SportCasinoLogos from '@/SvsUiNova/brands/sport-casino/logos';
import * as SportCasinoIcons from '@/SvsUiNova/brands/sport-casino/icons';
import * as SportCasinoCubes from '@/SvsUiNova/brands/sport-casino/cubes';

// Brand imports - Tur
import * as TurLogos from '@/SvsUiNova/brands/tur/logos';
import * as TurIcons from '@/SvsUiNova/brands/tur/icons';
import * as TurCubes from '@/SvsUiNova/brands/tur/cubes';
import Form from '../imports/Form/Form';
import CalendarImport from '../imports/Calendar/Calendar';
import Basket from '../imports/Basket/Basket';
import { SE } from 'country-flag-icons/react/3x2';
import { NO } from 'country-flag-icons/react/3x2';
import { DK } from 'country-flag-icons/react/3x2';
import { Plus, ArrowRight } from 'lucide-react';
import { IconShowcase } from './components/IconShowcase';

export default function AllComponentsDemo() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMobileOpen, setDialogMobileOpen] = useState(false);
  const [dialogScrollableOpen, setDialogScrollableOpen] = useState(false);
  const [dialogScrollableMobileOpen, setDialogScrollableMobileOpen] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarVariant, setSnackbarVariant] = useState<'default' | 'success' | 'warning' | 'error'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarAction, setSnackbarAction] = useState<React.ReactNode | undefined>(undefined);
  const [sliderValue, setSliderValue] = useState(50);
  const [progressValue, setProgressValue] = useState(65);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [durationOption, setDurationOption] = useState('weeks');
  const [selectedDate, setSelectedDate] = useState('');

  // Brand selection state - global variant selector
  // Default to variants with dark text on light background
  const [sportCasinoGlobalVariant, setSportCasinoGlobalVariant] = useState('Primary');
  const [turGlobalVariant, setTurGlobalVariant] = useState('Primary');
  const [svenskaSpelLogoVariant, setSvenskaSpelLogoVariant] = useState('Horizontal');

  // Button controls
  const [showLeadingIcon, setShowLeadingIcon] = useState(false);
  const [showTrailingIcon, setShowTrailingIcon] = useState(false);

  // Get brand component lists
  const sportCasinoLogos = Object.entries(SportCasinoLogos).filter(([key]) => !key.includes('Props'));
  const sportCasinoIcons = Object.entries(SportCasinoIcons).filter(([key]) => !key.includes('Props'));
  const sportCasinoCubes = Object.entries(SportCasinoCubes).filter(([key]) => !key.includes('Props'));
  const turLogos = Object.entries(TurLogos).filter(([key]) => !key.includes('Props'));
  const turIcons = Object.entries(TurIcons).filter(([key]) => !key.includes('Props'));
  const turCubes = Object.entries(TurCubes).filter(([key]) => !key.includes('Props'));

  // Helper function to extract product name and variant from component name
  const parseLogoName = (name: string) => {
    // Known variant keywords that should be part of the variant, not the product name
    // Order matters - check "Textonly" before "Primary" etc
    const variantKeywords = ['TextonlyInverted', 'TextonlyPrimary', 'Textonly', 'Primary', 'Inverted', 'Onprimary', 'Secondary', 'Detailed', 'Stacked', 'Tagline', 'Negative', 'TextOnly'];

    // Find where the variant starts - use the FIRST matching keyword
    let product = name;
    let variant = 'Default';
    let earliestMatch = name.length;
    let matchedKeyword = '';

    // Find the earliest occurring variant keyword
    variantKeywords.forEach(keyword => {
      const index = name.indexOf(keyword);
      if (index !== -1 && index < earliestMatch) {
        earliestMatch = index;
        matchedKeyword = keyword;
      }
    });

    if (matchedKeyword) {
      product = name.substring(0, earliestMatch);
      variant = name.substring(earliestMatch);
    }

    // Clean up variant names (add spaces before capital letters)
    variant = variant
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/\s+/g, ' ');

    return { product, variant };
  };

  // Group logos by product
  const groupLogosByProduct = (logos: [string, any][]) => {
    const grouped: Record<string, { name: string; variant: string; component: any }[]> = {};

    logos.forEach(([name, component]) => {
      const { product, variant } = parseLogoName(name);
      if (!grouped[product]) {
        grouped[product] = [];
      }
      grouped[product].push({ name, variant, component });
    });

    return grouped;
  };

  // Group icons by product (remove "Icon" suffix)
  const groupIconsByProduct = (icons: [string, any][]) => {
    const grouped: Record<string, any> = {};
    icons.forEach(([name, component]) => {
      const product = name.replace(/Icon$/, '');
      grouped[product] = component;
    });
    return grouped;
  };

  // Group cubes by product (remove "Cube" or "CubeSoc" prefix)
  const groupCubesByProduct = (cubes: [string, any][]) => {
    const grouped: Record<string, any> = {};
    cubes.forEach(([name, component]) => {
      const product = name.replace(/^CubeSoc/, '').replace(/^Cube/, '');
      grouped[product] = component;
    });
    return grouped;
  };

  const sportCasinoLogosByProduct = groupLogosByProduct(sportCasinoLogos);
  const sportCasinoIconsByProduct = groupIconsByProduct(sportCasinoIcons);
  const sportCasinoCubesByProduct = groupCubesByProduct(sportCasinoCubes);
  const turLogosByProduct = groupLogosByProduct(turLogos);
  const turIconsByProduct = groupIconsByProduct(turIcons);
  const turCubesByProduct = groupCubesByProduct(turCubes);

  const sportCasinoProducts = Object.keys(sportCasinoLogosByProduct).sort();
  const sportCasinoIconProducts = Object.keys(sportCasinoIconsByProduct).sort();
  const sportCasinoCubeProducts = Object.keys(sportCasinoCubesByProduct).sort();
  const turProducts = Object.keys(turLogosByProduct).sort();
  const turIconProducts = Object.keys(turIconsByProduct).sort();
  const turCubeProducts = Object.keys(turCubesByProduct).sort();

  // Get all available variants across all products
  const getAllVariants = (logosByProduct: Record<string, { variant: string }[]>) => {
    const variantsSet = new Set<string>();
    Object.values(logosByProduct).forEach((variants) => {
      variants.forEach((v) => variantsSet.add(v.variant));
    });
    // Filter out "Default" if it's not a real variant name, and sort
    return Array.from(variantsSet)
      .filter((v) => v !== 'Default')
      .sort((a, b) => {
        // Put "Primary" first, then "Inverted", then others alphabetically
        if (a === 'Primary') return -1;
        if (b === 'Primary') return 1;
        if (a === 'Inverted') return -1;
        if (b === 'Inverted') return 1;
        return a.localeCompare(b);
      });
  };

  const sportCasinoAvailableVariants = getAllVariants(sportCasinoLogosByProduct);
  const turAvailableVariants = getAllVariants(turLogosByProduct);

  // Helper to check if variant name includes "inverted"
  const isInvertedVariant = (variant: string) => {
    return variant.toLowerCase().includes('inverted');
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Logo in top left corner */}
      <div className="px-8 pt-8 pb-4">
        <SvenskaSpelLogoHorizontalTwoRows
          className="h-16"
          aria-label="Svenska Spel"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4 font-['Svenska_Spel_Arena_Pro',sans-serif] text-5xl uppercase">SVS UI (NOVA)</h1>
          <p className="text-muted-foreground text-lg">
            27 komponenter + 205 brand-assets för Sport & Casino och Tur
          </p>
        </div>

        <Separator />

        {/* Main Navigation Tabs */}
        <TabsMenu
          items={[
            {
              label: 'Komponenter',
              content: (
                <div className="space-y-16">
                  {/* Buttons & Actions */}
        <section className="space-y-6">
          <h2>Buttons & Actions</h2>

          {/* Button Variants */}
          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Alla knappstilar med interaktiva lägen</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 md:p-6">
              {/* Icon Controls */}
              <div className="flex gap-6">
                <Switch
                  label="Leading Icon"
                  checked={showLeadingIcon}
                  onChange={(e) => {
                    setShowLeadingIcon(e.target.checked);
                    if (e.target.checked && showTrailingIcon) {
                      setShowTrailingIcon(false);
                    }
                  }}
                />
                <Switch
                  label="Trailing Icon"
                  checked={showTrailingIcon}
                  onChange={(e) => {
                    setShowTrailingIcon(e.target.checked);
                    if (e.target.checked && showLeadingIcon) {
                      setShowLeadingIcon(false);
                    }
                  }}
                />
              </div>

              <Tabs
                className="inline-block"
                items={[
                  {
                    label: 'Small',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="small"
                          variant="primary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Primary
                        </Button>
                        <Button
                          size="small"
                          variant="secondary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Secondary
                        </Button>
                        <Button
                          size="small"
                          variant="neutral"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Neutral
                        </Button>
                        <Button
                          size="small"
                          variant="outline"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Outline
                        </Button>
                        <Button
                          size="small"
                          variant="ghost"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Ghost
                        </Button>
                        <Button
                          size="small"
                          variant="link"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Link
                        </Button>
                        <Button
                          size="small"
                          variant="destructive"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Destructive
                        </Button>
                      </div>
                    ),
                  },
                  {
                    label: 'Medium',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="medium"
                          variant="primary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Primary
                        </Button>
                        <Button
                          size="medium"
                          variant="secondary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Secondary
                        </Button>
                        <Button
                          size="medium"
                          variant="neutral"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Neutral
                        </Button>
                        <Button
                          size="medium"
                          variant="outline"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Outline
                        </Button>
                        <Button
                          size="medium"
                          variant="ghost"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Ghost
                        </Button>
                        <Button
                          size="medium"
                          variant="link"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Link
                        </Button>
                        <Button
                          size="medium"
                          variant="destructive"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-4 h-4" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Destructive
                        </Button>
                      </div>
                    ),
                  },
                  {
                    label: 'Large',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="large"
                          variant="primary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Primary
                        </Button>
                        <Button
                          size="large"
                          variant="secondary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Secondary
                        </Button>
                        <Button
                          size="large"
                          variant="neutral"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Neutral
                        </Button>
                        <Button
                          size="large"
                          variant="outline"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Outline
                        </Button>
                        <Button
                          size="large"
                          variant="ghost"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Ghost
                        </Button>
                        <Button
                          size="large"
                          variant="link"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Link
                        </Button>
                        <Button
                          size="large"
                          variant="destructive"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-5 h-5" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Destructive
                        </Button>
                      </div>
                    ),
                  },
                  {
                    label: 'XLarge',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="xlarge"
                          variant="primary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Primary
                        </Button>
                        <Button
                          size="xlarge"
                          variant="secondary"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Secondary
                        </Button>
                        <Button
                          size="xlarge"
                          variant="neutral"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Neutral
                        </Button>
                        <Button
                          size="xlarge"
                          variant="outline"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Outline
                        </Button>
                        <Button
                          size="xlarge"
                          variant="ghost"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Ghost
                        </Button>
                        <Button
                          size="xlarge"
                          variant="link"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Link
                        </Button>
                        <Button
                          size="xlarge"
                          variant="destructive"
                          icon={showLeadingIcon || showTrailingIcon ? <Plus className="w-6 h-6" /> : undefined}
                          iconPosition={showTrailingIcon ? 'right' : 'left'}
                        >
                          Destructive
                        </Button>
                      </div>
                    ),
                  },
                ]}
              />
            </CardContent>
          </Card>

          {/* Icon Buttons */}
          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Icon Buttons</CardTitle>
              <CardDescription>Kvadratiska knappar med endast ikoner</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 md:p-6">
              <Tabs
                className="inline-block"
                items={[
                  {
                    label: 'XS',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <IconButton
                          size="xs"
                          variant="primary"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Primary"
                        />
                        <IconButton
                          size="xs"
                          variant="secondary"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Secondary"
                        />
                        <IconButton
                          size="xs"
                          variant="neutral"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Neutral"
                        />
                        <IconButton
                          size="xs"
                          variant="outline"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Outline"
                        />
                        <IconButton
                          size="xs"
                          variant="ghost"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Ghost"
                        />
                        <IconButton
                          size="xs"
                          variant="link"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Link"
                        />
                        <IconButton
                          size="xs"
                          variant="destructive"
                          icon={<Plus className="w-3 h-3" />}
                          aria-label="Destructive"
                        />
                      </div>
                    ),
                  },
                  {
                    label: 'Small',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <IconButton
                          size="small"
                          variant="primary"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Primary"
                        />
                        <IconButton
                          size="small"
                          variant="secondary"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Secondary"
                        />
                        <IconButton
                          size="small"
                          variant="neutral"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Neutral"
                        />
                        <IconButton
                          size="small"
                          variant="outline"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Outline"
                        />
                        <IconButton
                          size="small"
                          variant="ghost"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Ghost"
                        />
                        <IconButton
                          size="small"
                          variant="link"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Link"
                        />
                        <IconButton
                          size="small"
                          variant="destructive"
                          icon={<Plus className="w-4 h-4" />}
                          aria-label="Destructive"
                        />
                      </div>
                    ),
                  },
                  {
                    label: 'Medium',
                    content: (
                      <div className="flex flex-wrap gap-3">
                        <IconButton
                          size="medium"
                          variant="primary"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Primary"
                        />
                        <IconButton
                          size="medium"
                          variant="secondary"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Secondary"
                        />
                        <IconButton
                          size="medium"
                          variant="neutral"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Neutral"
                        />
                        <IconButton
                          size="medium"
                          variant="outline"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Outline"
                        />
                        <IconButton
                          size="medium"
                          variant="ghost"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Ghost"
                        />
                        <IconButton
                          size="medium"
                          variant="link"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Link"
                        />
                        <IconButton
                          size="medium"
                          variant="destructive"
                          icon={<Plus className="w-5 h-5" />}
                          aria-label="Destructive"
                        />
                      </div>
                    ),
                  },
                ]}
              />
            </CardContent>
          </Card>
        </section>

        {/* Form Components */}
        <section className="space-y-6">
          <h2>Form Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Inputs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:p-6">
                <Input label="Email" type="email" placeholder="din@email.com" />
                <Input label="Lösenord" type="password" />
                <Input label="Fel" error helperText="Detta fält krävs" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle className="text-2xl">Form</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
                <Form />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
              <Tabs
                items={[
                  {
                    label: 'Default',
                    content: (
                      <div className="pt-4">
                        <div className="bg-white p-4 rounded-lg border border-[rgba(40,3,1,0.16)] inline-block">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between w-[252px]">
                              <button className="p-2 hover:bg-gray-100 rounded">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M10 12L6 8L10 4" stroke="#1B1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[16px] leading-[24px] text-[#1b1918]">Oktober 2025</p>
                              <button className="p-2 hover:bg-gray-100 rounded">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M6 4L10 8L6 12" stroke="#1B1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </div>
                            <div className="grid grid-cols-7 gap-y-1 w-[252px]">
                              {['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'].map((day) => (
                                <div key={day} className="flex items-center justify-center w-9 h-9 text-[12px] leading-[16px] text-[rgba(0,0,0,0.7)] font-['Svenska_Spel_Plan_Pro',sans-serif]">
                                  {day}
                                </div>
                              ))}
                              {[29, 30, 1, 2, 3, 4, 5].map((day, i) => (
                                <div
                                  key={`week1-${i}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full ${
                                    day > 28 ? 'text-[rgba(0,0,0,0.7)]' : 'text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                              {[6, 7, 8, 9, 10, 11, 12].map((day) => (
                                <div key={`week2-${day}`} className="flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full text-[#1b1918]">
                                  {day}
                                </div>
                              ))}
                              {[13, 14, 15, 16, 17, 18, 19].map((day) => (
                                <div
                                  key={`week3-${day}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full ${
                                    day === 16
                                      ? 'bg-[#62001d] text-white font-["Svenska_Spel_Plan_Pro",sans-serif]'
                                      : day === 18
                                      ? 'border border-[#1b1918] text-[#1b1918]'
                                      : 'text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                              {[20, 21, 22, 23, 24, 25, 26].map((day) => (
                                <div key={`week4-${day}`} className="flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full text-[#1b1918]">
                                  {day}
                                </div>
                              ))}
                              {[27, 28, 29, 30, 31, 1, 2].map((day, i) => (
                                <div
                                  key={`week5-${i}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full ${
                                    day <= 2 ? 'text-[rgba(0,0,0,0.7)]' : 'text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: 'Range',
                    content: (
                      <div className="pt-4">
                        <div className="bg-white p-4 rounded-lg border border-[rgba(40,3,1,0.16)] inline-block">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between w-[252px]">
                              <button className="p-2 hover:bg-gray-100 rounded">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M10 12L6 8L10 4" stroke="#1B1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[16px] leading-[24px] text-[#1b1918]">Oktober 2025</p>
                              <button className="p-2 hover:bg-gray-100 rounded">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M6 4L10 8L6 12" stroke="#1B1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </div>
                            <div className="grid grid-cols-7 gap-y-1 w-[252px]">
                              {['Må', 'Ti', 'On', 'To', 'Fr', 'Lö', 'Sö'].map((day) => (
                                <div key={day} className="flex items-center justify-center w-9 h-9 text-[12px] leading-[16px] text-[rgba(0,0,0,0.7)] font-['Svenska_Spel_Plan_Pro',sans-serif]">
                                  {day}
                                </div>
                              ))}
                              {[29, 30, 1, 2, 3, 4, 5].map((day, i) => (
                                <div
                                  key={`week1-${i}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full ${
                                    day > 28 ? 'text-[rgba(0,0,0,0.7)]' : 'text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                              {[6, 7, 8, 9, 10, 11, 12].map((day) => (
                                <div key={`week2-${day}`} className="flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full text-[#1b1918]">
                                  {day}
                                </div>
                              ))}
                              {[13, 14, 15, 16, 17, 18, 19].map((day) => (
                                <div
                                  key={`week3-${day}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] ${
                                    day === 16
                                      ? 'bg-[#62001d] text-white rounded-l-full font-["Svenska_Spel_Plan_Pro",sans-serif]'
                                      : day >= 17 && day <= 19
                                      ? 'bg-[#efeae7] text-[#1b1918]'
                                      : 'rounded-full text-[#1b1918]'
                                  } ${day === 18 ? 'border border-[#1b1918] rounded-full' : ''}`}
                                >
                                  {day}
                                </div>
                              ))}
                              {[20, 21, 22, 23, 24, 25, 26].map((day) => (
                                <div
                                  key={`week4-${day}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] ${
                                    day >= 20 && day <= 25
                                      ? day === 25
                                        ? 'bg-[#62001d] text-white rounded-r-full font-["Svenska_Spel_Plan_Pro",sans-serif]'
                                        : 'bg-[#efeae7] text-[#1b1918]'
                                      : 'rounded-full text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                              {[27, 28, 29, 30, 31, 1, 2].map((day, i) => (
                                <div
                                  key={`week5-${i}`}
                                  className={`flex items-center justify-center w-9 h-9 text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] rounded-full ${
                                    day <= 2 ? 'text-[rgba(0,0,0,0.7)]' : 'text-[#1b1918]'
                                  }`}
                                >
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="flex justify-end w-[252px]">
                              <button className="bg-[#ed0000] text-white px-3 py-2 rounded-[4px] text-[14px] leading-[20px] font-['Svenska_Spel_Plan_Pro',sans-serif] hover:bg-[#c50000]">
                                Välj datum
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </CardContent>
          </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Date Picker</CardTitle>
                <CardDescription>Interaktiv datumväljare med states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 md:p-6">
                <DatePicker
                  label="Välj datum"
                  helperText="Välj ett datum för ditt spel"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <DatePicker
                  label="Födelsedag"
                  variant="outline"
                  helperText="När är du född?"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <DatePicker
                  label="Fel datum"
                  error
                  errorText="Detta datum är inte giltigt"
                />
                {selectedDate && (
                  <p className="text-sm text-muted-foreground">
                    Valt datum: {new Date(selectedDate).toLocaleDateString('sv-SE')}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader className="md:p-6">
                  <CardTitle>Select</CardTitle>
                </CardHeader>
                <CardContent className="md:p-6 space-y-4">
                  <Select
                    label="Välj alternativ"
                    helperText="Välj ett alternativ från listan"
                    options={[
                      { value: 'option1', label: 'Alternativ 1' },
                      { value: 'option2', label: 'Alternativ 2' },
                      { value: 'option3', label: 'Alternativ 3' },
                    ]}
                    variant="outline"
                  />
                  <Select
                    label="Land"
                    showFlag
                    options={[
                      { value: 'se', label: 'Sverige', flag: <SE className="w-6 h-4" /> },
                      { value: 'no', label: 'Norge', flag: <NO className="w-6 h-4" /> },
                      { value: 'dk', label: 'Danmark', flag: <DK className="w-6 h-4" /> },
                    ]}
                    variant="solid"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="md:p-6">
                  <CardTitle>Switch</CardTitle>
                </CardHeader>
                <CardContent className="md:p-6">
                  <Switch
                    label="Aktivera spelnotifikationer"
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="md:p-6">
                  <CardTitle>Slider</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 md:p-6">
                  <Slider
                    label="Insats"
                    showValue
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                  />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Radio Groups</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
              <Tabs
                    items={[
                      {
                        label: 'Default',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <RadioGroup
                                label="Betalmetod"
                                name="payment-left"
                                defaultValue="terms"
                                options={[
                                  {
                                    value: 'terms',
                                    label: 'Jag godkänner villkoren',
                                    description: 'Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy.',
                                  },
                                  {
                                    value: 'marketing',
                                    label: 'Ja tack, jag vill ha erbjudanden och nyheter',
                                    description: 'Vi håller dig uppdaterad om nya spel, kampanjer och vinstchanser.',
                                  },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <RadioGroup
                                label="Betalmetod"
                                name="payment-right"
                                alignment="right"
                                defaultValue="terms"
                                options={[
                                  {
                                    value: 'terms',
                                    label: 'Jag godkänner villkoren',
                                    description: 'Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy.',
                                  },
                                  {
                                    value: 'marketing',
                                    label: 'Ja tack, jag vill ha erbjudanden och nyheter',
                                    description: 'Vi håller dig uppdaterad om nya spel, kampanjer och vinstchanser.',
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: 'Disabled',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <RadioGroup
                                label="Betalmetod"
                                name="disabled-left"
                                defaultValue="disabled1"
                                options={[
                                  {
                                    value: 'disabled1',
                                    label: 'Jag accepterar användarvillkoren',
                                    description: 'Du godkänner våra användarvillkor och integritetspolicy.',
                                    disabled: true,
                                  },
                                  {
                                    value: 'disabled2',
                                    label: 'Jag vill ta emot erbjudanden och nyheter',
                                    description: 'Få information om nya spel, kampanjer och vinstchanser.',
                                    disabled: true,
                                  },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <RadioGroup
                                label="Betalmetod"
                                name="disabled-right"
                                alignment="right"
                                defaultValue="disabled1"
                                options={[
                                  {
                                    value: 'disabled1',
                                    label: 'Jag accepterar användarvillkoren',
                                    description: 'Du godkänner våra användarvillkor och integritetspolicy.',
                                    disabled: true,
                                  },
                                  {
                                    value: 'disabled2',
                                    label: 'Jag vill ta emot erbjudanden och nyheter',
                                    description: 'Få information om nya spel, kampanjer och vinstchanser.',
                                    disabled: true,
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: 'Destructive',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <RadioGroup
                                label="Bekräfta radering"
                                name="destructive-left"
                                defaultValue="error"
                                options={[
                                  {
                                    value: 'error',
                                    label: 'Ja, radera mitt konto',
                                    description: 'Vi raderar alla dina speldata och transaktioner. Detta går inte att ångra.',
                                    destructive: true,
                                  },
                                  {
                                    value: 'normal',
                                    label: 'Nej, behåll mitt konto',
                                    description: 'Vi behåller alla dina uppgifter och du kan fortsätta spela som vanligt.',
                                  },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <RadioGroup
                                label="Bekräfta radering"
                                name="destructive-right"
                                alignment="right"
                                defaultValue="error"
                                options={[
                                  {
                                    value: 'error',
                                    label: 'Ja, radera mitt konto',
                                    description: 'Vi raderar alla dina speldata och transaktioner. Detta går inte att ångra.',
                                    destructive: true,
                                  },
                                  {
                                    value: 'normal',
                                    label: 'Nej, behåll mitt konto',
                                    description: 'Vi behåller alla dina uppgifter och du kan fortsätta spela som vanligt.',
                                  },
                                ]}
                              />
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
            </CardContent>
          </Card>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Checkboxes</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
              <Tabs
                    items={[
                      {
                        label: 'Default',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <Checkbox
                                label="Jag godkänner villkoren"
                                description="Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy."
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <Checkbox
                                label="Jag godkänner villkoren"
                                description="Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy."
                                alignment="right"
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: 'Disabled',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <Checkbox
                                label="Jag godkänner villkoren"
                                description="Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy."
                                disabled
                                defaultChecked
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <Checkbox
                                label="Jag godkänner villkoren"
                                description="Genom att godkänna bekräftar du våra användarvillkor och integritetspolicy."
                                alignment="right"
                                disabled
                                defaultChecked
                              />
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: 'Destructive',
                        content: (
                          <div className="space-y-6 pt-4">
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Left aligned</p>
                              <Checkbox
                                label="Ja, radera mitt konto"
                                description="Vi raderar alla dina speldata och transaktioner. Detta går inte att ångra."
                                destructive
                                defaultChecked
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">Right aligned</p>
                              <Checkbox
                                label="Ja, radera mitt konto"
                                description="Vi raderar alla dina speldata och transaktioner. Detta går inte att ångra."
                                alignment="right"
                                destructive
                                defaultChecked
                              />
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
            </CardContent>
          </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Toggle Group</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
                <Tabs
                  items={[
                    {
                      label: 'Medium',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium">Base Emphasis</h3>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">2 items</p>
                              <ToggleGroup
                                size="md"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Lotto' },
                                  { value: 'item2', label: 'Eurojackpot' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">3 items</p>
                              <ToggleGroup
                                size="md"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Idag' },
                                  { value: 'item2', label: 'Onsdag' },
                                  { value: 'item3', label: 'Lördag' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">4 items</p>
                              <ToggleGroup
                                size="md"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: '1 v' },
                                  { value: 'item2', label: '2 v' },
                                  { value: 'item3', label: '4 v' },
                                  { value: 'item4', label: '8 v' },
                                ]}
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-medium">Low Emphasis</h3>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">2 items</p>
                              <ToggleGroup
                                size="md"
                                emphasis="low"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Månad' },
                                  { value: 'item2', label: 'År' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">3 items</p>
                              <ToggleGroup
                                size="md"
                                emphasis="low"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Alla' },
                                  { value: 'item2', label: 'Aktiva' },
                                  { value: 'item3', label: 'Avslutade' },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'Small',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium">Base Emphasis</h3>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">2 items</p>
                              <ToggleGroup
                                size="sm"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Kort' },
                                  { value: 'item2', label: 'Swish' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">3 items</p>
                              <ToggleGroup
                                size="sm"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Dag' },
                                  { value: 'item2', label: 'Vecka' },
                                  { value: 'item3', label: 'Månad' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">4 items</p>
                              <ToggleGroup
                                size="sm"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Q1' },
                                  { value: 'item2', label: 'Q2' },
                                  { value: 'item3', label: 'Q3' },
                                  { value: 'item4', label: 'Q4' },
                                ]}
                              />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-medium">Low Emphasis</h3>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">2 items</p>
                              <ToggleGroup
                                size="sm"
                                emphasis="low"
                                defaultValue="item1"
                                options={[
                                  { value: 'item1', label: 'Ja' },
                                  { value: 'item2', label: 'Nej' },
                                ]}
                              />
                            </div>
                            <div className="space-y-3">
                              <p className="text-xs text-muted-foreground">3 items</p>
                              <ToggleGroup
                                size="sm"
                                emphasis="low"
                                defaultValue="item2"
                                options={[
                                  { value: 'item1', label: 'Låg' },
                                  { value: 'item2', label: 'Medel' },
                                  { value: 'item3', label: 'Hög' },
                                ]}
                              />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Toggle Group - Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 md:p-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">När vill du spela?</h3>
                  <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] text-[14px] text-[#1b1918]">
                    Välj ett eller flera datum som passar dig
                  </p>
                  <ToggleGroup
                    size="md"
                    type="multiple"
                    defaultValue={['wed']}
                    options={[
                      { value: 'wed', label: 'Onsdag 11/12' },
                      { value: 'fri', label: 'Fredag 13/12' },
                    ]}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Hur länge vill du spela?</h3>
                  <div className="space-y-2">
                    {/* Spela 1-10 veckor option */}
                    <div
                      className={`bg-[rgba(40,3,1,0)] relative rounded-[8px] cursor-pointer ${
                        durationOption === 'weeks' ? 'border-2 border-[#ed0000]' : 'border border-[rgba(40,3,1,0.16)]'
                      }`}
                      onClick={() => setDurationOption('weeks')}
                    >
                      <div className="p-[12px] space-y-2">
                        <div className="flex gap-[8px] items-start">
                          <div className="relative shrink-0 size-[20px] mt-[2px]">
                            <div className="absolute border border-[#62001d] border-solid left-0 rounded-[9999px] size-[20px] top-0" />
                            {durationOption === 'weeks' && (
                              <div className="absolute left-[4px] size-[12px] top-[4px]">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <circle cx="6" cy="6" fill="#62001D" r="5.5" stroke="#62001D" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] text-[14px] text-[#1b1918] flex-1">
                            Välj 1-10 veckor framåt
                          </p>
                        </div>
                        {durationOption === 'weeks' && (
                          <div className="space-y-1">
                            <ToggleGroup
                              size="sm"
                              emphasis="low"
                              type="multiple"
                              defaultValue={['1v']}
                              options={[
                                { value: '1v', label: '1 v' },
                                { value: '2v', label: '2 v' },
                                { value: '3v', label: '3 v' },
                                { value: '4v', label: '4 v' },
                                { value: '5v', label: '5 v' },
                              ]}
                            />
                            <ToggleGroup
                              size="sm"
                              emphasis="low"
                              type="multiple"
                              defaultValue={[]}
                              options={[
                                { value: '6v', label: '6 v' },
                                { value: '7v', label: '7 v' },
                                { value: '8v', label: '8 v' },
                                { value: '9v', label: '9 v' },
                                { value: '10v', label: '10 v' },
                              ]}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Prenumerera option */}
                    <div
                      className={`bg-[rgba(40,3,1,0)] relative rounded-[8px] cursor-pointer ${
                        durationOption === 'subscription' ? 'border-2 border-[#ed0000]' : 'border border-[rgba(40,3,1,0.16)]'
                      }`}
                      onClick={() => setDurationOption('subscription')}
                    >
                      <div className="p-[16px]">
                        <div className="flex gap-[8px] items-start">
                          <div className="relative shrink-0 size-[20px] mt-[2px]">
                            <div className={`absolute border ${durationOption === 'subscription' ? 'border-[#62001d]' : 'border-[#1b1918]'} border-solid left-0 rounded-[9999px] size-[20px] top-0`} />
                            {durationOption === 'subscription' && (
                              <div className="absolute left-[4px] size-[12px] top-[4px]">
                                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                  <circle cx="6" cy="6" fill="#62001D" r="5.5" stroke="#62001D" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] text-[14px] text-[#1b1918] flex-1">
                            Prenumerera – vi spelar åt dig automatiskt
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] leading-[20px] text-[14px] text-[#1b1918]">
                      Speldag: Idag
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Display */}
        <section className="space-y-6">
          <h2>Data Display</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
                <Tabs
                  items={[
                    {
                      label: 'Small',
                      content: (
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">High emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="small" variant="brand" emphasis="filled" showIcon>Ny</Badge>
                              <Badge size="small" variant="neutral" emphasis="filled" showIcon>Pausad</Badge>
                              <Badge size="small" variant="success" emphasis="filled" showIcon>Aktiv</Badge>
                              <Badge size="small" variant="attention" emphasis="filled" showIcon>Väntar</Badge>
                              <Badge size="small" variant="important" emphasis="filled" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Low emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="small" variant="brand" emphasis="tint" showIcon>Ny</Badge>
                              <Badge size="small" variant="neutral" emphasis="tint" showIcon>Pausad</Badge>
                              <Badge size="small" variant="success" emphasis="tint" showIcon>Aktiv</Badge>
                              <Badge size="small" variant="attention" emphasis="tint" showIcon>Väntar</Badge>
                              <Badge size="small" variant="important" emphasis="tint" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'Medium',
                      content: (
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">High emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="medium" variant="brand" emphasis="filled" showIcon>Ny</Badge>
                              <Badge size="medium" variant="neutral" emphasis="filled" showIcon>Pausad</Badge>
                              <Badge size="medium" variant="success" emphasis="filled" showIcon>Aktiv</Badge>
                              <Badge size="medium" variant="attention" emphasis="filled" showIcon>Väntar</Badge>
                              <Badge size="medium" variant="important" emphasis="filled" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Low emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="medium" variant="brand" emphasis="tint" showIcon>Ny</Badge>
                              <Badge size="medium" variant="neutral" emphasis="tint" showIcon>Pausad</Badge>
                              <Badge size="medium" variant="success" emphasis="tint" showIcon>Aktiv</Badge>
                              <Badge size="medium" variant="attention" emphasis="tint" showIcon>Väntar</Badge>
                              <Badge size="medium" variant="important" emphasis="tint" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'Large',
                      content: (
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">High emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="large" variant="brand" emphasis="filled" showIcon>Ny</Badge>
                              <Badge size="large" variant="neutral" emphasis="filled" showIcon>Pausad</Badge>
                              <Badge size="large" variant="success" emphasis="filled" showIcon>Aktiv</Badge>
                              <Badge size="large" variant="attention" emphasis="filled" showIcon>Väntar</Badge>
                              <Badge size="large" variant="important" emphasis="filled" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Low emphasis</p>
                            <div className="flex flex-wrap gap-2">
                              <Badge size="large" variant="brand" emphasis="tint" showIcon>Ny</Badge>
                              <Badge size="large" variant="neutral" emphasis="tint" showIcon>Pausad</Badge>
                              <Badge size="large" variant="success" emphasis="tint" showIcon>Aktiv</Badge>
                              <Badge size="large" variant="attention" emphasis="tint" showIcon>Väntar</Badge>
                              <Badge size="large" variant="important" emphasis="tint" showIcon>Avbruten</Badge>
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'Dot',
                      content: (
                        <div className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">High emphasis</p>
                            <div className="flex flex-wrap gap-2 items-center">
                              <Badge size="dot" variant="brand" emphasis="filled" />
                              <Badge size="dot" variant="neutral" emphasis="filled" />
                              <Badge size="dot" variant="success" emphasis="filled" />
                              <Badge size="dot" variant="attention" emphasis="filled" />
                              <Badge size="dot" variant="important" emphasis="filled" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Low emphasis</p>
                            <div className="flex flex-wrap gap-2 items-center">
                              <Badge size="dot" variant="brand" emphasis="tint" />
                              <Badge size="dot" variant="neutral" emphasis="tint" />
                              <Badge size="dot" variant="success" emphasis="tint" />
                              <Badge size="dot" variant="attention" emphasis="tint" />
                              <Badge size="dot" variant="important" emphasis="tint" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="md:p-6">
                <CardTitle>Avatars</CardTitle>
              </CardHeader>
              <CardContent className="md:p-6">
                <Tabs
                  items={[
                    {
                      label: 'XXS',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="xxs" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="xxs" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="xxs" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'XS',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="xs" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="xs" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="xs" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'S',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="s" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="s" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="s" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'M',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="m" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="m" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="m" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'L',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="L" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="L" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="L" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'XL',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="XL" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="XL" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="XL" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: 'XXL',
                      content: (
                        <div className="space-y-6 pt-4">
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Med bild</p>
                            <div className="flex gap-4">
                              <Avatar size="XXL" type="image" imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Initialer</p>
                            <div className="flex gap-4">
                              <Avatar size="XXL" type="text" userName="Clara Nord" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xs text-muted-foreground">Utloggad</p>
                            <div className="flex gap-4">
                              <Avatar size="XXL" type="signedOut" />
                            </div>
                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Table</CardTitle>
            </CardHeader>
            <CardContent className="md:p-6">
              <Table variant="striped">
                <TableHeader>
                  <TableRow>
                    <TableHead>Spel</TableHead>
                    <TableHead>Vinstchans</TableHead>
                    <TableHead>Jackpot</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Lotto</TableCell>
                    <TableCell>1 / 7</TableCell>
                    <TableCell>24M SEK</TableCell>
                    <TableCell><Badge variant="success" emphasis="filled">Aktiv</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eurojackpot</TableCell>
                    <TableCell>1 / 12</TableCell>
                    <TableCell>85M SEK</TableCell>
                    <TableCell><Badge variant="success" emphasis="filled">Aktiv</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Vikinglotto</TableCell>
                    <TableCell>1 / 8</TableCell>
                    <TableCell>12M SEK</TableCell>
                    <TableCell><Badge variant="attention" emphasis="filled">Väntar</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Keno</TableCell>
                    <TableCell>1 / 4</TableCell>
                    <TableCell>5M SEK</TableCell>
                    <TableCell><Badge variant="brand" emphasis="filled">Ny</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Joker</TableCell>
                    <TableCell>1 / 10</TableCell>
                    <TableCell>18M SEK</TableCell>
                    <TableCell><Badge variant="important" emphasis="filled">Avbruten</Badge></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Triss</TableCell>
                    <TableCell>1 / 5</TableCell>
                    <TableCell>3M SEK</TableCell>
                    <TableCell><Badge variant="neutral" emphasis="filled">Pausad</Badge></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section className="space-y-6">
          <h2>Navigation</h2>
          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Tabs Menu</CardTitle>
            </CardHeader>
            <CardContent className="md:p-6">
              <TabsMenu
                items={[
                  { label: 'Översikt', content: <p>Här ser du dina senaste aktiviteter och transaktioner.</p> },
                  { label: 'Statistik', content: <p>Kolla in statistik över hur du spelar.</p> },
                  { label: 'Inställningar', content: <p>Anpassa ditt konto precis som du vill ha det.</p> },
                ]}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Tabs - Emphasis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 md:p-6">
              {/* Low Emphasis */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Low</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">on-surface</p>
                    <div className="bg-white p-6 rounded-lg">
                      <Tabs
                        emphasis="low"
                        containerBg="white"
                        items={[
                          { label: 'Lotto', content: <p className="pt-4">Här hittar du kommande dragningar.</p> },
                          { label: 'Eurojackpot', content: <p className="pt-4">Spela med Europa – varje vecka!</p> },
                          { label: 'Vikinglotto', content: <p className="pt-4">Tillsammans med Norden.</p> },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">on-base</p>
                    <div className="bg-[#faf6f3] p-6 rounded-lg">
                      <Tabs
                        emphasis="low"
                        containerBg="warm-grey"
                        items={[
                          { label: 'Lotto', content: <p className="pt-4">Här hittar du kommande dragningar.</p> },
                          { label: 'Eurojackpot', content: <p className="pt-4">Spela med Europa – varje vecka!</p> },
                          { label: 'Vikinglotto', content: <p className="pt-4">Tillsammans med Norden.</p> },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* High Emphasis */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium">High</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">on-surface</p>
                    <div className="bg-white p-6 rounded-lg">
                      <Tabs
                        emphasis="high"
                        containerBg="white"
                        items={[
                          { label: 'Aktiva', content: <p className="pt-4">Här ser du alla dina pågående spel.</p> },
                          { label: 'Historik', content: <p className="pt-4">Kolla in dina tidigare spel och resultat.</p> },
                          { label: 'Favoriter', content: <p className="pt-4">Dina favoritrader – redo att spelas!</p> },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">on-base</p>
                    <div className="bg-[#faf6f3] p-6 rounded-lg">
                      <Tabs
                        emphasis="high"
                        containerBg="warm-grey"
                        items={[
                          { label: 'Aktiva', content: <p className="pt-4">Här ser du alla dina pågående spel.</p> },
                          { label: 'Historik', content: <p className="pt-4">Kolla in dina tidigare spel och resultat.</p> },
                          { label: 'Favoriter', content: <p className="pt-4">Dina favoritrader – redo att spelas!</p> },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feedback */}
        <section className="space-y-6">
          <h2>Feedback Components</h2>
          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Snackbar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 md:p-6">
              <div className="border border-[rgba(40,3,1,0.16)] rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Default</h3>
                  <Button
                    variant="outline"
                    size="small"
                    onClick={() => {
                      setSnackbarVariant('default');
                      setSnackbarMessage('Vi har uppdaterat dina inställningar');
                      setSnackbarAction(
                        <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-white hover:opacity-80">
                          Ångra
                        </button>
                      );
                      setSnackbarOpen(true);
                    }}
                  >
                    Testa
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Without action</p>
                  <div className="bg-[#1b1918] text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                    <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Vi har uppdaterat dina inställningar</div>
                    <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">With action</p>
                  <div className="bg-[#1b1918] text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                    <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Vi har uppdaterat dina inställningar</div>
                    <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-white hover:opacity-80 shrink-0">
                      Ångra
                    </button>
                    <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-[rgba(40,3,1,0.16)] rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Success</h3>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => {
                        setSnackbarVariant('success');
                        setSnackbarMessage('Klart! Ditt spel är registrerat');
                        setSnackbarAction(
                          <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80">
                            Visa
                          </button>
                        );
                        setSnackbarOpen(true);
                      }}
                    >
                      Testa
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Without action</p>
                    <div className="bg-[#d4f4dd] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Klart! Ditt spel är registrerat</div>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">With action</p>
                    <div className="bg-[#d4f4dd] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Klart! Ditt spel är registrerat</div>
                      <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80 shrink-0">
                        Visa
                      </button>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-[rgba(40,3,1,0.16)] rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Warning</h3>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => {
                        setSnackbarVariant('warning');
                        setSnackbarMessage('Kolla att allt stämmer innan du fortsätter');
                        setSnackbarAction(
                          <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80">
                            Granska
                          </button>
                        );
                        setSnackbarOpen(true);
                      }}
                    >
                      Testa
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Without action</p>
                    <div className="bg-[#fff3cd] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Kolla att allt stämmer innan du fortsätter</div>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">With action</p>
                    <div className="bg-[#fff3cd] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Kolla att allt stämmer innan du fortsätter</div>
                      <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80 shrink-0">
                        Granska
                      </button>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border border-[rgba(40,3,1,0.16)] rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Error</h3>
                    <Button
                      variant="outline"
                      size="small"
                      onClick={() => {
                        setSnackbarVariant('error');
                        setSnackbarMessage('Hoppsan! Något gick fel. Försök igen');
                        setSnackbarAction(
                          <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80">
                            Försök igen
                          </button>
                        );
                        setSnackbarOpen(true);
                      }}
                    >
                      Testa
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Without action</p>
                    <div className="bg-[#ffd5ce] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Hoppsan! Något gick fel. Försök igen</div>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground pt-2">With action</p>
                    <div className="bg-[#ffd5ce] text-[#1b1918] flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-[200px] w-fit">
                      <div className="flex-1 font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px]">Hoppsan! Något gick fel. Försök igen</div>
                      <button className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] text-[#1b1918] hover:opacity-80 shrink-0">
                        Försök igen
                      </button>
                      <button className="text-current opacity-70 hover:opacity-100 transition-opacity shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Tooltip</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 md:p-6">
              <Tooltip content="Hjälptext visas här">
                <Button variant="ghost">Hjälp</Button>
              </Tooltip>
              <div className="flex items-center gap-4">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Progress & Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 md:p-6">
              <Progress value={progressValue} showLabel />
              <Progress value={75} variant="success" />
              <Progress value={45} variant="warning" />
              <Progress value={25} variant="error" size="lg" />

              <div className="space-y-2">
                <Skeleton width="100%" height="20px" />
                <Skeleton width="80%" height="20px" />
                <Skeleton width="90%" height="20px" />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Overlays */}
        <section className="space-y-6">
          <h2>Overlays & Modals</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Dialog Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button size="small" onClick={() => setDialogOpen(true)}>
                  Desktop
                </Button>
                <Button size="small" onClick={() => setDialogMobileOpen(true)}>
                  Mobil
                </Button>
                <Button size="small" onClick={() => setDialogScrollableOpen(true)}>
                  Desktop Scrollbar
                </Button>
                <Button size="small" onClick={() => setDialogScrollableMobileOpen(true)}>
                  Mobil Scrollbar
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Other Overlays</h3>
              <div className="flex flex-wrap gap-3">
                <Button size="small" onClick={() => setBottomSheetOpen(true)}>
                  Bottom Sheet
                </Button>
                <Popover
                  trigger={<Button size="small">Popover</Button>}
                  content={
                    <div className="space-y-2">
                      <p className="font-medium">Mer information</p>
                      <p className="text-sm text-muted-foreground">
                        Här kan du visa detaljerad information och hjälptext.
                      </p>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="space-y-6">
          <h2>Disclosure Components</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Default Accordion */}
            <div>
              <h3 className="text-sm font-medium mb-4">Default Accordion</h3>
              <Accordion
                items={[
                  {
                    title: 'Är den tillgänglig?',
                    content: 'Ja. Den följer WCAG-riktlinjer för tillgänglighet.',
                    defaultOpen: true,
                  },
                  {
                    title: 'Har den styling?',
                    content: 'Ja. Den har standardstyling enligt designsystemet.',
                  },
                  {
                    title: 'Är den animerad?',
                    content: 'Ja. Accordion-objekten expanderar och kollapsar med mjuka animationer.',
                  },
                ]}
                allowMultiple
              />
            </div>

            {/* Low Emphasis Card */}
            <div>
              <h3 className="text-sm font-medium mb-4">Low Emphasis (Card)</h3>
              <Accordion
                variant="low-emphasis"
                label="Spelregler"
                items={[
                  {
                    title: 'Hur funkar Lotto?',
                    content: 'Välj 7 nummer mellan 1-35 så är du med! Vi drar varje onsdag och lördag kl 18:00.',
                    defaultOpen: true,
                  },
                  {
                    title: 'Vad kostar det?',
                    content: 'En rad kostar 5 kr. Perfekt för dig som vill spela upp till 10 veckor framåt.',
                  },
                  {
                    title: 'Hur länge kan jag hämta ut min vinst?',
                    content: 'Du har 90 dagar på dig från dragningsdagen. Vi hjälper dig gärna!',
                  },
                ]}
                allowMultiple
              />
            </div>

            {/* Mid Emphasis Card */}
            <div>
              <h3 className="text-sm font-medium mb-4">Mid Emphasis (Card)</h3>
              <Accordion
                variant="mid-emphasis"
                label="Vanliga frågor"
                items={[
                  {
                    title: 'Hur byter jag lösenord?',
                    content: 'Gå till Inställningar och välj "Ändra lösenord". Ha ditt nuvarande lösenord till hands!',
                    defaultOpen: true,
                  },
                  {
                    title: 'Hur avslutar jag min prenumeration?',
                    content: 'Du hittar alla dina prenumerationer under "Mina spel" i din profil. Enkelt att stänga av!',
                  },
                  {
                    title: 'Var ser jag mina tidigare spel?',
                    content: 'Allt du spelat finns sparat under "Historik" i menyn. Där kan du se alla dina spel.',
                  },
                ]}
                allowMultiple
              />
            </div>
          </div>
        </section>

        {/* Coming Soon - Components from Figma */}
        <section className="space-y-6">
          <h2>Kommande komponenter från Figma</h2>
          <Card>
            <CardHeader className="md:p-6">
              <CardTitle>Ytterligare komponenter i designsystemet</CardTitle>
              <CardDescription>
                Dessa komponenter finns i Figma designsystemet och väntar på implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="md:p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Form & Input</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Combobox</li>
                    <li>• Textarea</li>
                    <li>• Input OTP</li>
                    <li>• Label</li>
                    <li>• Form</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Navigation</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Breadcrumb</li>
                    <li>• Menu</li>
                    <li>• Menubar</li>
                    <li>• Navigation Menu</li>
                    <li>• Navigation Indicator</li>
                    <li>• Pagination</li>
                    <li>• Command</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Overlay & Feedback</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Alert</li>
                    <li>• Sonner (Toast)</li>
                    <li>• Sheet</li>
                    <li>• Composable Modal</li>
                    <li>• Context Menu</li>
                    <li>• Dropdown Menu</li>
                    <li>• Hover Card</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Layout & Display</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Collapsible</li>
                    <li>• Resizable</li>
                    <li>• Scroll Area</li>
                    <li>• Data Table</li>
                    <li>• Carousel</li>
                    <li>• Chart</li>
                    <li>• Toggle</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Specialized</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Bet button</li>
                    <li>• Bet prediction</li>
                    <li>• Header</li>
                    <li>• Legal Header</li>
                    <li>• Price Label</li>
                    <li>• Numeric keyboard</li>
                    <li>• Cursor</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(40,3,1,0.16)]">
                <p className="text-sm text-muted-foreground">
                  Dessa komponenter finns redan designade i Figma och är redo för implementation.
                  Totalt finns <strong>36 ytterligare komponenter</strong> att implementera utöver de nuvarande 27.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
                </div>
              ),
            },
            {
              label: 'Brands',
              content: (
                <div className="space-y-8">
                  <Tabs
                    items={[
                      {
                        label: 'Svenska Spel',
                        content: (
                          <div className="space-y-6 pt-6">
                            {/* Svenska Spel Logos */}
                            <div>
                              <h3 className="text-lg font-medium mb-4">Logotyper</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <Card className="flex flex-col">
                                  <CardHeader className="p-6">
                                    <CardTitle className="text-sm" style={{ fontWeight: 400 }}>Horizontal</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-6 flex-1 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full h-[56px]">
                                      <SvenskaSpelLogoHorizontal style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto' }} />
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card className="flex flex-col">
                                  <CardHeader className="p-6">
                                    <CardTitle className="text-sm" style={{ fontWeight: 400 }}>Horizontal Two Rows</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-6 flex-1 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full h-[56px]">
                                      <SvenskaSpelLogoHorizontalTwoRows style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto' }} />
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card className="flex flex-col">
                                  <CardHeader className="p-6">
                                    <CardTitle className="text-sm" style={{ fontWeight: 400 }}>Vertical</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-6 flex-1 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full h-[112px]">
                                      <SvenskaSpelLogoVertical style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto' }} />
                                    </div>
                                  </CardContent>
                                </Card>

                                <Card className="flex flex-col">
                                  <CardHeader className="p-6">
                                    <CardTitle className="text-sm" style={{ fontWeight: 400 }}>Layered</CardTitle>
                                  </CardHeader>
                                  <CardContent className="p-6 flex-1 flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full h-[56px]">
                                      <SvenskaSpelLogoLayered style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', width: 'auto' }} />
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>

                            {/* Svenska Spel 3D Cube */}
                            <div>
                              <h3 className="text-lg font-medium mb-4">3D-kub</h3>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)]">
                                  <SvenskaSpelCube size={100} />
                                  <p className="mt-3 text-xs font-normal text-muted-foreground text-center">
                                    Svenska Spel
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ),
                      },
                      {
                        label: 'Sport & Casino',
                        content: (
                          <div className="space-y-6 pt-6">
                            {/* Sport & Casino Logos */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>Logotyper</CardTitle>
                                <CardDescription>
                                  Alla produktlogotyper - välj variant för att se olika versioner
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6 space-y-6">
                                <Select
                                  label="Variant"
                                  value={sportCasinoGlobalVariant}
                                  onChange={(value) => setSportCasinoGlobalVariant(value)}
                                  options={sportCasinoAvailableVariants.map((variant) => ({
                                    value: variant,
                                    label: variant,
                                  }))}
                                />
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {sportCasinoProducts.map((product) => {
                                    const productVariants = sportCasinoLogosByProduct[product];
                                    const selectedVariant = productVariants.find(
                                      (v) => v.variant === sportCasinoGlobalVariant
                                    ) || productVariants[0]; // Fallback to first variant if selected doesn't exist

                                    const isInverted = isInvertedVariant(sportCasinoGlobalVariant);

                                    return (
                                      <div
                                        key={product}
                                        className={`flex flex-col items-center justify-between p-6 rounded-lg border border-[rgba(40,3,1,0.16)] ${
                                          isInverted ? 'bg-[#1B1918]' : 'bg-surface'
                                        }`}
                                      >
                                        <div className="flex items-center justify-center w-full" style={{ height: '56px' }}>
                                          {selectedVariant && <selectedVariant.component className="max-w-full max-h-full" style={{ height: '100%', width: 'auto' }} />}
                                        </div>
                                        <p className={`mt-3 text-xs font-normal text-center ${isInverted ? 'text-white' : 'text-muted-foreground'}`}>
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>

                            {/* Icons */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>Ikoner</CardTitle>
                                <CardDescription>
                                  Produktikoner för snabb navigation och identifiering
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6">
                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                  {sportCasinoIconProducts.map((product) => {
                                    const IconComponent = sportCasinoIconsByProduct[product];
                                    return (
                                      <div
                                        key={product}
                                        className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)]"
                                      >
                                        {IconComponent && <IconComponent size={48} />}
                                        <p className="mt-3 text-xs font-normal text-muted-foreground text-center">
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>

                            {/* 3D Cubes */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>3D-kuber</CardTitle>
                                <CardDescription>
                                  3D-representationer av produkter för visuell branding
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {sportCasinoCubeProducts.map((product) => {
                                    const CubeComponent = sportCasinoCubesByProduct[product];
                                    return (
                                      <div
                                        key={product}
                                        className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)]"
                                      >
                                        {CubeComponent && <CubeComponent size={100} />}
                                        <p className="mt-3 text-xs font-normal text-muted-foreground text-center">
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ),
                      },
                      {
                        label: 'Tur',
                        content: (
                          <div className="space-y-6 pt-6">

                            {/* Tur Logos */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>Logotyper</CardTitle>
                                <CardDescription>
                                  Alla produktlogotyper - välj variant för att se olika versioner
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6 space-y-6">
                                <Select
                                  label="Variant"
                                  value={turGlobalVariant}
                                  onChange={(value) => setTurGlobalVariant(value)}
                                  options={turAvailableVariants.map((variant) => ({
                                    value: variant,
                                    label: variant,
                                  }))}
                                />
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {turProducts.map((product) => {
                                    const productVariants = turLogosByProduct[product];
                                    const selectedVariant = productVariants.find(
                                      (v) => v.variant === turGlobalVariant
                                    ) || productVariants[0]; // Fallback to first variant if selected doesn't exist

                                    const isInverted = isInvertedVariant(turGlobalVariant);

                                    return (
                                      <div
                                        key={product}
                                        className={`flex flex-col items-center justify-between p-6 rounded-lg border border-[rgba(40,3,1,0.16)] ${
                                          isInverted ? 'bg-[#1B1918]' : 'bg-surface'
                                        }`}
                                      >
                                        <div className="flex items-center justify-center w-full" style={{ height: '56px' }}>
                                          {selectedVariant && <selectedVariant.component className="max-w-full max-h-full" style={{ height: '100%', width: 'auto' }} />}
                                        </div>
                                        <p className={`mt-3 text-xs font-normal text-center ${isInverted ? 'text-white' : 'text-muted-foreground'}`}>
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>

                            {/* Icons */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>Ikoner</CardTitle>
                                <CardDescription>
                                  Produktikoner för snabb navigation och identifiering
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6">
                                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                  {turIconProducts.map((product) => {
                                    const IconComponent = turIconsByProduct[product];
                                    return (
                                      <div
                                        key={product}
                                        className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)]"
                                      >
                                        {IconComponent && <IconComponent size={48} />}
                                        <p className="mt-3 text-xs font-normal text-muted-foreground text-center">
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>

                            {/* 3D Cubes */}
                            <Card>
                              <CardHeader className="md:p-6">
                                <CardTitle>3D-kuber</CardTitle>
                                <CardDescription>
                                  3D-representationer av produkter för visuell branding
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="md:p-6">
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                  {turCubeProducts.map((product) => {
                                    const CubeComponent = turCubesByProduct[product];
                                    return (
                                      <div
                                        key={product}
                                        className="flex flex-col items-center justify-center p-6 bg-surface rounded-lg border border-[rgba(40,3,1,0.16)]"
                                      >
                                        {CubeComponent && <CubeComponent size={100} />}
                                        <p className="mt-3 text-xs font-normal text-muted-foreground text-center">
                                          {product}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              ),
            },
            {
              label: 'Icons',
              content: (
                <div className="space-y-8 pt-6">
                  {/* Navigation & UI */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Navigation & UI</h3>
                    <IconShowcase icons={['minus', 'plus', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'menu-left', 'menu-right', 'close', 'close 3', 'checkmark', 'search', 'filter', 'reorder', 'collapse', 'expand', 'scroll-down', 'sub-menu', 'remove-sign', 'copy', 'copy-properties', 'upload', 'refresh-pix', 'captcha-refresh']} />
                  </div>

                  {/* Arrows & Badges */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Arrows & Badges</h3>
                    <IconShowcase icons={['badge-arrow-up', 'badge-arrow-down', 'badge-arrow-left', 'badge-arrow-right', 'up-down']} />
                  </div>

                  {/* Sports Icons */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Sports</h3>
                    <IconShowcase icons={['soccer', 'basketball', 'tennis', 'golf', 'hockey', 'ice-hockey', 'football', 'american-football', 'baseball', 'volleyball', 'cricket', 'rugby', 'rugby-league', 'rugby-union', 'badminton', 'table-tennis', 'handball', 'beach-handball', 'beach-soccer', 'beach-volleyball', 'swimming', 'cycling', 'running', 'skiing', 'snowboarding', 'skating', 'gymnastics', 'athletics', 'weight-lifting', 'boxing', 'wrestling', 'martial-arts', 'MMA', 'taekwondo', 'archery', 'shooting', 'fencing', 'rowing', 'sailing', 'wave-surfing', 'diving', 'water-polo', 'motorsports', 'esports', 'bandy', 'aussie-rules', 'biathlon', 'bowling', 'curling', 'darts', 'snooker', 'squash', 'triathlon', 'speedway', 'winter-sports']} />
                  </div>

                  {/* Horse Racing */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Horse Racing</h3>
                    <IconShowcase icons={['horse', 'all-meetings', 'blinkers', 'blinkers-austrailan', 'horseshoe-off', 'horseshoe-on', 'flag', 'trotting', 'lopparkiv', 'most-played']} />
                  </div>

                  {/* Weather */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Weather</h3>
                    <IconShowcase icons={['cloudy', 'partly-cloudy', 'rainy', 'sunny']} />
                  </div>

                  {/* Casino & Games */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Casino & Games</h3>
                    <IconShowcase icons={['casino', 'poker', 'bingo', 'roulette', 'blackjack', 'baccarat', 'dice', 'cards', 'all-card-games', 'classic-slots', 'video-slots', 'video-poker', 'table-games', 'live-casino', 'virtualsports', 'live-dealer', 'Casino_Superhero']} />
                  </div>

                  {/* User & Account */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">User & Account</h3>
                    <IconShowcase icons={['user', 'bank-account', 'balance', 'credit-card', 'deposit', 'withdrawal', 'transaction-history', 'bli-kund']} />
                  </div>

                  {/* Settings & Tools */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Settings & Tools</h3>
                    <IconShowcase icons={['settings', 'accessibility', 'calendar', 'calendar-day', 'calendar-week', 'calendar-month', 'clock', 'clock-simple', 'printer', 'code', 'components', 'QR', 'PiP']} />
                  </div>

                  {/* Media & Communication */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Media & Communication</h3>
                    <IconShowcase icons={['video-play', 'tv', 'rewind', 'play', 'volume-off', 'volume-low', 'volume-medium', 'volume-on', 'chat', 'chat-host', 'chat-robot', 'bell', 'reply']} />
                  </div>

                  {/* Shopping & Commerce */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Shopping & Commerce</h3>
                    <IconShowcase icons={['shopping-cart', 'card', 'coupon', 'coins', 'price-boost', 'subscription']} />
                  </div>

                  {/* Gaming Features */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Gaming Features</h3>
                    <IconShowcase icons={['all-games', 'all-sports', 'ready-games', 'check-games', 'competitions-offers', 'combine-markets', 'corners', 'coverage', 'coverage-active', 'live-dealer', 'players', 'results', 'scoreboard', 'slip', 'statistics', 'tournament', 'win', 'pulse']} />
                  </div>

                  {/* Svenska Spel Products */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Svenska Spel Products</h3>
                    <IconShowcase icons={['tips', 'andelsspel', 'systemspel', 'r-system', 'u-system', 'rows', 'singlerows', 'ten-papers', 'team', 'team-captain', 'spela-tillsammans', 'spelguide', 'spelkoll-care', 'spelpaus', 'var-spelkoll']} />
                  </div>

                  {/* Limits & Responsible Gaming */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Limits & Responsible Gaming</h3>
                    <IconShowcase icons={['deposit-limits', 'time-limit', 'loss-limit', 'self-test']} />
                  </div>

                  {/* Service & Support */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Service & Support</h3>
                    <IconShowcase icons={['customer-service', 'contact-us', 'selfservice-fail', 'selfservice-live', 'selfservice-loading', 'selfservice-pay', 'selfservice-success', 'sportservice']} />
                  </div>

                  {/* Content Categories */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Content Categories</h3>
                    <IconShowcase icons={['adventure', 'animals', 'asian', 'classics', 'christmas', 'curiosity', 'fantasy', 'pirates', 'prehistoric', 'sci-fi', 'simplicity', 'summer', 'Manga']} />
                  </div>

                  {/* Legal & Info */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Legal & Information</h3>
                    <IconShowcase icons={['terms-conditions', 'cookies', 'content', 'customized-content', 'supplier', 'brands', 'charity', 'business-travel', 'thumbs-up', 'beta']} />
                  </div>

                  {/* Other */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Other Icons</h3>
                    <IconShowcase icons={['.loading-placeholder', 'alphabetic', 'arena', 'rest', 'slider', 'pix!', 'pix!-pasen', 'rtp']} />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* Floating Action Bar - with button */}
      <div className="pb-6">
        <FloatingActionBar
          supportiveAction={
            <div className="relative">
              <div className="bg-[#faf6f3] p-3 rounded-lg">
                <div className="w-6 h-6">
                  <Basket />
                </div>
              </div>
            </div>
          }
          primaryAction={
            <Button
              variant="primary"
              size="medium"
              className="w-[160px] lg:w-[240px]"
              onClick={() => setBottomSheetOpen(true)}
            >
              Till kassan
            </Button>
          }
          badgeCount={4}
        />
      </div>

      {/* Bottom Sheet - Buy Flow */}
      <BottomSheet
        open={bottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
        title="Klar att spela?"
        description="Kolla igenom din varukorg så kör vi"
        hasFooter
        footer={
          <div className="flex gap-3">
            <Button variant="ghost" size="medium" onClick={() => setBottomSheetOpen(false)}>
              Avbryt
            </Button>
            <Button variant="primary" size="medium">
              Bekräfta köp
            </Button>
          </div>
        }
      >
        <div className="space-y-6">
          {/* Cart Items */}
          <div className="space-y-4">
            <h3 className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[16px] leading-[24px] text-[#1b1918]">
              Varukorg (4 artiklar)
            </h3>

            {[
              { name: 'Lotto rad', price: '25 kr', quantity: 2 },
              { name: 'Eurojackpot rad', price: '35 kr', quantity: 1 },
              { name: 'Vikinglotto rad', price: '20 kr', quantity: 1 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#faf6f3] rounded-lg">
                <div className="flex-1">
                  <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] text-[#1b1918]">
                    {item.name}
                  </p>
                  <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[12px] leading-[16px] text-[rgba(0,0,0,0.7)]">
                    Antal: {item.quantity}
                  </p>
                </div>
                <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] text-[#1b1918]">
                  {item.price}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* Summary */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] text-[rgba(0,0,0,0.7)]">
                Delsumma
              </p>
              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[14px] leading-[20px] text-[#1b1918]">
                105 kr
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[16px] leading-[24px] text-[#1b1918]">
                Totalt
              </p>
              <p className="font-['Svenska_Spel_Plan_Pro',sans-serif] text-[16px] leading-[24px] text-[#1b1918]">
                105 kr
              </p>
            </div>
          </div>
        </div>
      </BottomSheet>

      {/* Example with progress (uncomment to see) */}
      {/* <FloatingActionBar
        supportiveAction={
          <Button variant="ghost" size="medium">
            Cart
          </Button>
        }
        showProgress={true}
        progressValue={30}
        progressSum="150 kr"
        badgeCount={4}
      /> */}

      {/* Dialog - Desktop Layout */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Är du säker?"
        description="Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt."
        icon={<Information className="size-full text-[#1B1918]" />}
        mobile={false}
      >
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="small" onClick={() => setDialogOpen(false)}>
            Avbryt
          </Button>
          <div className="flex gap-2">
            <Button variant="neutral" size="small" onClick={() => setDialogOpen(false)}>
              Läs mer
            </Button>
            <Button variant="primary" size="small" onClick={() => setDialogOpen(false)}>
              Fortsätt
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Dialog - Mobile Layout */}
      <Dialog
        open={dialogMobileOpen}
        onClose={() => setDialogMobileOpen(false)}
        title="Är du säker?"
        description="Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt."
        icon={<Information className="size-full text-[#1B1918]" />}
        mobile={true}
      >
        <DialogFooter mobile={true}>
          <Button variant="primary" size="small" fullWidth onClick={() => setDialogMobileOpen(false)}>
            Fortsätt
          </Button>
          <Button variant="neutral" size="small" fullWidth onClick={() => setDialogMobileOpen(false)}>
            Läs mer
          </Button>
          <Button variant="ghost" size="small" fullWidth onClick={() => setDialogMobileOpen(false)}>
            Avbryt
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Dialog - Desktop Scrollable */}
      <Dialog
        open={dialogScrollableOpen}
        onClose={() => setDialogScrollableOpen(false)}
        title="Är du säker?"
        description="Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt. Ta en titt på informationen här nedan innan du fortsätter. Det här kan påverka dina aktiva spel, prenumerationer och inställningar. Är du osäker? Hör av dig till vår kundtjänst så hjälper vi dig! Du kan alltid backa och kolla igenom dina val en gång till. Tänk på att vissa ändringar händer direkt medan andra kan ta upp till 24 timmar. Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt. Ta en titt på informationen här nedan innan du fortsätter. Det här kan påverka dina aktiva spel, prenumerationer och inställningar. Är du osäker? Hör av dig till vår kundtjänst så hjälper vi dig! Du kan alltid backa och kolla igenom dina val en gång till."
        icon={<Information className="size-full text-[#1B1918]" />}
        mobile={false}
        scrollable={true}
      >
        <div className="flex justify-between items-center w-full">
          <Button variant="ghost" size="small" onClick={() => setDialogScrollableOpen(false)}>
            Avbryt
          </Button>
          <div className="flex gap-2">
            <Button variant="neutral" size="small" onClick={() => setDialogScrollableOpen(false)}>
              Läs mer
            </Button>
            <Button variant="primary" size="small" onClick={() => setDialogScrollableOpen(false)}>
              Fortsätt
            </Button>
          </div>
        </div>
      </Dialog>

      {/* Dialog - Mobile Scrollable */}
      <Dialog
        open={dialogScrollableMobileOpen}
        onClose={() => setDialogScrollableMobileOpen(false)}
        title="Är du säker?"
        description="Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt. Ta en titt på informationen här nedan innan du fortsätter. Det här kan påverka dina aktiva spel, prenumerationer och inställningar. Är du osäker? Hör av dig till vår kundtjänst så hjälper vi dig! Du kan alltid backa och kolla igenom dina val en gång till. Tänk på att vissa ändringar händer direkt medan andra kan ta upp till 24 timmar. Vi vill bara dubbelkolla att du är säker. Vissa saker går inte att ångra efteråt. Ta en titt på informationen här nedan innan du fortsätter. Det här kan påverka dina aktiva spel, prenumerationer och inställningar. Är du osäker? Hör av dig till vår kundtjänst så hjälper vi dig! Du kan alltid backa och kolla igenom dina val en gång till."
        icon={<Information className="size-full text-[#1B1918]" />}
        mobile={true}
        scrollable={true}
      >
        <DialogFooter mobile={true}>
          <Button variant="primary" size="small" fullWidth onClick={() => setDialogScrollableMobileOpen(false)}>
            Fortsätt
          </Button>
          <Button variant="neutral" size="small" fullWidth onClick={() => setDialogScrollableMobileOpen(false)}>
            Läs mer
          </Button>
          <Button variant="ghost" size="small" fullWidth onClick={() => setDialogScrollableMobileOpen(false)}>
            Avbryt
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        variant={snackbarVariant}
        action={snackbarAction}
      >
        {snackbarMessage}
      </Snackbar>
    </div>
  );
}
