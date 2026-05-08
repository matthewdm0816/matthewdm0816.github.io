---
layout: default
permalink: /
title: "Wentao Mo"
excerpt: "PhD student at Peking University working on multimodal learning, computer vision, and embodied AI."
homepage: true
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<main id="home" class="home-shell">
  <section class="home-hero" aria-label="Profile introduction">
    <div class="home-hero__content">
      <p class="home-eyebrow">Peking University / Wangxuan Institute of Computer Technology</p>
      <h1>Wentao Mo</h1>
      <p class="home-lede">
        PhD student at Peking University working on multimodal learning,
        computer vision, and embodied AI.
      </p>
      <p class="home-intro">
        I joined the Wangxuan Institute of Computer Technology (WICT), PKU in
        September 2022 for my PhD, supervised by
        <a href="http://www.csyangliu.com/">Prof. Yang Liu</a>. My work explores
        how vision, language, and 3D scene understanding can support stronger
        reasoning in embodied environments.
      </p>
      <div class="home-actions" aria-label="Primary links">
        <a class="home-button home-button--primary" href="#publications">View publications</a>
        <a class="home-button" href="mailto:{{ site.author.email }}">Email</a>
        <a class="home-button" href="https://github.com/{{ site.author.github }}">GitHub</a>
        <a class="home-button" href="https://x.com/Kagurazaka_L">X</a>
      </div>
    </div>

    <aside class="home-profile" aria-label="Quick profile">
      <img src="{{ site.author.avatar }}" alt="Portrait of Wentao Mo" loading="eager">
      <div>
        <strong>Research Focus</strong>
        <span>3D vision, language grounding, and multimodal reasoning</span>
      </div>
      <div>
        <strong>Based in</strong>
        <span>Beijing / Peking University</span>
      </div>
    </aside>
  </section>

  <section id="research" class="home-section" aria-labelledby="research-title">
    <div class="home-section__header">
      <p class="home-eyebrow">Research</p>
      <h2 id="research-title">Building blocks for visual reasoning</h2>
    </div>
    <div class="home-focus-grid">
      <article>
        <h3>Multimodal Learning</h3>
        <p>Connecting visual, textual, and spatial signals so models can answer richer questions about scenes.</p>
      </article>
      <article>
        <h3>Computer Vision</h3>
        <p>Studying 2D and 3D scene understanding with an emphasis on practical visual question answering.</p>
      </article>
      <article>
        <h3>Embodied AI</h3>
        <p>Designing evaluation and pre-training resources that help agents reason in grounded environments.</p>
      </article>
    </div>
  </section>

  <section id="publications" class="home-section" aria-labelledby="publications-title">
    <div class="home-section__header">
      <p class="home-eyebrow">Publications</p>
      <h2 id="publications-title">Selected work</h2>
    </div>

    <div class="publication-list">
      <article class="publication-card publication-card--featured">
        <div class="publication-card__meta">
          <span class="publication-card__venue">ICML</span>
          <span class="publication-card__year">2026</span>
        </div>
        <h3>Distilling Neuro-Symbolic Programs into 3D Multi-modal LLMs</h3>
        <p><strong>Wentao Mo</strong>, Yang Liu</p>
        <div class="publication-card__links">
          <span>PDF soon</span>
          <span>Code soon</span>
          <span>arXiv soon</span>
          <span>Project soon</span>
        </div>
      </article>

      <article class="publication-card">
        <div class="publication-card__meta">
          <span class="publication-card__venue">ACM Multimedia</span>
          <span class="publication-card__year">2025</span>
        </div>
        <h3>Advancing 3D Scene Understanding with MV-ScanQA Multi-View Reasoning Evaluation and TripAlign Pre-training Dataset</h3>
        <p><strong>Wentao Mo</strong>, Qingchao Chen, Yuxin Peng, Siyuan Huang, Yang Liu</p>
        <div class="publication-card__links">
          <a href="https://arxiv.org/pdf/2508.11058">PDF</a>
          <a href="https://github.com/matthewdm0816/MVScanQA">Code</a>
          <a href="https://matthewdm0816.github.io/tripalign-mvscanqa/">Project</a>
        </div>
      </article>

      <article class="publication-card">
        <div class="publication-card__meta">
          <span class="publication-card__venue">AAAI</span>
          <span class="publication-card__year">2024</span>
        </div>
        <h3>Bridging the Gap between 2D and 3D Visual Question Answering: A Fusion Approach for 3D VQA</h3>
        <p><strong>Wentao Mo</strong>, Yang Liu</p>
        <div class="publication-card__links">
          <a href="https://drive.google.com/file/d/1U_r-bh895TxMOKidFKW-byEaa39Mq4fi/view?usp=sharing">PDF</a>
          <a href="https://github.com/matthewdm0816/BridgeQA">Code</a>
          <a href="https://matthewdm0816.github.io/BridgeQA-project/">Project</a>
        </div>
      </article>

      <article class="publication-card">
        <div class="publication-card__meta">
          <span class="publication-card__venue">IJCAI</span>
          <span class="publication-card__year">2024</span>
        </div>
        <h3>3D Vision and Language Pretraining with Large-Scale Synthetic Data</h3>
        <p>Dejie Yang, Zhu Xu, <strong>Wentao Mo</strong>, Qingchao Chen, Siyuan Huang, Yang Liu</p>
        <div class="publication-card__links">
          <a href="https://arxiv.org/pdf/2407.06084">PDF</a>
          <a href="https://github.com/idejie/3DSyn">Code</a>
        </div>
      </article>
    </div>
  </section>

  <section id="contact" class="home-contact" aria-label="Contact information">
    <div>
      <p class="home-eyebrow">Contact</p>
      <h2>Open to research conversations and collaboration.</h2>
    </div>
    <div class="home-contact__links">
      <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
      <a href="https://github.com/{{ site.author.github }}">github.com/{{ site.author.github }}</a>
      <a href="https://x.com/Kagurazaka_L">x.com/Kagurazaka_L</a>
    </div>
  </section>
</main>
