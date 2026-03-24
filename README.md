# 🎓 Què vols estudiar?

**Orientador universitari i de Formació Professional de Catalunya**

Aplicació interactiva que ajuda estudiants a descobrir els graus universitaris i cicles formatius de grau superior (CFGS) de Catalunya que millor encaixen amb els seus interessos, amb dades reals de sou, ocupabilitat, satisfacció, requisits d'accés i matèries que pugen nota a la selectivitat.

## ✨ Funcionalitats

- **Test d'orientació** — 6 preguntes per identificar les àrees d'interès i recomanar estudis
- **Explorador complet** — 142 estudis (84 graus + 58 CFGS) amb cercador en temps real
- **Dades de mercat laboral** — Sou esperat, ocupabilitat, contracte indefinit, satisfacció
- **Notes de tall** — Per universitat (2-3 principals) + link a notesdetall.cat
- **Ponderacions PAU 2026** — Matèries que ponderen ×0,2 + link al PDF oficial
- **Requisits d'accés** — Vies d'accés, PAP obligatòria, proves específiques
- **Filtres** — Per tipus (Grau/FP), àrea de coneixement, ordenació per sou/ocupabilitat/satisfacció
- **Responsive** — Dissenyat per a mòbil i escriptori

## 📊 Fonts de dades

| Dada | Font |
|------|------|
| Sous graus | Fundació CYD 2025 (BMC 4 anys post-grau) |
| Ocupabilitat graus | Fundació CYD 2025, U-Ranking FBBVA-Ivie |
| Satisfacció | Enquestes FBBVA, LAB4Future/Wuolah |
| Notes de tall | 1a assignació 2025-26, Generalitat de Catalunya |
| Ponderacions | Taula PAU 2026, Comissió d'Accés i Afers Estudiantils (CIC) |
| Dades FP | Inserció Laboral Ensenyaments Professionals 2024 (Consell de Cambres + Generalitat) |

> ⚠️ **Nota sobre CFGS:** Els sous dels cicles formatius són estimacions basades en trams salarials de l'estudi de Cambres 2024. No es disposa de dades de satisfacció equivalents a les dels graus.

## 🚀 Instal·lació local

```bash
# Clonar el repositori
git clone https://github.com/jormarllor/questudiar-cat.git
cd questudiar-cat

# Instal·lar dependències
npm install

# Executar en mode desenvolupament
npm run dev
```

L'app s'obrirà a `http://localhost:5173`

## 🌐 Desplegament a GitHub Pages

1. Crea un repositori nou a GitHub (p.ex. `questudiar-cat`)
2. Si el nom del repo és diferent de `questudiar-cat`, actualitza el `base` a `vite.config.js`
3. Puja el codi:

```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/jormarllor/questudiar-cat.git
git push -u origin main
```

4. A GitHub, ves a **Settings → Pages → Source** i selecciona **GitHub Actions**
5. El workflow es dispararà automàticament i en uns minuts tindràs l'app a:
   `https://jormarllor.github.io/questudiar-cat/`

## 🛠 Tecnologies

- [React 18](https://react.dev/) — Components i estat
- [Vite](https://vitejs.dev/) — Bundler ultra-ràpid
- [Google Fonts](https://fonts.google.com/) — Playfair Display + DM Sans
- GitHub Actions — CI/CD automàtic

## 👤 Autor

**Jordi Martínez-Llorente**
[LinkedIn](https://www.linkedin.com/in/jordi-martinez-llorente/)

## 📝 Llicència

MIT — Lliure per utilitzar, modificar i distribuir.
