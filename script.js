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
    if (!container) return;

    data.about.forEach((item) => {
      const card = document.createElement("article");
      card.className = "about-card";
      card.append(
        createTextElement("span", "recipe-number", item.number),
        createTextElement("h3", "", item.title),
        createTextElement("p", "", item.text),
      );
      container.append(card);
    });
  };

  const renderProjects = () => {
    const container = document.querySelector("[data-project-list]");
    if (!container) return;

    data.projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";

      const imagePlaceholder = createTextElement(
        "div",
        "placeholder project-image-placeholder",
        `封面图占位：${project.image}`,
      );
      imagePlaceholder.setAttribute("role", "img");
      imagePlaceholder.setAttribute("aria-label", `${project.title}封面图占位区域`);

      const details = createTextElement(
        "p",
        "",
        `${project.description} 结果：${project.result}。我的职责：${project.role}。`,
      );

      const actions = document.createElement("div");
      actions.className = "card-actions";
      const link = createTextElement("a", "text-link", "查看原作");
      link.href = project.url;

      if (project.url === "#") {
        link.classList.add("is-disabled");
        link.setAttribute("aria-disabled", "true");
        link.addEventListener("click", (event) => event.preventDefault());
      } else {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      actions.append(link);
      card.append(
        imagePlaceholder,
        createTextElement("span", "project-meta", project.category),
        createTextElement("h3", "", project.title),
        details,
        actions,
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
