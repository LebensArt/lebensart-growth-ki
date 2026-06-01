# LebensArt Growth KI

Private Marketing-Web-App für LebensArt Solothurn.

## Enthalten

- Dashboard
- Ziele
- Kurse
- Postingplan
- Content Creator
- Ads Manager
- Insights
- Wissen
- Aufträge an App 2
- OpenAI API Route
- Supabase Schema
- LebensArt Logo
- Handy-optimiertes Design

## Installation lokal

```bash
npm install
npm run dev
```

## Vercel Deploy

1. Projekt auf GitHub hochladen
2. In Vercel importieren
3. Environment Variables setzen:

```bash
OPENAI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

4. Deploy drücken

## Supabase

In Supabase SQL Editor die Datei ausführen:

```bash
database/schema.sql
```

Ohne OPENAI_API_KEY läuft die App mit Demo-Ausgaben.
Mit OPENAI_API_KEY erstellt sie echte KI-Ausgaben nach den LebensArt-Regeln.
