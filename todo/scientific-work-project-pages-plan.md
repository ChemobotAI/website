# Scientific Work Project Pages Plan

Date: 2026-06-19
Scope: planning only. Do not implement until reviewed.

## Goal

Add a stronger scientific/research layer to the Projects area, showing the work behind ChemoBotAI's credibility in AI, robotics, lab automation, and chemistry.

The current Projects page presents client consulting projects. The scientific work should either:

1. Add a new "Scientific work" section below client projects on `projects.html`, or
2. Add a separate `research.html` page if we want to keep commercial projects and publications separate.

Recommendation: use option 1 first. Keep the navigation simple and make the Projects page a combined portfolio: client work first, scientific work second.

## Research Coverage

Sources used:

- OpenAlex author profile for Jonathan Grizou: `A5013975803`
- OpenAlex author profile for Daniel Salley: `A5009627378`
- Publisher pages and DOI records for the highest-priority papers
- arXiv/ChemRxiv records where publisher pages were inaccessible or where preprints contain easier figure/PDF access
- Existing website tone and project-card structure in `website-dev/projects.html` and `website-dev/projects/*.html`

High-level author metrics from OpenAlex at research time:

- Jonathan Grizou: 64 works, 1058 cited-by count, h-index 18, i10-index 20
- Daniel Salley: 31 works, 695 cited-by count, h-index 10, i10-index 10

Important limitation:

- Citation counts vary by source and date. Use phrasing like "100+ citations" or omit exact citation counts on the public site unless we want to maintain them.

## Recommended Information Architecture

### Projects page layout

Keep existing client cards:

1. Entalpic
2. Altrove
3. Chemify

Add a new heading below them:

`Scientific work`

Then add six research cards in a 3-column grid, matching the existing project card style:

1. Autonomous nanomaterials evolution robot
2. Curiosity-driven protocell discovery
3. Human-versus-robot chemical discovery
4. Networked chemical robots
5. Programmable inorganic cluster discovery
6. Robotic chemputation modules

Rationale:

- This gives one joint Jonathan+Daniel flagship.
- It gives Jonathan a clear AI/robotics/protocell thread.
- It gives Daniel a clear chemistry robotics/platform engineering thread.
- It avoids making one card per paper, which would feel like a publication list instead of a project portfolio.

## Priority Project Pages

### 1. Autonomous Nanomaterials Evolution Robot

Priority: Tier 1, build first.

Ownership/story:

- Joint Jonathan + Daniel project.
- Daniel is first author.
- Jonathan is coauthor.
- Strongest "together" proof point and the most directly aligned with ChemoBotAI positioning.

Core paper:

- Title: "A nanomaterials discovery robot for the Darwinian evolution of shape programmable gold nanoparticles"
- Venue: Nature Communications
- Year: 2020
- DOI: https://doi.org/10.1038/s41467-020-16501-4
- Authors include: Daniel Salley, Graham Keenan, Jonathan Grizou, Abhishek Sharma, Sergio Martín, Leroy Cronin
- OpenAlex cited-by count at research time: 158
- Publisher page notes: Nature page lists 16k accesses, 153 citations, 12 Altmetric at time opened.

Why this is impressive:

- Autonomous robotic platform for materials evolution.
- Uses genetic-algorithm style search and physical seeding between generations.
- Demonstrates spheres -> rods -> octahedral gold nanoparticles.
- Bridges hardware, software, AI search, spectroscopic feedback, and real chemical synthesis.

Suggested card copy:

> A robotic platform that evolved gold nanoparticles through algorithmic search, spectroscopic feedback, and physical seeding across generations.

Suggested detail line:

> // Nature Communications; autonomous materials evolution; Daniel first author, Jonathan coauthor

Suggested case-study H2:

> Autonomous materials evolution in the lab

Draft page copy:

> We built an autonomous materials-discovery platform that treated nanoparticle synthesis as an evolutionary search problem. The robot prepared and analysed reactions using in-line UV-Vis spectroscopy, while a genetic algorithm selected new experimental conditions. Crucially, the system did not only pass digital parameters between generations: it also reused physical nanoparticles as seeds, allowing synthetic history to shape the next stage of discovery.
>
> The platform learned conditions for gold nanospheres, then nanorods, and finally used the optimized rods as seeds to access more complex octahedral nanoparticles. The work demonstrated how automation, feedback, and embodied search can move materials discovery away from fragile trial-and-error workflows.

