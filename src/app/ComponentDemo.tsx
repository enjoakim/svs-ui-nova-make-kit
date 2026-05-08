import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge, Checkbox, Select } from '@/SvsUiNova/components';
import { useState } from 'react';

export default function ComponentDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [country, setCountry] = useState('se');

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-4">SVS UI (NOVA) KOMPONENTER</h1>
          <p className="text-muted-foreground">
            Demonstration av komponentbiblioteket
          </p>
        </div>

        {/* Buttons */}
        <section className="space-y-6">
          <h3>Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="primary" disabled>Disabled Button</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
          <Button variant="primary" fullWidth>Full Width Button</Button>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <h3>Badges</h3>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Form Components */}
        <section className="space-y-6">
          <h3>Form Components</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="E-postadress"
              type="email"
              placeholder="din@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText="Vi delar aldrig din e-postadress"
            />
            <Input
              label="Lösenord"
              type="password"
              placeholder="Minst 8 tecken"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Med fel"
              type="text"
              error
              helperText="Detta fält krävs"
              placeholder="Felaktigt värde"
            />
            <Select
              label="Land"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              options={[
                { value: 'se', label: 'Sverige' },
                { value: 'no', label: 'Norge' },
                { value: 'dk', label: 'Danmark' },
                { value: 'fi', label: 'Finland' },
              ]}
            />
          </div>
          <Checkbox
            label="Jag accepterar villkoren och bekräftar att jag är minst 18 år"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h3>Cards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Standard Card</CardTitle>
                <CardDescription>
                  En enkel kort komponent med header, innehåll och footer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Detta är kortets innehåll. Här kan du placera vilken komponent som helst.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Läs mer</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle>Elevated Card</CardTitle>
                  <Badge variant="primary">Ny</Badge>
                </div>
                <CardDescription>
                  Ett kort med skuggeffekt för att lyfta fram innehållet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Denna variant använder skuggor för att skapa djup och hierarki.
                </p>
                <div className="flex gap-2">
                  <Badge>Tag 1</Badge>
                  <Badge variant="outline">Tag 2</Badge>
                  <Badge variant="success">Aktiv</Badge>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="primary" size="sm">Primär</Button>
                <Button variant="ghost" size="sm">Sekundär</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="space-y-6">
          <h3>Komplett Formulär Exempel</h3>
          <Card>
            <CardHeader>
              <CardTitle>Skapa konto</CardTitle>
              <CardDescription>
                Fyll i dina uppgifter för att komma igång med Svenska Spel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Förnamn" placeholder="Ditt förnamn" />
                <Input label="Efternamn" placeholder="Ditt efternamn" />
              </div>
              <Input
                label="E-postadress"
                type="email"
                placeholder="din@email.com"
              />
              <Input
                label="Mobilnummer"
                type="tel"
                placeholder="070 123 45 67"
              />
              <Input
                label="Lösenord"
                type="password"
                placeholder="Minst 8 tecken"
                helperText="Använd minst 8 tecken med blandade stora och små bokstäver samt siffror"
              />
              <Checkbox label="Jag accepterar villkoren och bekräftar att jag är minst 18 år" />
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button variant="primary" fullWidth>
                Skapa konto
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Har du redan ett konto?{' '}
                <a href="#" className="text-primary hover:underline">
                  Logga in
                </a>
              </p>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
}
