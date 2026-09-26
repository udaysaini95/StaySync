# **StaySync** — Campus Hostel Management & Gate Security Platform

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-5.2-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.45-C5F74F?logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**StaySync** is a production-grade, multi-role web platform engineered to modernize campus hostel operations. It replaces fragmented paper registers, messaging groups, and verbal approvals with traceable, auditable digital workflows for student management, maintenance complaints, leave approvals, secure gate movement logging, mess operations, and campus communication.

---

## 🌟 Key Features & Flagship Workflows

### 🎫 1. Digital Leave & Gate Pass Security Workflow
- **Warden Approval & Verification**: Students submit leave applications with departure/return timestamps and reason. Wardens review overlaps and approve requests.
- **Cryptographic Gate Passes**: Generates unique expiring pass tokens with QR code payloads (`staysync://gate-pass/<token>`) and downloadable PDF gate passes.
- **Guard Terminal & Movement Logging**: Gate guards scan QR passes or enter manual tokens. Single-action verification ensures pass validity, prevents reuse/expiry bypasses, and logs exit/return movements transactionally.
- **Live Outside-Campus Roster**: Real-time tracking of students currently outside campus with overdue return alerts.

### 🛠️ 2. Maintenance Complaints & SLA Monitor
- **Categorized Issue Reporting**: Students raise complaints (Electrical, Plumbing, Furniture, Cleanliness) with photo attachments.
- **Warden & Maintenance Workflows**: Wardens assign work to maintenance staff with priority levels and Service Level Agreement (SLA) deadlines.
- **Automated SLA Breach Monitor**: Background job tracks SLA targets and escalates breached complaints automatically.
- **Student Verification & Closure**: Maintenance technicians upload resolution evidence; students verify and close or reopen tickets.

### 🍽️ 3. Mess Management & Analytics
- **Calendar-Based Daily Menus**: Admins and Wardens schedule date-specific breakfast, lunch, snacks, and dinner menus.
- **Meal Ratings & Feedback**: Students rate daily meals and report food quality or hygiene concerns.
- **Mess Issue Resolution**: Administrative oversight and tracking for food quality complaints.

### 🛡️ 4. Multi-Hostel Security & Role-Based Access Control (RBAC)
- **5 Defined User Roles**: `Student`, `Warden`, `Maintenance`, `Gate Guard`, `Administrator`.
- **Hostel Scope Isolation**: Support for multiple hostel buildings (`H1`, `H2`, etc.) classified by housing eligibility (`Boys`, `Girls`, `Co-ed`).
- **Append-Only Audit Logging**: Every sensitive action (room allocation, leave approval, gate pass scan, role change) records an immutable audit log entry with actor context.

### 📢 5. Notice Board & Notification System
- **Audience-Targeted Announcements**: Publish notices scoped to specific hostels or institution-wide.
- **In-App Notifications**: Real-time updates for leave approvals, complaint assignments, and notices.

---

## 🛠️ Tech Stack & Architecture

