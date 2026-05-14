export type MakeKitComponentStatus =
  | "ready"
  | "partial"
  | "docs-only"
  | "not-supported"
  | "missing";

export type MakeKitComponentPriority = "high" | "medium" | "low";

export interface MakeKitComponentManifestEntry {
  name: string;
  figmaName?: string;
  status: MakeKitComponentStatus;
  priority: MakeKitComponentPriority;
  source?: string;
  figmaMetadata?: string;
  docs?: string;
  notes?: string;
}

export interface MakeKitManifest {
  name: string;
  figmaLibrary: string;
  figmaLibraryUrl: string;
  makeKitUrl: string;
  tokenSources: {
    canonicalRoot?: string;
    designTokensIndex?: string;
    globals?: string;
    primitivesIndex?: string;
    productPrimitivesRoot?: string;
    parentThemeRoot?: string;
    productThemeRoot?: string;
    semanticCssBridge?: string;
    componentCssBridge?: string;
    generatedImports?: string;
  };
  generatedImportsPolicy: string;
  components: MakeKitComponentManifestEntry[];
}

export const svsUiNovaManifest: MakeKitManifest = {
  name: "SvS UI Nova Make Kit",
  figmaLibrary: "SvS UI (nova)",
  figmaLibraryUrl:
    "https://www.figma.com/design/OQpwpaJZzLCQG8JkGAnbeJ/SvS-UI--nova-",
  makeKitUrl:
    "https://www.figma.com/make/rCQbYmSkHVcvlC97il4nwB/SvS-UI--nova-",
  tokenSources: {
    canonicalRoot: "src/design-tokens",
    designTokensIndex: "src/design-tokens/index.json",
    globals: "src/design-tokens/globals/colors.json",
    primitivesIndex: "src/design-tokens/primitives/index.json",
    productPrimitivesRoot: "src/design-tokens/primitives/colors/products",
    parentThemeRoot: "src/design-tokens/themes/svenska-spel",
    productThemeRoot: "src/design-tokens/products",
    semanticCssBridge: "src/styles/theme.css",
    componentCssBridge: "src/SvsUiNova/styles.css",
    generatedImports: "src/imports/_generated/Mode_1.tokens.json",
  },
  generatedImportsPolicy:
    "Generated Figma exports are migration inputs only. Do not import them directly in demos or user-facing Make Kit components.",
  components: [
    {
      name: "Button",
      figmaName: "Button",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Button.tsx",
      figmaMetadata: "src/SvsUiNova/components/Button.figma.tsx",
      docs: "guidelines/components/Button.md",
      notes: "Metadata is present. Verify full variant parity and reduce hardcoded token drift before promoting to ready.",
    },
    {
      name: "IconButton",
      figmaName: "Icon Button",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/IconButton.tsx",
      figmaMetadata: "src/SvsUiNova/components/IconButton.figma.tsx",
      docs: "ICON_BUTTON_IMPLEMENTATION.md",
      notes: "Metadata is present. Confirm docs location and verify design-system parity.",
    },
    {
      name: "Accordion",
      figmaName: "Accordion",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Accordion.tsx",
      figmaMetadata: "src/SvsUiNova/components/Accordion.figma.tsx",
      docs: "guidelines/components/Accordion.md",
    },
    {
      name: "Select",
      figmaName: "Select",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Select.tsx",
      figmaMetadata: "src/SvsUiNova/components/Select.figma.tsx",
      docs: "guidelines/components/Select.md",
    },
    {
      name: "Badge",
      figmaName: "Badge",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Badge.tsx",
      figmaMetadata: "src/SvsUiNova/components/Badge.figma.tsx",
      docs: "guidelines/components/Badge.md",
    },
    {
      name: "Input",
      figmaName: "Input",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Input.tsx",
      figmaMetadata: "src/SvsUiNova/components/Input.figma.tsx",
      docs: "guidelines/components/Input.md",
      notes: "Metadata is present. Verify helper and error states and reduce hardcoded token usage.",
    },
    {
      name: "Checkbox",
      figmaName: "Checkbox",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Checkbox.tsx",
      figmaMetadata: "src/SvsUiNova/components/Checkbox.figma.tsx",
      docs: "guidelines/components/Checkbox.md",
      notes: "Metadata is present but still marked with a node-id TODO. Verify checked, indeterminate, and disabled states.",
    },
    {
      name: "RadioGroup",
      figmaName: "Radio",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/RadioGroup.tsx",
      figmaMetadata: "src/SvsUiNova/components/RadioGroup.figma.tsx",
      docs: "guidelines/components/RadioGroup.md",
      notes: "Metadata is present but still marked with a node-id TODO. Document grouped value behavior.",
    },
    {
      name: "Switch",
      figmaName: "Switch",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Switch.tsx",
      figmaMetadata: "src/SvsUiNova/components/Switch.figma.tsx",
      docs: "guidelines/components/Switch.md",
      notes: "Metadata is present. Reduce hardcoded color usage before promoting to ready.",
    },
    {
      name: "Slider",
      figmaName: "Slider",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Slider.tsx",
      figmaMetadata: "src/SvsUiNova/components/Slider.figma.tsx",
      docs: "guidelines/components/Slider.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Tabs",
      figmaName: "Tabs",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Tabs.tsx",
      figmaMetadata: "src/SvsUiNova/components/Tabs.figma.tsx",
      docs: "guidelines/components/Tabs.md",
      notes: "Metadata is present. Verify token alignment and selected-state parity.",
    },
    {
      name: "TabsMenu",
      figmaName: "Tabs menu",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/TabsMenu.tsx",
      figmaMetadata: "src/SvsUiNova/components/TabsMenu.figma.tsx",
      docs: "guidelines/components/TabsMenu.md",
      notes: "Metadata is present. Verify naming and variant parity against the DS component.",
    },
    {
      name: "Card",
      figmaName: "Card",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Card.tsx",
      figmaMetadata: "src/SvsUiNova/components/Card.figma.tsx",
      docs: "guidelines/components/Cards.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Callout",
      figmaName: "Call Out",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Callout.tsx",
      figmaMetadata: "src/SvsUiNova/components/Callout.figma.tsx",
      docs: "guidelines/components/Callout.md",
      notes: "Metadata is present. Verify prop mapping against DS naming.",
    },
    {
      name: "Dialog",
      figmaName: "Dialog",
      status: "partial",
      priority: "high",
      source: "src/SvsUiNova/components/Dialog.tsx",
      figmaMetadata: "src/SvsUiNova/components/Dialog.figma.tsx",
      docs: "guidelines/components/Dialog.md",
      notes: "Metadata is present but still marked with a node-id TODO. Verify action rules.",
    },
    {
      name: "BottomSheet",
      figmaName: "Bottom Sheet",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/BottomSheet.tsx",
      figmaMetadata: "src/SvsUiNova/components/BottomSheet.figma.tsx",
      docs: "guidelines/components/BottomSheet.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Popover",
      figmaName: "Popover",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Popover.tsx",
      figmaMetadata: "src/SvsUiNova/components/Popover.figma.tsx",
      docs: "guidelines/components/Popover.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Tooltip",
      figmaName: "Tooltip",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Tooltip.tsx",
      figmaMetadata: "src/SvsUiNova/components/Tooltip.figma.tsx",
      docs: "guidelines/components/Tooltip.md",
      notes: "Metadata is present. Verify DS naming and state parity.",
    },
    {
      name: "FloatingActionBar",
      figmaName: "Floating Action Bar",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/FloatingActionBar.tsx",
      figmaMetadata: "src/SvsUiNova/components/FloatingActionBar.figma.tsx",
      docs: "guidelines/components/FloatingActionBar.md",
      notes: "Metadata is present. Reduce hardcoded color usage before promoting to ready.",
    },
    {
      name: "Progress",
      figmaName: "progress",
      status: "partial",
      priority: "low",
      source: "src/SvsUiNova/components/Progress.tsx",
      notes: "Implemented without .figma.tsx metadata. Decide whether it should be Make-exposed.",
    },
    {
      name: "Snackbar",
      figmaName: "Snackbar",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Snackbar.tsx",
      figmaMetadata: "src/SvsUiNova/components/Snackbar.figma.tsx",
      docs: "guidelines/components/Snackbar.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Separator",
      figmaName: "Separator",
      status: "partial",
      priority: "low",
      source: "src/SvsUiNova/components/Separator.tsx",
      figmaMetadata: "src/SvsUiNova/components/Separator.figma.tsx",
      docs: "guidelines/components/Separator.md",
      notes: "Metadata is present. Decide whether separator should remain part of the public Make surface.",
    },
    {
      name: "Avatar",
      figmaName: "Avatar",
      status: "partial",
      priority: "low",
      source: "src/SvsUiNova/components/Avatar.tsx",
      figmaMetadata: "src/SvsUiNova/components/Avatar.figma.tsx",
      docs: "guidelines/components/Avatar.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Table",
      figmaName: "Simple Table-Template",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/Table.tsx",
      figmaMetadata: "src/SvsUiNova/components/Table.figma.tsx",
      docs: "guidelines/components/Table.md",
      notes: "Metadata is present. Clarify simple table vs full table semantics.",
    },
    {
      name: "ToggleGroup",
      figmaName: "Toggle group",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/ToggleGroup.tsx",
      figmaMetadata: "src/SvsUiNova/components/ToggleGroup.figma.tsx",
      docs: "guidelines/components/ToggleGroup.md",
      notes: "Metadata is present. Verify prop mapping and token alignment.",
    },
    {
      name: "DatePicker",
      figmaName: "DatePicker",
      status: "partial",
      priority: "medium",
      source: "src/SvsUiNova/components/DatePicker.tsx",
      figmaMetadata: "src/SvsUiNova/components/DatePicker.figma.tsx",
      docs: "guidelines/components/DatePicker.md",
      notes: "Metadata is present but still marked with a node-id TODO.",
    },
    {
      name: "Textarea",
      figmaName: "Textarea",
      status: "missing",
      priority: "high",
      docs: "guidelines/components/Input.md",
      notes: "Known DS component family gap for Make. Add implementation or document as unsupported.",
    },
    {
      name: "Combobox",
      figmaName: "Combobox / Popover Example",
      status: "missing",
      priority: "high",
      notes: "Known DS component gap for Make.",
    },
    {
      name: "BetButton",
      figmaName: "Bet button",
      status: "docs-only",
      priority: "high",
      docs: "guidelines/components/BetButton.md",
      notes: "Guidelines visible, Make-ready implementation not yet confirmed.",
    },
    {
      name: "BetPrediction",
      figmaName: "Bet prediction",
      status: "docs-only",
      priority: "medium",
      docs: "guidelines/components/BetPrediction.md",
      notes: "Guidelines visible, Make-ready implementation not yet confirmed.",
    },
    {
      name: "PriceLabel",
      figmaName: "Price Label",
      status: "docs-only",
      priority: "medium",
      docs: "guidelines/components/Pricelabel.md",
      notes: "Guidelines visible, Make-ready implementation not yet confirmed.",
    },
    {
      name: "ComposableModal",
      figmaName: "Composable Modal",
      status: "docs-only",
      priority: "medium",
      docs: "guidelines/components/ComposableModal.md",
      notes: "Guidelines visible, Make-ready implementation not yet confirmed.",
    },
    {
      name: "SideSheet",
      figmaName: "Side Sheet",
      status: "missing",
      priority: "medium",
      notes: "Known DS component gap for Make.",
    },
  ],
};

export const makeKitReadyComponents = svsUiNovaManifest.components.filter(
  component => component.status === "ready",
);

export const makeKitPartialComponents = svsUiNovaManifest.components.filter(
  component => component.status === "partial",
);

export const makeKitGaps = svsUiNovaManifest.components.filter(component =>
  ["docs-only", "missing", "not-supported"].includes(component.status),
);
