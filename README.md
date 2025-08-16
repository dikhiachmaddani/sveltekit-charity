# 🎗️ Charity Donation Platform

A modern, responsive web application built with SvelteKit for managing and donating to charitable causes. This platform enables users to browse charity projects, view donation progress, and make secure payments through Midtrans integration.

## ✨ Features

- **Charity Discovery**: Browse and explore various charity projects with detailed information
- **Progress Tracking**: Visual representation of donation progress with pledged vs. target amounts
- **Secure Payments**: Integrated payment processing through Midtrans payment gateway
- **Responsive Design**: Modern, mobile-friendly interface built with Bootstrap and custom CSS
- **Real-time Updates**: Dynamic content updates and real-time donation tracking
- **User Profiles**: Charity organizer profiles with photos and project details
- **Category Filtering**: Organized charity projects by categories (Money, Education, etc.)

## 🛠️ Tech Stack

### Frontend
- **SvelteKit 2.31.0** - Full-stack web framework
- **Svelte 5.0.0** - Component framework
- **TypeScript 5.0.0** - Type-safe JavaScript
- **Vite 7.0.4** - Build tool and dev server
- **Bootstrap 5** - CSS framework for responsive design
- **Font Awesome** - Icon library

### Backend & Services
- **Netlify Functions** - Serverless backend functions
- **Midtrans** - Payment gateway integration
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd charity
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MIDTRANS_SERVER_KEY=your_midtrans_server_key
   MIDTRANS_CLIENT_KEY=your_midtrans_client_key
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
charity/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CharityList.svelte
│   │   ├── Header.svelte
│   │   ├── Footer.svelte
│   │   ├── Modal.svelte
│   │   └── Welcome.svelte
│   ├── data/               # Static data and mock content
│   │   └── charities.ts
│   ├── domain/             # TypeScript type definitions
│   │   └── CharitiesType.ts
│   ├── lib/                # Assets and utilities
│   │   ├── assets/         # CSS, images, fonts
│   │   └── index.ts
│   └── routes/             # Page routes and layouts
│       ├── +layout.svelte
│       ├── +page.svelte
│       ├── about/
│       ├── contact/
│       ├── donation/
│       ├── success/
│       └── failure/
├── netlify/                # Netlify configuration
│   ├── functions/          # Serverless functions
│   │   ├── hello.ts
│   │   └── payment.ts
│   └── netlify.toml
├── static/                 # Static assets
└── package.json
```

## 🔧 Available Scripts

- **`pnpm dev`** - Start development server
- **`pnpm build`** - Build for production
- **`pnpm preview`** - Preview production build
- **`pnpm check`** - Type check and lint code
- **`pnpm format`** - Format code with Prettier
- **`pnpm lint`** - Run ESLint
- **`pnpm test`** - Run unit tests
- **`pnpm test:unit`** - Run tests in watch mode

## 💳 Payment Integration

The platform integrates with Midtrans payment gateway for secure donation processing:

- **Sandbox Mode**: Configured for development and testing
- **Production Mode**: Ready for live deployment
- **Multiple Payment Methods**: Credit cards, bank transfers, and more
- **Secure Transactions**: PCI DSS compliant payment processing

### Payment Flow
1. User selects a charity project
2. Enters donation amount and personal details
3. Payment request is sent to Netlify function
4. Midtrans payment page is generated
5. User completes payment
6. Success/failure page is displayed

## 🚀 Deployment

### Netlify (Recommended)
This project is configured for Netlify deployment:

1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
pnpm build
# Deploy the contents of the 'build' directory
```

## 🧪 Testing

```bash
# Run unit tests
pnpm test:unit

# Run tests in watch mode
pnpm test:unit -- --watch

# Run all tests
pnpm test
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🎨 Customization

### Themes
Multiple color themes are available in `src/lib/assets/css/colors/`:
- Color schemes 1-7 for different visual styles
- Easy theme switching capability
- Consistent design system

### Styling
- Bootstrap 5 for layout and components
- Custom CSS for charity-specific styling
- Font Awesome icons for enhanced UI
- Responsive grid system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [Midtrans](https://midtrans.com/) for payment processing
- [Netlify](https://netlify.com/) for hosting and serverless functions
- [Bootstrap](https://getbootstrap.com/) for the responsive design system

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

---

**Made with ❤️ for making the world a better place through charitable giving.**