### **Frontend**
- **Framework**: [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphism Theme Primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/) (Centralized API client with interceptors and service URL validation)
- **Testing**: [Vitest](https://vitest.dev/) + Testing Library + `axe-core` accessibility checks

### **Backend**
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules)
- **Framework**: [Express.js 5](https://express.js.com/)
- **Database & ORM**: [PostgreSQL 16](https://www.postgresql.org/) + [Drizzle ORM](https://orm.drizzle.team/)
- **Validation**: [Zod 4](https://zod.dev/) (Strict request body, query, and parameter schema validation)
- **Authentication**: JWT (`HS256`) + `bcryptjs` password hashing
- **Security & Middleware**: [Helmet](https://helmetjs.github.io/), [Express Rate Limit](https://express-rate-limit.github.io/), strict CORS policy
- **Media & Documents**: [PDFKit](https://pdfkit.org/) (Gate pass PDF generation), [Multer](https://github.com/expressjs/multer) (File uploads)

---

## 📁 Repository Structure

```
Hostel-Management-System/
├── Frontend/                 # Vite + React 19 Client Application
│   ├── src/
│   │   ├── api/             # Axios instance & interceptors
│   │   ├── auth/            # AuthContext, session storage & route guards
│   │   ├── components/      # UI primitives (Button, Input, Table, Modal)
│   │   ├── config/          # Service URL & environment normalizers
│   │   ├── gate/            # Guard scanner & credential validation
│   │   ├── layouts/         # Navigation, Sidebar & ProductBrand
│   │   ├── leave/           # Leave application & ActiveGatePass QR/PDF
│   │   └── pages/           # Role-specific dashboards & feature views
│   └── test/                # Component unit & integration tests
│
├── Backend/                  # Express 5 API Server
│   ├── scripts/             # DB migration, demo seeding & SLA monitor
│   ├── src/
│   │   ├── config/          # Environment parser & database connection
│   │   ├── db/              # Drizzle schema definition & demo seed data
│   │   ├── domain/          # Roles, statuses & SLA definitions
│   │   ├── middlewares/     # Auth, RBAC, error & upload middlewares
│   │   ├── Routes/          # Express route definitions
│   │   ├── services/        # Gate pass, complaints, SLA & email services
│   │   └── validation/      # Zod validation schemas
│   └── test/                # 289+ unit and safety test suites
│
└── docs/                     # Complete Architecture & System Documentation
    ├── API_CONVENTIONS.md
    ├── AUDIT_LOGGING.md
    ├── AUTHORIZATION.md
    ├── DEMO_DATA.md
    ├── FRONTEND_ARCHITECTURE.md
    ├── FRONTEND_DESIGN_GUIDELINES.md
    ├── HOSTEL_SETUP.md
    ├── IMPLEMENTATION_PLAN.md
    ├── LEAVE_GATE_WORKFLOW.md
    ├── PRD.md
    ├── RUNTIME_CONFIGURATION.md
    ├── SECURITY_BASELINE.md
    └── TESTING.md
```

---

## 🚀 Quick Start Guide

### **Prerequisites**
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **PostgreSQL**: Local PostgreSQL server or a cloud PostgreSQL instance (e.g. [Neon](https://neon.tech/))

---

### **1. Clone the Repository**
```bash
git clone https://github.com/udaysaini95/Hostel-Management-System.git
cd Hostel-Management-System
```

---

### **2. Backend Setup**
```bash
cd Backend
npm install
```

Create a `.env` file in the `Backend/` directory (or copy from `.env.example`):
```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/staysync_dev
JWT_SECRET=staysync_dev_jwt_secret_key_2026_local_only
JWT_EXPIRES_IN=8h
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:5174
ALLOW_DEMO_SEED=true
DEMO_SEED_PASSWORD=StaySyncDemo!2026
```

Apply database migrations:
```bash
npm run db:migrate
```

Seed initial demo data (users, hostels, rooms, allocations):
```bash
npm run db:seed
```

Start the backend development server:
```bash
npm run dev
```
The API server will run at `http://localhost:5000`.

---

### **3. Frontend Setup**
Open a new terminal tab and navigate to `Frontend/`:
```bash
cd Frontend
npm install
```

Create a `.env` file in the `Frontend/` directory:
```env
VITE_API_BASE_URL=http://localhost:5000
```

Start the Vite development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 🔑 Fictional Demo Accounts

The demo database seed initializes fictional accounts for testing all 5 roles. The password for all seed accounts is `StaySyncDemo!2026`.

| Role | Email | Scope / Details |
| :--- | :--- | :--- |
| **Administrator** | `admin@staysync.example` | Institution-wide management & hostel setup |
| **Warden** | `warden.h1@staysync.example` | North Residence Hall (H1) management |
| **Maintenance** | `maintenance@staysync.example` | Technician assigned to H1 and H2 complaints |
| **Gate Security** | `guard.h2@staysync.example` | South Residence Hall (H2) gate terminal |
| **Student (H1)** | `student.h1@staysync.example` | Resident student in H1, Room 101 |
| **Student (H2)** | `student.h2@staysync.example` | Resident student in H2, Room 204 |

---

## 🧪 Testing & Quality Assurance

StaySync maintains comprehensive test coverage across backend business logic, validation schemas, and frontend UI components.

### **Run Backend Unit Tests**
```bash
cd Backend
npm run test:unit
```
*Executes all **289 backend unit tests** using Node.js native test runner.*

### **Run Frontend Production Build**
```bash
cd Frontend
npm run build
```
*Compiles static production bundles into `Frontend/dist` with minification and chunk optimization.*

---

## 🌐 Production Deployment Guide

StaySync is designed for decoupled deployment:

1. **Frontend Deployment (Vercel / Netlify / Cloudflare Pages)**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variable: `VITE_API_BASE_URL=https://your-backend-api.onrender.com`

2. **Backend Deployment (Render / Railway / Fly.io)**:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variables:
     ```env
     NODE_ENV=production
     DATABASE_URL=postgresql://user:password@neon.tech/dbname?sslmode=require
     JWT_SECRET=your_secure_32_character_random_jwt_secret
     CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
     TRUST_PROXY_HOPS=1
     ```

3. **Database Setup**:
   - Run `npm run db:migrate` during deployment pipeline to ensure database tables are up to date.

---

## 📄 Documentation Index

For detailed architectural decisions and feature specifications, check out the [`docs/`](./docs) directory:

- 📋 [**Product Requirements Document (PRD)**](./docs/PRD.md)
- 🎨 [**Frontend Design Guidelines**](./docs/FRONTEND_DESIGN_GUIDELINES.md)
- 🏗️ [**Frontend Architecture**](./docs/FRONTEND_ARCHITECTURE.md)
- ⚙️ [**Runtime Configuration**](./docs/RUNTIME_CONFIGURATION.md)
- 🔐 [**Security Baseline**](./docs/SECURITY_BASELINE.md)
- 🔒 [**Authorization Model**](./docs/AUTHORIZATION.md)
- 🚪 [**Leave & Gate Workflow Specification**](./docs/LEAVE_GATE_WORKFLOW.md)
- 🧪 [**Testing Strategy**](./docs/TESTING.md)
- 📊 [**Demo Data Guide**](./docs/DEMO_DATA.md)

---

## 📜 License

This project is open source and licensed under the [MIT License](LICENSE).