Image recommendations:

- Use Nature Fig. 2 as primary hero if allowed: platform workflow for hierarchical evolution of AuNPs.
- Alternative: Nature Fig. 3, robot platform outline/top view.
- Secondary inline figure: Nature Fig. 4, evolution/UV-Vis/TEM outcomes.
- Source page has figure links under "Fig. 1", "Fig. 2", "Fig. 3", "Fig. 4".
- Rights note: Nature Communications open-access article. Confirm license/attribution before copying figure assets into the repo.

Implementation slug:

- `projects/science-nanomaterials-evolution.html`
- Asset candidate: `images/projects/science-nanomaterials-evolution.jpg`

### 2. Curiosity-Driven Protocell Discovery

Priority: Tier 1, build first or second.

Ownership/story:

- Jonathan-led ChemAI/robotics project.
- Shows Jonathan's scientific identity at the intersection of curiosity-driven AI, robotics, and chemistry.

Core paper:

- Title: "A curious formulation robot enables the discovery of a novel protocell behavior"
- Venue: Science Advances
- Year: 2020
- DOI: https://doi.org/10.1126/sciadv.aay4237
- Authors: Jonathan Grizou, Laurie J. Points, Abhishek Sharma, Leroy Cronin
- OpenAlex cited-by count at research time: 74
- arXiv/preprint title: "Exploration of Self-Propelling Droplets Using a Curiosity Driven Robotic Assistant"

Supporting papers:

- "Artificial intelligence exploration of unstable protocells leads to predictable properties and discovery of collective behavior"
  - PNAS, 2018
  - DOI: https://doi.org/10.1073/pnas.1711089115
  - OpenAlex cited-by count at research time: 39
- "Adaptive artificial evolution of droplet protocells in a 3D-printed fluidic chemorobotic platform with configurable environments"
  - Nature Communications, 2017
  - DOI: https://doi.org/10.1038/s41467-017-01161-8
  - OpenAlex cited-by count at research time: 39

Why this is impressive:

- A target-free curiosity algorithm explored a complex formulation space.
- The robot found an order of magnitude more behavioral variety than random search for the same budget.
- It discovered a sharp temperature-sensitive droplet behavior.
- This is a clear story for "AI that helps scientists discover what they did not know to ask for."

Suggested card copy:

> A curiosity-driven chemical robot explored self-propelling droplets without a fixed target, uncovering richer behaviors than random search.

Suggested detail line:

> // Science Advances; target-free AI exploration of chemical behavior

Suggested case-study H2:

> When the robot chooses what is interesting

Draft page copy:

> This work asked a different question from standard optimization: what happens when a chemistry robot is not told exactly what to maximize? A curiosity algorithm controlled a robotic formulation platform exploring self-propelling oil-in-water droplets. Instead of searching for one target, the system selected experiments likely to reveal new behaviors.
>
> Compared with random exploration, the robot observed far more diverse droplet dynamics under the same experimental budget and surfaced a specific sensitivity to temperature. The project is a strong example of AI as a scientific partner: not replacing domain expertise, but expanding the range of phenomena a lab can notice.

Image recommendations:

- Science Advances paper figures: robot/formulation setup, droplet behavior classes, time-temperature phase diagram.
- PNAS paper figures: autonomous platform and behavior map from >7,000 experiments.
- Nature Communications adaptive evolution paper: 3D-printed fluidic chemorobotic platform.
- Rights note: Science Advances and Nature Communications are open-access; verify exact license before using figures.

Implementation slug:

- `projects/science-curious-protocells.html`
- Asset candidate: `images/projects/science-curious-protocells.jpg`

### 3. Human-Versus-Robot Chemical Discovery

Priority: Tier 1 or high Tier 2.

Ownership/story:

- Jonathan-only relative to Daniel.
- Strongly supports AI strategy and human-in-the-loop automated chemistry.

