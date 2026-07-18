/* 网站基础交互与内容渲染。复杂动画会在后续阶段单独实现。 */
(function () {
  "use strict";

  const data = window.siteData;

  if (!data) {
    console.error("没有读取到 content.js 中的 siteData，请检查脚本加载顺序。");
    return;
  }

  const createTextElement = (tagName, className, text) => {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const createBilingualLabel = (item) => {
    const label = document.createElement("span");
    label.className = "bilingual-label";
    label.append(
      createTextElement("span", "bilingual-label-cn", item.label),
      createTextElement("span", "bilingual-label-en", item.english),
    );
    return label;
  };

  const renderHome = () => {
    const home = data.home;
    if (!home) return;

    const eyebrow = document.querySelector("[data-home-eyebrow]");
    const title = document.querySelector("[data-home-title]");
    const intro = document.querySelector("[data-home-intro]");
    const layover = document.querySelector("[data-home-layover]");
    if (eyebrow) eyebrow.textContent = home.eyebrow;
    if (title) title.textContent = home.title;
    if (intro) intro.textContent = home.intro;
    if (layover) layover.textContent = home.layover;

    const navigation = document.querySelector("[data-site-nav]");
    home.navigation.forEach((item) => {
      const link = document.createElement("a");
      link.href = `#${item.target}`;
      link.setAttribute("aria-label", `${item.label}，${item.english}`);
      link.append(createBilingualLabel(item));
      navigation?.append(link);
    });

    const cakeLinks = document.querySelector("[data-cake-links]");
    home.cakes.forEach((item) => {
      const link = document.createElement("a");
      link.className = "cake-link";
      link.href = `#${item.target}`;
      link.setAttribute("aria-label", `前往${item.label}，${item.english}`);

      const imageFrame = document.createElement("span");
      imageFrame.className = "cake-image-frame";
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = "";
      image.width = 1024;
      image.height = 1024;
      image.loading = "eager";
      imageFrame.append(image);

      link.append(imageFrame, createBilingualLabel(item));
      cakeLinks?.append(link);
    });
  };

  const renderAbout = () => {
    const container = document.querySelector("[data-about-cards]");
    const about = data.about;
    if (!container || !about) return;

    const englishTitle = document.querySelector("[data-about-english-title]");
    const title = document.querySelector("[data-about-title]");
    const intro = document.querySelector("[data-about-intro]");
    const image = document.querySelector("[data-about-image]");

    if (englishTitle) englishTitle.textContent = about.englishTitle;
    if (title) title.textContent = about.title;
    if (intro) intro.textContent = about.intro;
    if (image) {
      image.src = about.image.src;
      image.alt = about.image.alt;
    }

    about.recipes.forEach((item) => {
      const card = document.createElement("article");
      card.className = "about-card";
      card.dataset.theme = item.theme;

      const icon = document.createElement("span");
      icon.className = `about-card-icon about-card-icon--${item.icon}`;
      icon.setAttribute("aria-hidden", "true");

      const titleGroup = document.createElement("div");
      titleGroup.className = "about-card-title-group";
      titleGroup.append(
        createTextElement("h3", "about-card-title", item.title),
        createTextElement("p", "about-card-title-en", item.englishTitle),
      );

      card.append(
        createTextElement("span", "recipe-number", item.number),
        icon,
        titleGroup,
        createTextElement("p", "about-card-text", item.text),
      );
      container.append(card);
    });
  };

  const setupAboutReveal = () => {
    const cards = document.querySelectorAll(".about-card");
    if (!cards.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    cards.forEach((card) => {
      card.classList.add("is-reveal-ready");
      observer.observe(card);
    });
  };

  const renderProjects = () => {
    const container = document.querySelector("[data-project-list]");
    const section = data.projectsSection;
    if (!container || !section || !Array.isArray(data.projects)) return;

    const englishTitle = document.querySelector("[data-projects-english-title]");
    const title = document.querySelector("[data-projects-title]");
    const intro = document.querySelector("[data-projects-intro]");
    if (englishTitle) englishTitle.textContent = section.englishTitle;
    if (title) title.textContent = section.title;
    if (intro) intro.textContent = section.intro;

    const decorations = document.querySelector("[data-project-decorations]");
    if (decorations) {
      const decorationClasses = ["whisk", "crumbs", "bun", "rack"];
      const note = createTextElement(
        "span",
        "project-decor project-decor--note",
        section.decorativeNote,
      );
      decorations.append(note);
      decorationClasses.forEach((className) => {
        const decoration = document.createElement("span");
        decoration.className = `project-decor project-decor--${className}`;
        decorations.append(decoration);
      });
    }

    data.projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      card.dataset.theme = project.theme;

      const hasExternalLink =
        typeof project.url === "string" &&
        project.url.trim() !== "" &&
        project.url !== "#";

      const imageContainer = document.createElement(hasExternalLink ? "a" : "div");
      imageContainer.className = "project-image-link";

      if (hasExternalLink) {
        imageContainer.href = project.url;
        imageContainer.target = "_blank";
        imageContainer.rel = "noopener noreferrer";
        imageContainer.setAttribute(
          "aria-label",
          `查看“${project.title}”原作（在新标签页打开）`,
        );
      } else {
        imageContainer.classList.add("is-unavailable");
      }

      const image = document.createElement("img");
      image.src = project.image;
      image.alt = project.imageAlt;
      image.width = 1600;
      image.height = 1200;
      image.loading = "lazy";
      image.decoding = "async";
      image.style.objectPosition = project.objectPosition || "center";

      imageContainer.append(image);
      if (hasExternalLink) {
        const externalIcon = createTextElement("span", "project-external-icon", "↗");
        externalIcon.setAttribute("aria-hidden", "true");
        imageContainer.append(externalIcon);
      }

      card.append(
        createTextElement("span", "project-meta", project.platform),
        imageContainer,
        createTextElement("h3", "project-title", project.title),
        createTextElement("p", "project-description", project.description),
        createTextElement(
          "p",
          `project-hint${hasExternalLink ? "" : " is-unavailable"}`,
          hasExternalLink ? section.imageHint : section.unavailableHint,
        ),
      );
      container.append(card);
    });
  };

  const renderRecipes = () => {
    const container = document.querySelector("[data-recipe-list]");
    if (!container) return;

    data.recipes.forEach((recipe, index) => {
      const card = document.createElement("article");
      card.className = "recipe-card";
      card.dataset.imagePath = recipe.image;
      card.append(
        createTextElement("span", "recipe-number", `Secret ${String(index + 1).padStart(2, "0")}`),
        createTextElement("h3", "", recipe.title),
        createTextElement("p", "", recipe.text),
      );
      container.append(card);
    });
  };

  const renderSocialLinks = () => {
    const container = document.querySelector("[data-social-links]");
    if (!container) return;

    data.socialLinks.forEach((social) => {
      const link = createTextElement("a", "social-link", social.label);
      link.href = social.url;

      if (social.url === "#") {
        link.classList.add("is-disabled");
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => event.preventDefault());
      } else if (!social.url.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      container.append(link);
    });
  };

  const setupNavigation = () => {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector(".nav-toggle");
    const navigation = document.querySelector(".site-nav");

    const updateHeader = () => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const closeNavigation = () => {
      if (!toggle || !navigation) return;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "打开导航菜单");
      navigation.classList.remove("is-open");
    };

    toggle?.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "打开导航菜单" : "关闭导航菜单");
      navigation?.classList.toggle("is-open", !isOpen);
    });

    navigation?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNavigation();
    });

    document.addEventListener("click", (event) => {
      if (!header?.contains(event.target)) closeNavigation();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeNavigation();
    });

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  };

  const initializePage = () => {
    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = String(new Date().getFullYear());

    renderHome();
    renderAbout();
    setupAboutReveal();
    renderProjects();
    renderRecipes();
    renderSocialLinks();
    setupNavigation();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
  } else {
    initializePage();
  }
})();
