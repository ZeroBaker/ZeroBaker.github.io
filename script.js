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
    const section = data.recipesSection;
    if (!container || !section || !Array.isArray(data.recipeNotes)) return;

    const englishTitle = document.querySelector("[data-recipes-english-title]");
    const title = document.querySelector("[data-recipes-title]");
    const intro = document.querySelector("[data-recipes-intro]");
    if (englishTitle) englishTitle.textContent = section.englishTitle;
    if (title) title.textContent = section.title;
    if (intro) intro.textContent = section.intro;

    data.recipeNotes.forEach((recipe) => {
      const paperBall = document.createElement("button");
      paperBall.className = "recipe-paper-ball";
      paperBall.type = "button";
      paperBall.dataset.recipeId = recipe.id;
      paperBall.style.setProperty("--note-accent", recipe.accent);
      paperBall.setAttribute(
        "aria-label",
        `打开 Recipe Note ${recipe.number}：${recipe.title}`,
      );

      const number = createTextElement(
        "span",
        "recipe-paper-ball-number",
        `NOTE ${recipe.number}`,
      );
      const type = createTextElement("span", "recipe-paper-ball-type", recipe.type);
      const hint = createTextElement("span", "recipe-paper-ball-hint", recipe.title);
      paperBall.append(number, type, hint);
      container.append(paperBall);
    });
  };

  const setupRecipeModal = () => {
    const modal = document.querySelector("[data-recipe-modal]");
    const dialog = document.querySelector("[data-recipe-dialog]");
    const content = document.querySelector("[data-recipe-modal-content]");
    const paperBalls = document.querySelectorAll(".recipe-paper-ball");
    if (!modal || !dialog || !content || !paperBalls.length) return;

    let returnFocusTarget = null;
    let activeAudio = null;

    const stopAudio = () => {
      if (!activeAudio) return;
      activeAudio.pause();
      try {
        activeAudio.currentTime = 0;
      } catch (error) {
        console.warn("音频尚未就绪，关闭秘方时无法重置进度。", error);
      }
      activeAudio = null;
    };

    const closeModal = () => {
      if (modal.hidden) return;
      stopAudio();
      modal.hidden = true;
      document.body.classList.remove("is-recipe-modal-open");
      content.replaceChildren();
      returnFocusTarget?.focus();
      returnFocusTarget = null;
    };

    const createActionLink = (recipe) => {
      if (!recipe.url || !recipe.linkLabel) return null;
      const link = createTextElement("a", "recipe-modal-action", recipe.linkLabel);
      link.href = recipe.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `${recipe.linkLabel}（在新标签页打开）`);
      const icon = createTextElement("span", "recipe-modal-action-icon", "↗");
      icon.setAttribute("aria-hidden", "true");
      link.append(icon);
      return link;
    };

    const createDownloadLink = (recipe) => {
      if (!recipe.downloadFile || !recipe.downloadLabel) return null;
      const link = createTextElement(
        "a",
        "recipe-modal-action recipe-modal-download",
        recipe.downloadLabel,
      );
      link.href = recipe.downloadFile;
      link.download = recipe.downloadName || "";
      const icon = createTextElement("span", "recipe-modal-action-icon", "↓");
      icon.setAttribute("aria-hidden", "true");
      link.append(icon);
      return link;
    };

    const createAudioPlayer = (recipe) => {
      if (!recipe.audio) return null;

      const audioBlock = document.createElement("div");
      audioBlock.className = "recipe-audio-block";
      const audioLabel = createTextElement(
        "p",
        "recipe-audio-label",
        recipe.audioLabel || "试听音乐",
      );
      const audio = document.createElement("audio");
      audio.className = "recipe-audio-player";
      audio.controls = true;
      audio.preload = "metadata";
      audio.src = recipe.audio;
      audio.setAttribute(
        "aria-label",
        `${recipe.title}：${recipe.audioLabel || "音乐试听"}`,
      );
      const errorMessage = createTextElement(
        "p",
        "recipe-audio-error",
        "音频暂时无法加载，请稍后再试。",
      );
      errorMessage.hidden = true;
      audio.addEventListener("error", () => {
        errorMessage.hidden = false;
      });
      audioBlock.append(audioLabel, audio, errorMessage);
      activeAudio = audio;
      return audioBlock;
    };

    const openModal = (recipe, trigger) => {
      stopAudio();
      returnFocusTarget = trigger;
      dialog.style.setProperty("--note-accent", recipe.accent);

      const header = document.createElement("header");
      header.className = "recipe-modal-header";
      const title = createTextElement("h3", "recipe-modal-title", recipe.title);
      title.id = "recipe-modal-title";
      header.append(
        createTextElement(
          "span",
          "recipe-modal-number",
          `RECIPE NOTE ${recipe.number}`,
        ),
        title,
        createTextElement("p", "recipe-modal-subtitle", recipe.subtitle),
        createTextElement("span", "recipe-modal-type", recipe.type),
      );

      const imageFrame = document.createElement("figure");
      imageFrame.className = "recipe-modal-image-frame";
      const image = document.createElement("img");
      image.src = recipe.image;
      image.alt = recipe.imageAlt || recipe.title;
      image.loading = "eager";
      image.decoding = "async";
      imageFrame.append(image);

      const body = createTextElement("p", "recipe-modal-body", recipe.body);
      body.id = "recipe-modal-body";
      const details = document.createElement("div");
      details.className = "recipe-modal-details";
      details.append(header, body);

      const audioBlock = createAudioPlayer(recipe);
      if (audioBlock) details.append(audioBlock);

      const actions = document.createElement("div");
      actions.className = "recipe-modal-actions";
      const externalLink = createActionLink(recipe);
      const downloadLink = createDownloadLink(recipe);
      if (externalLink) actions.append(externalLink);
      if (downloadLink) actions.append(downloadLink);
      if (actions.childElementCount) details.append(actions);

      content.replaceChildren(imageFrame, details);
      modal.hidden = false;
      document.body.classList.add("is-recipe-modal-open");
      dialog.scrollTop = 0;
      dialog.focus();
    };

    paperBalls.forEach((paperBall) => {
      paperBall.addEventListener("click", () => {
        const recipe = data.recipeNotes.find(
          (item) => item.id === paperBall.dataset.recipeId,
        );
        if (recipe) openModal(recipe, paperBall);
      });
    });

    modal.querySelectorAll("[data-recipe-close]").forEach((closeControl) => {
      closeControl.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (modal.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = Array.from(
        dialog.querySelectorAll(
          'button:not([disabled]), a[href], audio[controls], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusableElements.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (
        event.shiftKey &&
        (document.activeElement === firstElement || document.activeElement === dialog)
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });
  };

  const renderContact = () => {
    const container = document.querySelector("[data-social-links]");
    const contact = data.contact;
    if (!container || !contact || !Array.isArray(contact.links)) return;

    const englishTitle = document.querySelector("[data-contact-english-title]");
    const title = document.querySelector("[data-contact-title]");
    const introChinese = document.querySelector("[data-contact-intro-cn]");
    const introEnglish = document.querySelector("[data-contact-intro-en]");
    const image = document.querySelector("[data-contact-image]");
    const closingLine = document.querySelector("[data-contact-closing-line]");

    if (englishTitle) englishTitle.textContent = contact.englishTitle;
    if (title) title.textContent = contact.title;
    if (introChinese) introChinese.textContent = contact.introChinese;
    if (introEnglish) introEnglish.textContent = contact.introEnglish;
    if (closingLine) closingLine.textContent = contact.closingLine;
    if (image && contact.image) {
      image.src = contact.image.src;
      image.alt = contact.image.alt;
    }

    contact.links.forEach((item) => {
      const link = document.createElement("a");
      link.className = "social-link";
      link.href = item.url;

      const name = document.createElement("span");
      name.className = "social-link-name";
      name.append(
        createTextElement("span", "social-link-label", item.label),
        createTextElement("span", "social-link-english", item.english),
      );

      if (item.display) {
        name.append(createTextElement("span", "social-link-value", item.display));
      }

      const icon = createTextElement(
        "span",
        "social-link-icon",
        item.type === "email" ? "@" : "↗",
      );
      icon.setAttribute("aria-hidden", "true");
      link.append(name, icon);

      if (item.type === "external") {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute(
          "aria-label",
          `${item.label}，${item.english}（在新标签页打开）`,
        );
      } else {
        link.setAttribute(
          "aria-label",
          `${item.label}，${item.english}：${item.display}`,
        );
      }

      container.append(link);
    });

    const footer = data.footer;
    const footerSiteName = document.querySelector("[data-footer-site-name]");
    const footerMessage = document.querySelector("[data-footer-message]");
    if (footerSiteName && footer) footerSiteName.textContent = footer.siteName;
    if (footerMessage && footer) footerMessage.textContent = footer.message;
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
    setupRecipeModal();
    renderContact();
    setupNavigation();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePage);
  } else {
    initializePage();
  }
})();