Core paper:

- Title: "Human versus Robots in the Discovery and Crystallization of Gigantic Polyoxometalates"
- Venue: Angewandte Chemie International Edition
- Year: 2017
- DOI: https://doi.org/10.1002/anie.201705721
- Authors include: Vasilios Duros, Jonathan Grizou, Weimin Xuan, Zied Hosni, De-Liang Long, Haralampos N. Miras, Leroy Cronin
- OpenAlex cited-by count at research time: 126

Supporting paper:

- "Intuition-Enabled Machine Learning Beats the Competition When Joint Human-Robot Teams Perform Inorganic Chemical Experiments"
  - Journal of Chemical Information and Modeling, 2019
  - DOI: https://doi.org/10.1021/acs.jcim.9b00304
  - OpenAlex cited-by count at research time: 43

Why this is impressive:

- Compared manual/human and robotic routes in discovery/crystallization.
- Demonstrates active learning in inorganic chemistry.
- Gives a strong claim around when human intuition and robotic exploration work best together.

Suggested card copy:

> Active-learning workflows compared human and robotic strategies for discovering and crystallizing gigantic inorganic clusters.

Suggested detail line:

> // Angewandte Chemie; active learning for inorganic discovery

Suggested case-study H2:

> Human intuition, robotic scale, and chemical search

Draft page copy:

> This work explored how active machine learning can support discovery in a chemical space where both molecular self-assembly and crystallization must happen together. The project compared human-guided and robot-guided strategies in the search for gigantic polyoxometalates, showing how structured experimental workflows can expose productive regions of a difficult chemical landscape.
>
> Follow-on work developed the human-in-the-loop angle further, testing how joint human-robot teams perform when intuition, machine learning, and automated experimentation are combined.

Image recommendations:

- Angewandte figures: workflow comparison, crystallization/discovery maps, cluster structure.
- JCIM figures: human-robot team diagrams and performance comparisons.
- Rights note: Angewandte/Wiley article may be open-access according to OpenAlex, but verify image reuse terms before copying.

Implementation slug:

- `projects/science-human-robot-discovery.html`
- Asset candidate: `images/projects/science-human-robot-discovery.jpg`

### 4. Networked Chemical Robots

Priority: Tier 2.

Ownership/story:

- Daniel-only relative to Jonathan.
- Very clear story for low-cost automation, distributed experiments, reproducibility, and networked lab infrastructure.

Core paper:

- Title: "Networking chemical robots for reaction multitasking"
- Venue: Nature Communications
- Year: 2018
- DOI: https://doi.org/10.1038/s41467-018-05828-8
- Authors include: Dario Caramelli, Daniel Salley, Alon Henson, Gerardo Aragón-Camarasa, Salah Sharabi, Graham Keenan, Leroy Cronin
- OpenAlex cited-by count at research time: 76
- Publisher page notes: Nature page lists 12k accesses, 64 citations, 32 Altmetric at time opened.

Why this is impressive:

- Demonstrated chemistry-capable robots built for under $500.
- Robots coordinated experiments in real time over a network.
- Showed collaborative exploration of azo-coupling reactions.
- Demonstrated real-time control of oscillating reactions and chemical information encoding.
- Strong link to lab infrastructure, reproducibility, and practical automation.

Suggested card copy:

> Low-cost networked chemistry robots coordinated experiments, shared results in real time, and reduced repeated work across chemical searches.

Suggested detail line:

> // Nature Communications; distributed lab automation and reproducibility

Suggested case-study H2:

> Turning chemical robots into a network

Draft page copy:

> This project asked what chemistry could borrow from distributed computing. Instead of treating a robot as a single isolated machine, the work connected low-cost chemistry robots so they could share experimental choices and results in real time.
>
> The system explored reaction spaces collaboratively, synchronized oscillating reactions, encoded information chemically, and assessed crystallization reproducibility. The core lesson is directly relevant to modern automated labs: robot value increases sharply when hardware, software, data, and coordination protocols are designed together.

Image recommendations:

- Nature Fig. 1: real-time networked chemical robots concept.
- Nature Fig. 3 or Fig. 4: azo-dye chemical space and platform collaboration.
- Nature Fig. 5: real-time control of chemical oscillator.
- Nature Fig. 6: reproducibility of POM crystallization.

