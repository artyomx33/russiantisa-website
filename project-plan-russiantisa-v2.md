# Russian TISA Website – Project Plan v2

## 1 · Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Hosting / CI:** Vercel  
- **Styling:** Tailwind CSS + `tailwind-merge`
- **Deployment Target:** Static‐optimised pages with ISR where helpful
- **Primary Brand Colour:** **Royal Gold `#C9A83D`**

---

## 2 · Site Structure (Multi-Page)

| Route | Purpose & Key Blocks |
|-------|----------------------|
| `/` (Home) | Landing hub that highlights the essential story; contains anchor sections for About, Method, Program Summary, Team teaser, Sunday timeline snippet, Testimonials, CTA. |
| `/about` | “Команда” page – full bios for Karina Medvedeva, Ekaterina, and each teacher. |
| `/program` | Curriculum detail: age-band modules, full Sunday timeline, holiday / performance calendar. |
| `/gallery` | Photo gallery with client-side filter (занятия / праздники / команда). |
| `/apply` | Application & contact page: form, address + Google Map, FAQ toggles. |

---

## 3 · Navigation

A **sticky top bar** present on every page.

• **On the Home page** the menu items scroll smoothly to their anchor targets (`#about`, `#method`, `#program`, `#team`, `#sunday`, `#gallery`, `#testimonials`, `#faq`, `#apply`).  
• **On inner pages** each item is a normal link to the corresponding route (e.g. “Программа” → `/program`).  
• Mobile: hamburger drawer with the same links.

---

## 4 · Homepage Anchor Sections

1. `#about` – О школе  
2. `#method` – Метод TISA  
3. `#program` – Программа (кратко)  
4. `#team` – Команда (teaser)  
5. `#sunday` – Воскресный день  
6. `#gallery` – Галерея (4-tile preview)  
7. `#testimonials` – Отзывы  
8. `#faq` – Вопросы и ответы  
9. `#apply` – Записаться (CTA + form snippet)

---

## 5 · Action Plan — Phase 1 (Design & Skeleton)

| Step | Description | Output |
|------|-------------|--------|
| **1. Style Foundation** | Update `tailwind.config.ts` and core UI components (`Button`, `SectionHeader`, etc.) to inject Royal Gold (`#C9A83D`) as the primary accent. | Unified colour palette across project. |
| **2. Homepage Refactor** | Re-architect `src/app/page.tsx` into the single-page layout with the nine anchor sections listed above, placeholder copy & images. | Modern, scrollable landing page. |
| **3. Inner Pages Styling** | Adjust existing `/about`, `/program`, `/apply` pages to adopt the new gold accent and component set. Content stays placeholder for now. | Visual consistency site-wide. |
| **4. Create Gallery Page** | Add new route `/gallery` with a basic grid component and filter buttons (逻辑 placeholder). | Gallery stub ready for Phase 2 population. |

---

## 6 · Future Phases (Preview)

Phase 2 – Real content & photography integration, filter logic, FAQ toggles, Google Map embed.  
Phase 3 – Accessibility, micro-animations, Lighthouse pass, domain go-live (`russiantisa.nl`).  
Phase 4 – CMS/JSON extraction for easier updates, localisation hook for optional EN version.

---

### Owner
Product lead: **Artem** · Face of school: **Karina Medvedeva**

> This plan supersedes v1 while keeping the multi-page architecture intact. All subsequent PRs should reference “Project Plan v2”.
