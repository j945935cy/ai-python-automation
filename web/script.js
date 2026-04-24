const chapters = window.BOOK_CHAPTERS || [];
const PURCHASE_URL = "https://books.google.com.tw/books/about?id=xijTEQAAQBAJ&redir_esc=y";

function renderChapterList() {
  const chapterList = document.getElementById("chapter-list");
  if (!chapterList) return;

  chapterList.innerHTML = chapters
    .map(
      (chapter) => `
    <a class="card chapter-card" href="chapter.html?id=${chapter.id}">
      <span class="chapter-number">Chapter ${chapter.number}</span>
      <h3>${chapter.fullTitle || chapter.title}</h3>
      <p>${chapter.summary}</p>
    </a>
  `
    )
    .join("");
}

function renderSidebar(activeId) {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.innerHTML = `
    <p class="eyebrow">全部章節</p>
    ${chapters
      .map(
        (chapter) => `
      <a class="sidebar-link ${chapter.id === activeId ? "active" : ""}" href="chapter.html?id=${chapter.id}">
        <span>Chapter ${chapter.number}</span>
        <strong>${chapter.fullTitle || chapter.title}</strong>
      </a>
    `
      )
      .join("")}
  `;
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderInlineMarkdown(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderBlock(block) {
  if (block.type === "paragraph") {
    return `<p>${renderInlineMarkdown(block.text)}</p>`;
  }

  if (block.type === "subheading") {
    return `<h3>${renderInlineMarkdown(block.text)}</h3>`;
  }

  if (block.type === "code") {
    return `<pre class="reader-code"><code>${escapeHtml(block.text)}</code></pre>`;
  }

  if (block.type === "list") {
    const tag = block.ordered ? "ol" : "ul";
    return `
      <${tag} class="reader-list">
        ${block.items.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}
      </${tag}>
    `;
  }

  return "";
}

function renderSection(section) {
  return `
    <section class="card reader-block">
      <h2>${section.title}</h2>
      ${section.blocks.map(renderBlock).join("")}
    </section>
  `;
}

function renderReader() {
  const reader = document.getElementById("reader-content");
  if (!reader) return;

  const params = new URLSearchParams(window.location.search);
  const currentId = params.get("id") || "chapter01";
  const chapter = chapters.find((item) => item.id === currentId) || chapters[0];
  if (!chapter) return;

  document.title = `${chapter.fullTitle || chapter.title} | AI 自動化工具書`;
  renderSidebar(chapter.id);

  reader.innerHTML = `
    <p class="eyebrow">Chapter ${chapter.number}</p>
    <h1>${chapter.fullTitle || chapter.title}</h1>
    <p class="lead">${chapter.summary}</p>
    ${chapter.sections.map(renderSection).join("")}
    <section class="card cta-card">
      <p class="eyebrow">繼續閱讀</p>
      <h2>前往 Google 圖書購書頁</h2>
      <p>如果你想直接在 Google 圖書查看與購買這本書，請使用下方連結。</p>
      <a class="button primary" href="${PURCHASE_URL}" target="_blank" rel="noreferrer">前往 Google 圖書</a>
    </section>
  `;
}

renderChapterList();
renderReader();