Implementation slug:

- `projects/science-networked-chemical-robots.html`
- Asset candidate: `images/projects/science-networked-robots.jpg`

### 5. Programmable Inorganic Cluster Discovery Robot

Priority: Tier 2.

Ownership/story:

- Daniel first-author chemistry robotics project.
- Direct proof for modular platforms and inorganic materials discovery.

Core paper:

- Title: "A Modular Programmable Inorganic Cluster Discovery Robot for the Discovery and Synthesis of Polyoxometalates"
- Venue: ACS Central Science
- Year: 2020
- DOI: https://doi.org/10.1021/acscentsci.0c00415
- Authors: Daniel Salley, Graham Keenan, De-Liang Long, Nicola L. Bell, Leroy Cronin
- OpenAlex cited-by count at research time: 42

Related/supporting papers:

- "Robotic Stepwise Synthesis of Hetero-Multinuclear Metal Oxo Clusters as Single-Molecule Magnets"
  - JACS, 2021
  - DOI: https://doi.org/10.1021/jacs.1c06047
  - OpenAlex cited-by count at research time: 63
- "Algorithm-Driven Robotic Discovery of Polyoxometalate-Scaffolding Metal-Organic Frameworks"
  - JACS, 2024
  - DOI: https://doi.org/10.1021/jacs.4c09553
  - OpenAlex cited-by count at research time: 23

Why this is impressive:

- Modular programmable robot for a large inorganic reaction space.
- Combines high-throughput reaction execution and inline analysis.
- Strong "Daniel built practical robotic platforms for difficult chemistry" story.

Suggested card copy:

> Modular robotic hardware and software searched large inorganic reaction spaces to discover and synthesize polyoxometalate clusters.

Suggested detail line:

> // ACS Central Science; Daniel first-author modular discovery robot

Suggested case-study H2:

> Modular robotics for inorganic cluster discovery

Draft page copy:

> Inorganic cluster discovery often depends on self-assembly and crystallization happening under the right conditions, making brute-force search expensive and hard to reproduce. This work developed a modular programmable robotic platform for systematic exploration of polyoxometalate chemistry.
>
> The project is a useful scientific case study for ChemoBotAI because it connects chemistry knowledge, hardware design, software control, and experimental strategy. It shows that useful automation is not just about moving liquids: it is about designing a platform matched to the scientific search problem.

Image recommendations:

- ACS Central Science article figures showing modular robot architecture, reaction workflow, and discovered clusters.
- JACS 2021 figures showing stepwise synthesis and cluster structures.
- Rights note: ACS open-access PDFs are available for some articles; verify figure reuse license before copying.

Implementation slug:

- `projects/science-inorganic-cluster-robot.html`
- Asset candidate: `images/projects/science-inorganic-cluster-robot.jpg`

### 6. Robotic Chemputation Modules

Priority: Tier 2.

Ownership/story:

- Daniel first-author/lead platform story.
- Best page for practical "standard modules for chemistry digitization" message.

Core paper:

- Title: "Robotic Modules for the Programmable Chemputation of Molecules and Materials"
- Venue: ACS Central Science
- Year: 2023
- DOI: https://doi.org/10.1021/acscentsci.3c00304
- Authors: Daniel Salley, J. Sebastián Manzano, Philip J. Kitson, Leroy Cronin
- OpenAlex cited-by count at research time: 33

Why this is impressive:

- Strongly aligned with ChemoBotAI's consulting proposition.
- Talks about affordable, standard hardware/software modules as the foundation for chemistry digitization.
- Provides a more general platform story than the individual discovery papers.

Suggested card copy:

> Standard robotic modules for programmable chemistry, designed as practical building blocks for digital labs.

Suggested detail line:

> // ACS Central Science; chemistry digitization and modular automation

Suggested case-study H2:

> Practical building blocks for digital chemistry

Draft page copy:

