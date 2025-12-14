# 🎁 Shree Parshva Gifts - Premium Gifting Platform

An elegant e-commerce platform for custom hampers, corporate gifts, trousseau packing, and dry fruit boxes. Built with Next.js and Tailwind CSS, featuring interactive multi-step customization wizards and WhatsApp integration.

**Live Project:** [https://github.com/Dhvanish07/SHREE-PARSHVA-GIFTS](https://github.com/Dhvanish07/SHREE-PARSHVA-GIFTS)

---

## ✨ Features

### 🎨 4 Customization Paths

1. **Hamper Customizer** (`/hampers`)
   - 6-step wizard for creating personalized hampers
   - Select from predefined items or add custom items
   - Choose packing type, customization notes
   - Full review before adding to cart

2. **Corporate Gifting** (`/corporate`)
   - 4-step wizard for B2B gifting solutions
   - Specify recipient type, gift preferences
   - Custom pricing and quantity selection
   - Perfect for employee & client gifts

3. **Trousseau Packing** (`/trousseau`)
   - 4-step wizard for wedding trousseau
   - 10 predefined trousseau items (sarees, lehengas, jewelry, etc.)
   - Multiple packing types (Standard, Premium, Eco-Friendly, Luxury, Custom)
   - Custom items with quantity controls
   - Special customization notes for weddings

4. **Dry Fruits Boxes** (`/dryfruits`)
   - 6-step customization for premium dry fruit selections
   - Multiple variety packing options
   - Customizable gift messages
   - Elegant packaging choices

### 📦 Unified Shopping Cart
- Centralized cart system using localStorage
- Displays all product types in one place
- Persistent storage across sessions
- View cart at `/cart`

### 📱 WhatsApp Integration
- Direct inquiry button on all customizers
- Auto-formatted messages with complete product details
- Business WhatsApp: 919421246733
- Instant communication with customers

### 📄 Additional Pages
- **Home** (`/`) - Hero section, collections, featured products, why choose us
- **About** (`/about`) - Company story, timeline, values, contact information
- **Customer Stories** (`/customer-stories`) - 25+ customer reviews, carousel & grid layouts
- **Navigation** - All pages linked in header
- **Footer** - Instagram social link

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (useState)
- **Storage:** Browser localStorage
- **Images:** Next.js Image optimization
- **Icons:** Lucide React
- **Integration:** WhatsApp Business API
- **Version Control:** Git + GitHub

---

## 🎨 Design System

**Color Scheme:**
- Primary Pink: `#EC4899`
- Secondary Blue: `#3B82F6`
- Gradients: Pink → Blue throughout
- Dark Text: `#111827` (gray-900)
- Light Background: `#F3F4F6` (gray-50)

**Typography:**
- Bold headings for section titles
- Clear descriptions for product details
- Readable font sizes across all devices

**Responsive Design:**
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly buttons and inputs

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dhvanish07/SHREE-PARSHVA-GIFTS.git
cd SHREE-PARSHVA-GIFTS
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── about/page.tsx           # About page
│   ├── corporate/page.tsx       # Corporate gifting wizard
│   ├── customizer/page.tsx      # Hamper customizer (legacy)
│   ├── dryfruits/page.tsx       # Dry fruits wizard
│   ├── hampers/page.tsx         # Hamper customizer
│   ├── trousseau/page.tsx       # Trousseau packing wizard
│   └── cart/page.tsx            # Shopping cart
├── components/
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx               # Footer component
│   └── ...                      # Other reusable components
└── ...

public/
├── media/                       # Product images
│   ├── hamm.jpeg
│   ├── executive.jpeg
│   ├── Dryfruitbox.jpeg
│   ├── Trousseau Packing.jpeg
│   └── ...                      # More media files
└── ...
```

---

## 💾 Data Structure

### Selection Interface (Customizers)
```typescript
interface Selection {
  // Predefined items with quantities
  items: { [key: string]: number };
  
  // Custom user-added items
  customItems: Array<{
    id: string;
    name: string;
    quantity: number;
  }>;
  
  // Selected options
  packingType: string | null;
  packingTypeOther: string;
  customizationNotes: string;
  
  // Additional fields vary by product type
}
```

### Cart Storage
```typescript
interface CartItem {
  id: string;
  type: 'hamper' | 'corporate' | 'trousseau' | 'dryfruits';
  selection: Selection;
  timestamp: number;
}
```

Stored in localStorage under key: `hamperCart`

---

## 🔄 Customization Wizard Pattern

All customizers follow a consistent pattern:

1. **Selection Phase** - Choose items, quantities
2. **Options Phase** - Select packaging, type, preferences
3. **Customization Phase** - Add special notes/requests
4. **Review Phase** - Verify selections, add to cart or send WhatsApp inquiry

Each step includes:
- ✅ Validation (prevent empty submissions)
- 🎨 Consistent UI styling
- ⬅️ Back/Next navigation
- 📱 Mobile responsive

---

## 🎯 Key Features Explained

### Multi-Step Wizards
- Progress indicators showing current step
- Validation before advancing
- Back navigation to edit selections
- Summary of choices before finalization

### Custom Items Management
- Add unlimited custom items
- Quantity controls (−/+ buttons or direct input)
- Remove items individually
- Total counter display

### WhatsApp Integration
- Auto-formatted inquiry messages
- Includes all selected items and customization
- Direct link to WhatsApp Business
- One-click inquiry submission

### Responsive Images
- Next.js Image optimization
- Automatic WebP conversion
- Lazy loading
- Responsive breakpoints

---

## 🔐 localStorage Keys

- `hamperCart` - Stores all cart items (all product types)

---

## 📞 Contact & Support

**WhatsApp Business:** 919421246733  
**Instagram:** @shreeparshvagifts  

---

## 📝 License

This project is proprietary and not open for public modification without permission.

---

## 🤝 Contributing

For feature requests or bug reports, please contact the development team via WhatsApp.

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Hosting
- Build: `npm run build`
- Start: `npm start`
- Ensure Node.js 18+ is available

---

## 📊 Performance

- ⚡ Server-side rendering with Next.js
- 🖼️ Image optimization
- 💾 Local state management
- 🔄 Efficient re-renders with React hooks

---

**Built with ❤️ for Shree Parshva Gifts**
