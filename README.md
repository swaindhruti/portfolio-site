# Developer Portfolio

A modern, responsive developer portfolio built with Next.js and enhanced with Vanta.js animations.

## 🚀 Features

- **Interactive 3D Backgrounds** powered by Vanta.js
- **Responsive Design** for all devices
- **Performance Optimized** with Next.js
- **SEO Friendly** structure
- **Project Showcase** with filterable categories

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Vanta.js](https://www.vantajs.com/)
- **Package Manager**: [Yarn](https://yarnpkg.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

- Node.js (v14.0 or later)
- Yarn package manager

## 🏗️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   ```

4. **Open your browser**

   The site will be running at [http://localhost:3000](http://localhost:3000)

## 🎨 Vanta.js Setup

This project uses Vanta.js to create interactive 3D backgrounds. The animations are configured in the `animations` directory.

```javascript
// Example Vanta.js configuration
"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

import { ReactNode } from "react";

export default function VantaBackground({ children }: { children: ReactNode }) {
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof FOG> | null>(
    null
  );
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xffeccc,
          midtoneColor: 0xffc2bd,
          lowlightColor: 0xcec4ff,
          baseColor: 0xffffff,
          blurFactor: 0.6,
          speed: 1,
          zoom: 1,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      {/* Fixed background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* Scrollable content container */}
      <div className="relative z-10">{children}</div>
    </>
  );
}
```

## 📝 Available Scripts

- `yarn dev` - Start the development server
- `yarn build` - Build the application for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint
- `yarn test` - Run tests

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

- **Your Name** - [GitHub Profile](https://github.com/yourusername)
- Portfolio: [yourportfolio.com](https://yourportfolio.com)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

⭐️ From [yourusername](https://github.com/yourusername)

```

```