> Before a lab can benefit from AI, it needs reliable digital interfaces to experiments. This work focused on robotic modules that standardize common chemical operations and make them programmable across molecules, materials, nanomaterials, and formulations.
>
> For a consulting audience, this page should be framed less as a publication and more as an engineering philosophy: robust automation comes from modularity, repeatable interfaces, and software-controlled workflows that scientists can actually use.

Image recommendations:

- ACS Central Science figures showing module taxonomy, hardware modules, and chemputation workflows.
- Potentially combine with Daniel's platform photos if available internally.

Implementation slug:

- `projects/science-robotic-chemputation-modules.html`
- Asset candidate: `images/projects/science-chemputation-modules.jpg`

## Additional Candidates For Later

These are worth mentioning in a publication list or a later "selected publications" block, but I would not build full project pages for all of them immediately.

### Daniel

- "An artificial intelligence enabled chemical synthesis robot for exploration and optimization of nanomaterials"
  - Science Advances, 2022
  - DOI: https://doi.org/10.1126/sciadv.abo2626
  - OpenAlex cited-by count: 180
  - Note: highest citation count in Daniel list. Could be merged into the Autonomous Nanomaterials Evolution Robot page as a "next generation" continuation, or become its own page if we want more Daniel-specific depth.

- "Optimization of Formulations Using Robotic Experiments Driven by Machine Learning DoE"
  - Cell Reports Physical Science, 2021
  - DOI: https://doi.org/10.1016/j.xcrp.2020.100295
  - OpenAlex cited-by count: 76
  - Note: very relevant to applied industry formulation optimization.

- "AI-driven robotic crystal explorer for rapid polymorph identification"
  - Digital Discovery, 2026
  - DOI: https://doi.org/10.1039/d5dd00203f
  - OpenAlex cited-by count: 3
  - Note: new, relevant, but lower priority because it is recent and less established.

- "Automated Digital Discovery and Synthesis of CuO-Based Nanoparticle Heterostructures for Catalysis"
  - ACS Applied Materials & Interfaces, 2025
  - DOI: https://doi.org/10.1021/acsami.5c13709
  - OpenAlex cited-by count: 0 at research time
  - Note: recent; revisit later.

### Jonathan

- "Artificial intelligence exploration of unstable protocells leads to predictable properties and discovery of collective behavior"
  - PNAS, 2018
  - DOI: https://doi.org/10.1073/pnas.1711089115
  - OpenAlex cited-by count: 39
  - Note: use as supporting work for the Curiosity-Driven Protocell page.

- "Adaptive artificial evolution of droplet protocells in a 3D-printed fluidic chemorobotic platform with configurable environments"
  - Nature Communications, 2017
  - DOI: https://doi.org/10.1038/s41467-017-01161-8
  - OpenAlex cited-by count: 39
  - Note: supports the protocell/evolution thread.

- "Calibration-Free BCI Based Control"
  - AAAI, 2014
  - DOI: https://doi.org/10.1609/aaai.v28i1.8923
  - OpenAlex cited-by count: 28
  - Note: not chemistry, but supports Jonathan's self-calibration / human-AI interaction expertise.

- "IFTT-PIN: A Self-Calibrating PIN-Entry Method"
  - arXiv, 2024
  - DOI: https://doi.org/10.48550/arxiv.2407.02269
  - Note: not chemistry; probably better for bio/about page than Projects unless we create a broader "AI methods" page.

## Suggested Final Page Set

Build in this order:

1. `science-nanomaterials-evolution.html`
   - Joint flagship.
   - Strongest "Jonathan + Daniel together" page.

2. `science-curious-protocells.html`
   - Jonathan AI/robotics/chemistry page.
   - Strong and distinctive.

3. `science-networked-chemical-robots.html`
   - Daniel practical robotics/platform page.
   - Very accessible to prospective clients.

4. `science-human-robot-discovery.html`
   - Jonathan active-learning/human-robot discovery page.
   - Strong venue/citation profile.

5. `science-inorganic-cluster-robot.html`
   - Daniel modular inorganic cluster discovery.
   - Good for technical audiences.

6. `science-robotic-chemputation-modules.html`
   - Daniel broad chemputation platform story.
   - Good bridge to consulting services.

Possible alternative:

