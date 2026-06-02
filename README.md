# Keyan Institute of Professional Studies (KIPS)

A high-fidelity, modern, single-page web platform and online admissions portal for the **Keyan Institute of Professional Studies (KIPS)**. This project is a prominent educational platform under the **Mashal Technical Education System**, showcasing the institute's academic programs, vocational training, regional campus network, and specialized seminars led by industry professionals.

---

## 🚀 Key Features

* **Single-Page Application (SPA)**: Smooth interactive sections with hash-linked navigation (`#home`, `#programs`, `#news`, `#affiliations`, `#branches`, `#contact`).
* **Dynamic Admissions & Enrollment**: A premium glassmorphic modal form that collects student applications and submits them via a JSON API.
* **Comprehensive Program Catalog**:
  * **IT & Digital Skills**: Computer AI Tools, CIT, DIT, Graphic Designing.
  * **Professional Diplomas**: Safety Officer, Montessori Diploma, Spoken English.
  * **Academic Pathways**: B.Ed (1.5 / 2.5 Years), ADA (Associate Degree in Arts), ADS (Associate Degree in Science), FA/FSc coaching.
  * **Vocational Training**: Dress Designing, Beautician training, and Nursery-to-FSc tuition support.
  * **Psychology & Parenting Seminars**: Professional guidance and seminars on child behavior, learning dynamics, and educational issues conducted by Dr. Mudassar.
  * **Special Seminars**: Test preparations (ETEA/NTS), Cadet College entrance and interview preparation, and advanced English grammar.
* **Extensive Branch Directory**: Detailed network covering Abbottabad, Haripur (Shah Maqsood Campus), Mansehra, Shinkiari, Baffa, Mirpur (AJ&K), and Garhi Habibullah.
* **Board & University Affiliations**: Built-in support for showcasing regional accreditations, including AIOU Islamabad, Trade Testing Board, SDC Peshawar, KPBTE Peshawar, Sarhad University Peshawar, and Mashal Technical Education System.
* **Premium Theme**: Tailored Tailwind CSS v4 design with custom colors, dark-teal gradients, and micro-animations.

---

## 📁 Project Architecture & Directory Structure

```
kips/
├── public/                # Static assets (Logos, branding banners, and icons)
│   ├── logos/             # Affiliated boards/university logos
│   └── KIPSLOGO(C).png    # Main institute logo
├── scripts/               # Developer automation scripts
│   ├── create-banner.js   # Script to generate banner assets
│   └── svg-to-png.js      # Utility converting SVG vector logos to PNG format
├── src/
│   ├── app/               # Next.js App Router root directory
│   │   ├── api/enroll/    # API endpoints
│   │   │   └── route.ts   # Enrollment POST endpoint (validates and processes signups)
│   │   ├── globals.css    # Tailwind CSS v4 directives, custom styles, and root variables
│   │   ├── layout.tsx     # Site structure containing Google fonts (Inter & Playfair Display) & SEO Meta
│   │   └── page.tsx       # Main Page component ("use client") integrating all UI sections
│   └── components/        # Reusable presentation components
│       ├── Navbar.tsx     # Responsive sticky header and navigation menu
│       ├── Hero.tsx       # Hero section with Urdu/English call-outs & Admissions Open alert
│       ├── Programs.tsx   # Grouped catalog of all educational courses & academic warnings
│       ├── Affiliations.tsx# Affiliated universities, trade testing boards, and parent systems
│       ├── BranchNetwork.tsx# Branch selector & campus locations (visual list)
│       ├── ContactCTA.tsx # Quick WhatsApp links and direct emailing details
│       ├── EnrollmentModal.tsx # Interactive glassmorphic modal with enrollment form
│       └── Footer.tsx     # Bottom navigation directory, social links, and copyrights
├── tailwind.config.ts     # Deprecated fallback/IDE autocomplete configuration for Tailwind
├── postcss.config.mjs     # PostCSS setup running @tailwindcss/postcss
└── tsconfig.json          # TypeScript configurations (with @/* paths pointing to ./src/*)
```

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
* **Logic/Languages**: [TypeScript](https://www.typescriptlang.org/) / [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS
* **Image Compression**: `sharp` for optimized production assets

---

## 📦 Getting Started

### Prerequisites

* Node.js 18.x or later
* npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 🔄 API & Form Flow

The online enrollment form uses a POST request endpoint:
* **Endpoint**: `/api/enroll`
* **Request Payload**:
  ```json
  {
    "name": "Student Name",
    "phone": "03XX-XXXXXXX",
    "email": "student@example.com",
    "program": "Computer AI Tools",
    "branch": "Haripur (Shah Maqsood)",
    "message": "Optional message"
  }
  ```
* **Current Action**: Validates input fields, prints student data in a formatted card directly to the server terminal console, and returns `{ success: true }`.
* **Pro-tip**: You can connect an email provider (like Resend) or database adapter in [route.ts](file:///f:/Zoon/kips/src/app/api/enroll/route.ts) to send or record these leads in real time.

---

## 🛡️ Security & Privacy

* **Secrets Management**: No API keys, database credentials, or private contact lines should be committed directly to GitHub. Ensure any production credentials are configuration parameters in a `.env.local` file (which is excluded from Git via `.gitignore`).
* **Production Build**: Before deploying, run `npm run build` to verify there are no compilation or TypeScript errors.
