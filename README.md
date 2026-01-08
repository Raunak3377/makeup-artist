
# 💄 Indian Artist Portfolio Network

A world-class, production-ready portfolio platform designed for high-end Makeup Artists in India. This platform is built for speed, SEO dominance, and a premium user experience.

## 🚀 Key Features

- **SEO Architecture**: Dynamic Meta tags, JSON-LD Structured Data, and Semantic HTML for top Google rankings.
- **Direct WhatsApp Leads**: Contact forms that send formatted inquiries directly to the artist's phone.
- **Config-Driven Themes**: Choose between `Royal`, `Modern`, `Minimal`, and `Avant-Garde` personalities.
- **Zero-Build Speed**: Uses browser-native ESM and `esm.sh` for lightning-fast delivery without heavy build steps.
- **Performance Optimized**: Intelligent lazy-loading (LCP eager loading) and async decoding.
- **Interactive Showcases**: Real-time Before/After sliders and multi-category portfolios.

## 🛠 Project Structure

- `index.html`: Entry point with Import Maps.
- `App.tsx`: Routing and Global SEO logic.
- `constants.tsx`: **The Source of Truth.** Add or edit artist profiles here.
- `types.ts`: TypeScript definitions for the configuration engine.
- `components/`: Modular, theme-aware UI components.

## 📈 SEO Configuration

To rank for a new artist:
1. Open `constants.tsx`.
2. Update the `seoTitle` and `seoDescription`.
3. Ensure the `city` and `specialty` fields are accurate.
4. The platform automatically generates `LocalBusiness` schema for Google.

## 🚢 Deployment (Vercel)

1. Push this code to a **GitHub** repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect the static configuration and deploy.

## 🎨 Adding an Artist

Simply add a new entry to the `ARTISTS` object in `constants.tsx`:

```typescript
'artist-slug': {
  name: 'Full Name',
  city: 'City Name',
  personality: 'royal' | 'modern' | 'minimal' | 'avantgarde',
  // ... rest of the config
}
```

## 📄 License

MIT