- Merge pages 5 and 6 into one "Programmable Inorganic Chemistry Platforms" page if six scientific pages feels too many.

## Projects Page Card Drafts

### Card 1

Title: Autonomous Nanomaterials Evolution Robot

Copy:

> A robotic platform evolved gold nanoparticles through algorithmic search, spectroscopic feedback, and physical seeding across generations.

Detail:

> // Nature Communications; Daniel first author, Jonathan coauthor

### Card 2

Title: Curiosity-Driven Protocell Discovery

Copy:

> A target-free curiosity algorithm guided a chemical robot to explore self-propelling droplets and uncover unexpected behaviours.

Detail:

> // Science Advances; AI-driven exploration beyond fixed objectives

### Card 3

Title: Networked Chemical Robots

Copy:

> Low-cost chemistry robots coordinated experiments over a network, sharing results in real time to reduce duplicated search.

Detail:

> // Nature Communications; distributed lab automation

### Card 4

Title: Human-Versus-Robot Chemical Discovery

Copy:

> Active-learning workflows compared human and robotic strategies for discovering and crystallizing gigantic inorganic clusters.

Detail:

> // Angewandte Chemie; human-in-the-loop discovery

### Card 5

Title: Inorganic Cluster Discovery Robot

Copy:

> Modular robotic hardware and software searched large inorganic reaction spaces to discover polyoxometalate clusters.

Detail:

> // ACS Central Science; Daniel first-author modular platform

### Card 6

Title: Robotic Chemputation Modules

Copy:

> Standard robotic modules for programmable chemistry, designed as practical building blocks for digital labs.

Detail:

> // ACS Central Science; chemistry digitization

## Visual Asset Plan

Create these after review:

```text
website-dev/images/projects/science-nanomaterials-evolution.jpg
website-dev/images/projects/science-curious-protocells.jpg
website-dev/images/projects/science-networked-robots.jpg
website-dev/images/projects/science-human-robot-discovery.jpg
website-dev/images/projects/science-inorganic-cluster-robot.jpg
website-dev/images/projects/science-chemputation-modules.jpg
```

Guidelines:

- Use paper figures only where the license permits reuse with attribution.
- Prefer open-access figures from Nature Communications, Science Advances, ACS Central Science, PNAS, and arXiv/ChemRxiv source PDFs.
- Convert selected source figures into consistent `1500x750` project assets, matching the existing `images/projects/*.jpg|png` convention.
- Include attribution in each project page near the source link, for example: "Figure adapted from [paper], licensed under [license]."
- If figure reuse is uncertain, build a neutral custom graphic from internal photos/diagrams instead of copying publisher figures.

Best candidate visuals:

- Nanomaterials evolution: Nature Communications Fig. 2 or Fig. 3.
- Curious protocells: Science Advances droplet behavior grid or robot setup.
- Networked robots: Nature Communications Fig. 1 network schematic or Fig. 3/4 collaboration graphic.
- Human-versus-robot discovery: Angewandte workflow/cluster figure.
- Inorganic cluster robot: ACS Central Science modular platform or POM discovery figure.
- Chemputation modules: ACS Central Science module taxonomy/workflow figure.

## Implementation Notes For Later

No implementation has been done yet.

When implementing:

1. Add research cards below existing client cards in `projects.html`.
2. Reuse the existing `.project-preview-grid` and `.project-preview` classes.
3. Add six new `projects/science-*.html` files based on existing client case-study template.
4. Use the same visual asset dimensions as existing project images: `1500x750`.
5. Consider adding a small source/publication block on each research page:

```html
<p class="project-detail"><span class="highlight">//</span> Published in Nature Communications, 2020. DOI: ...</p>
```

6. Add outbound links to DOI pages, not PDFs, unless there is a specific reason to link the PDF.

## Source Longlist

### Joint Jonathan + Daniel

| Year | Cites | Venue | Title | DOI |
|---|---:|---|---|---|
| 2020 | 158 | Nature Communications | A nanomaterials discovery robot for the Darwinian evolution of shape programmable gold nanoparticles | https://doi.org/10.1038/s41467-020-16501-4 |

### Daniel Salley, selected

