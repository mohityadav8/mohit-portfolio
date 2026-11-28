# Mohit Yadav — Portfolio

**GPU Systems · CUDA & ML Infrastructure · Open Source**

Live site: **https://mohityadav8.github.io/mohit-portfolio/**

Personal portfolio covering my open-source work (NVIDIA aicr & NodeWright, Microsoft VS Code Python, Kubescape, Project-HAMi, OpenTofu, Python docs, SHAP, pgmpy, OWASP), projects, research, education, events and certifications.

---

## Highlights

- **65+ merged pull requests** across 10+ organisations
- **Credited in 12 releases** — NVIDIA aicr (7), NVIDIA NodeWright (4), pgmpy v1.1.0
- **Kubescape (CNCF) Triage Member** · **Python docs Punjabi Translation Coordinator**
- Preprint: *DPO vs. RLHF: An Empirical Comparison of Alignment Techniques for LLMs* — [doi:10.5281/zenodo.20578480](https://doi.org/10.5281/zenodo.20578480)
- Projects: [GPU Lens](https://github.com/Sievehouse/gpu-lens) · [Hydra Maintainer](https://github.com/marketplace/hydra-maintainer) · [DPO vs. RLHF study](https://github.com/AnthropicBots/dpo-vs-rlhf-alignmet-study)

---

## Project structure

```
index.html                 main single-page site (all sections)
404.html                   custom not-found page
assets/
  css/style.css            design tokens + all styles
  css/404.css              not-found page only (rides on style.css tokens)
  js/script.js             nav, scroll spy, typed text, contact form
  images/profile.jpg       profile photo
  images/educat/           education images (university + school)
  Mohit_Yadav_CV.pdf       resume linked from "View Resume"
experience/, projects/     redirect old URLs to the matching section
```

### Theme

The palette is a heat ramp — amber `#FFB302` through orange `#FF6B1A` to ember
`#E0241B`, on a roasted ink base `#150B06`. All of it lives in the `:root` block
at the top of `style.css`; change those variables and the whole site follows.

The heat is not decoration: it encodes magnitude. Each open-source card, paper
and award carries a `heat h1`–`h5` class, and the left rail runs hotter as the
number goes up (`h5` = NVIDIA aicr at 25 merged PRs, `h1` = a single PR). When
you add a contribution, pick the class that matches its size.

Type is variable **Archivo** throughout — 900 weight at `wdth 125` for display,
400 at normal width for body — with **JetBrains Mono** reserved for code, PR
numbers and data labels.

### Updating content

- **Text / contributions / events** — edit the matching `<section>` in `index.html`
  (`#opensource`, `#work`, `#publications`, `#education`, `#awards`).
- **Resume** — replace `assets/Mohit_Yadav_CV.pdf` (keep the same name).
- **School photo** — replace `assets/images/educat/maxford-school.jpg` with a real photo
  (any size; a wide 2:1 image looks best).

---

## Deploying on GitHub Pages

1. Push these files to the `main` branch of `mohityadav8/mohit-portfolio`.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site goes live at `https://mohityadav8.github.io/mohit-portfolio/` within a minute or two.

If the repository is ever renamed, update `<base href="/mohit-portfolio/">` in `404.html`.

---

## Connect

- GitHub — https://github.com/mohityadav8
- LinkedIn — https://www.linkedin.com/in/mohit-yadav-6b2319305/
- LeetCode — https://leetcode.com/u/mohityadav8/
- ORCID — https://orcid.org/0009-0000-0021-6379
- Email — ymohit799057@gmail.com
