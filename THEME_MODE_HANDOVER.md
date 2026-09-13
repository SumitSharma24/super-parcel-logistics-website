# SUPER PARCEL LOGISTICS — LIGHT / DARK MODE HANDOVER

**Brand Identity:** SUPER PARCEL LOGISTICS  
**Central Hub:** Ramchandrapuram, Srirampura, Bengaluru – 560021  
**WhatsApp / Direct Telephone:** +91 82176 96321  
**Date:** September 2026  
**Status:** Production Ready — Clean Build & 0 Lint Warnings

---

## 1. Executive Summary

A comprehensive, production-grade **Light Mode + Dark Mode** system has been integrated across the entire **SUPER PARCEL LOGISTICS** website. 

The implementation preserves every verified corporate asset, verified phone coordinate, multimodal freight balance (Road 30%, Rail 25%, Air 20%, Cargo/Warehouse Operations 25%), the six verified city branches (city + phone only, no addresses), and direct WhatsApp enquiry generation.

Both themes are crafted with the restraint and precision of global logistics and industrial transport leaders (e.g., Maersk, DHL, Kuehne+Nagel), avoiding harsh pure black (#000000) or glowing neon tones.

---

## 2. Palette Architecture

### Light Mode (Warm Ivory & Charcoal Canvas)
- **Canvas / Body:** #F5F3EE (Warm ivory off-white)
- **Elevated Surfaces:** #ECE9E2 (Muted warm stone)
- **Cards / Containers:** #FFFFFF (Clean card background)
- **Primary Typography:** #17191B (Deep industrial charcoal)
- **Secondary Typography:** #525860 (Neutral stone gray)
- **Hairline Borders:** gba(23, 25, 27, 0.09) (order-steel)
- **Restrained Accent:** #ED5A24 (Freight orange)
- **Scrollbar Thumb:** #C8C4BA on #ECE9E2

### Dark Mode (Deep Industrial Charcoal Canvas)
- **Canvas / Body:** #111214 (Deep charcoal, near-black)
- **Elevated Surfaces:** #18191D (Surface container)
- **Muted Surfaces / Inputs:** #212328 (Secondary card / input background)
- **Primary Typography:** #EDEDEC (Warm off-white)
- **Secondary Typography:** #9E9EA4 (Muted silver-gray)
- **Hairline Borders:** #2C2E35 (order-dark-border / order-steel-dark)
- **Restrained Accent:** #ED5A24 (Unchanged, high contrast)
- **Scrollbar Thumb:** #33373D on #18191D

---

## 3. Core Features & Technical Highlights

1. **Zero Flash of Wrong Theme (FOUC Prevention):**
   - High-priority inline <script> in <head> of index.html inspects localStorage.getItem('super-parcel-theme') or system prefers-color-scheme: dark before DOM rendering occurs, eliminating visual flickering.

2. **Tailwind CSS Integration:**
   - Configured with darkMode: 'class'.
   - Semantic tokens added to 	ailwind.config.js under colors.dark: g, surface, surfaceMuted, order, 	ext, 	extMuted.

3. **Theme Context (src/context/):**
   - Modular structure adhering to React fast-refresh standards:
     - 	heme-context-def.ts: Context type definitions and storage keys.
     - ThemeContext.tsx: ThemeProvider handling DOM class synchronization, localStorage persistence, and live system preference listeners.
     - useTheme.ts: Dedicated hook for consumer components.

4. **Global Theme Toggle Buttons:**
   - **Desktop Navigation:** Sun / Moon icon button with visible hover and focus rings and accessible ARIA labels (Switch to Light Mode / Switch to Dark Mode).
   - **Mobile Drawer:** Matching responsive toggle accessible directly in mobile header.

5. **Component Adaptations:**
   - **Navigation & Footer:** Dark glassmorphism header (dark:bg-[#111214]/95), dark utility bar (#0C0D0E), seamless dark footer.
   - **Multimodal Showcase:** High-contrast cards with subtle borders (dark:border-dark-border) and muted spec metadata.
   - **Enquiry Form & Inputs:** Inputs styled with #212328, #EDEDEC text, accessible placeholder colors, and clean dark dropdown menus.
   - **Status / Confirmation Screen:** Dark-adapted  ENQUIRY READY card with action buttons.
   - **Branch Directory:** High-contrast typography and refined dividers for all 6 branch listings.
   - **Facility Map Embed:** Dark card container framing the Google Maps iframe.

---

## 4. Verification Checklist

- [x] 
pm run build: Successful (Vite + TypeScript compiler passed with 0 errors).
- [x] 
pm run lint: 0 errors, 0 warnings (OxLint passed cleanly).
- [x] Theme persistence verified in localStorage (super-parcel-theme).
- [x] System color scheme detection on fresh loads.
- [x] Zero flash of wrong theme (FOUC) guaranteed via inline <head> script.
- [x] Verified data integrity preserved (Name: SUPER PARCEL LOGISTICS, Phone: +91 82176 96321, 6 city branches).