| Year | Cites | Venue | Title | DOI |
|---|---:|---|---|---|
| 2022 | 180 | Science Advances | An artificial intelligence enabled chemical synthesis robot for exploration and optimization of nanomaterials | https://doi.org/10.1126/sciadv.abo2626 |
| 2020 | 158 | Nature Communications | A nanomaterials discovery robot for the Darwinian evolution of shape programmable gold nanoparticles | https://doi.org/10.1038/s41467-020-16501-4 |
| 2021 | 76 | Cell Reports Physical Science | Optimization of Formulations Using Robotic Experiments Driven by Machine Learning DoE | https://doi.org/10.1016/j.xcrp.2020.100295 |
| 2018 | 76 | Nature Communications | Networking chemical robots for reaction multitasking | https://doi.org/10.1038/s41467-018-05828-8 |
| 2021 | 63 | JACS | Robotic Stepwise Synthesis of Hetero-Multinuclear Metal Oxo Clusters as Single-Molecule Magnets | https://doi.org/10.1021/jacs.1c06047 |
| 2020 | 42 | ACS Central Science | A Modular Programmable Inorganic Cluster Discovery Robot for the Discovery and Synthesis of Polyoxometalates | https://doi.org/10.1021/acscentsci.0c00415 |
| 2023 | 33 | ACS Central Science | Robotic Modules for the Programmable Chemputation of Molecules and Materials | https://doi.org/10.1021/acscentsci.3c00304 |
| 2024 | 23 | JACS | Algorithm-Driven Robotic Discovery of Polyoxometalate-Scaffolding Metal-Organic Frameworks | https://doi.org/10.1021/jacs.4c09553 |
| 2026 | 3 | Digital Discovery | AI-driven robotic crystal explorer for rapid polymorph identification | https://doi.org/10.1039/d5dd00203f |

### Jonathan Grizou, selected

| Year | Cites | Venue | Title | DOI |
|---|---:|---|---|---|
| 2020 | 158 | Nature Communications | A nanomaterials discovery robot for the Darwinian evolution of shape programmable gold nanoparticles | https://doi.org/10.1038/s41467-020-16501-4 |
| 2017 | 126 | Angewandte Chemie International Edition | Human versus Robots in the Discovery and Crystallization of Gigantic Polyoxometalates | https://doi.org/10.1002/anie.201705721 |
| 2020 | 117 | Frontiers in Big Data | Interdisciplinary Research in Artificial Intelligence: Challenges and Opportunities | https://doi.org/10.3389/fdata.2020.577974 |
| 2020 | 74 | Science Advances | A curious formulation robot enables the discovery of a novel protocell behavior | https://doi.org/10.1126/sciadv.aay4237 |
| 2019 | 43 | Journal of Chemical Information and Modeling | Intuition-Enabled Machine Learning Beats the Competition When Joint Human-Robot Teams Perform Inorganic Chemical Experiments | https://doi.org/10.1021/acs.jcim.9b00304 |
| 2018 | 39 | PNAS | Artificial intelligence exploration of unstable protocells leads to predictable properties and discovery of collective behavior | https://doi.org/10.1073/pnas.1711089115 |
| 2017 | 39 | Nature Communications | Adaptive artificial evolution of droplet protocells in a 3D-printed fluidic chemorobotic platform with configurable environments | https://doi.org/10.1038/s41467-017-01161-8 |
| 2014 | 28 | AAAI | Calibration-Free BCI Based Control | https://doi.org/10.1609/aaai.v28i1.8923 |
| 2015 | 26 | PLoS ONE | Exploiting Task Constraints for Self-Calibrated Brain-Machine Interface Control Using Error-Related Potentials | https://doi.org/10.1371/journal.pone.0131491 |

## Open Questions For Review

1. Should scientific work live under `Projects`, or should we add a separate `Research` nav item?
2. Should we include exact citation counts, or avoid them to reduce maintenance?
3. Are we comfortable using publication figures with attribution, or should we create custom images from internal photos/diagrams?
4. Should client projects remain first, or should the strongest scientific project appear first to establish credibility?
5. Do we want to mention Chemify origin explicitly on the scientific pages, or keep that for the Chemify project page only?

