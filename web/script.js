const previewChapters = [
  {
    id: "chapter01",
    number: "01",
    title: "AI 自動化概念",
    summary: "建立自動化流程感，理解 AI 在任務中的角色。",
    sections: [
      { title: "概念說明", body: "自動化的重點不是炫技，而是把重複、可描述、可驗證的工作交給程式處理。" },
      { title: "本章收穫", body: "你會建立取得資料、處理資料、輸出結果、驗證結果的基本流程模型。" },
      { title: "完整書稿", body: "本章完整內容收錄於 src 與 EPUB 版本。" }
    ]
  },
  {
    id: "chapter02",
    number: "02",
    title: "Prompt 基礎",
    summary: "學會把模糊需求寫成 AI 看得懂的工作說明書。",
    sections: [
      { title: "概念說明", body: "好的 Prompt 通常包含角色、任務、限制與輸出格式四個元素。" },
      { title: "本章收穫", body: "你會知道如何要求 AI 寫出更簡單、可解釋、適合初學者的程式。" },
      { title: "完整書稿", body: "完整版本含練習題、挑戰題與 Prompt 模板。" }
    ]
  },
  {
    id: "chapter03",
    number: "03",
    title: "看懂 AI 程式",
    summary: "從輸入、處理、輸出三個角度學會閱讀 AI 產生的程式。",
    sections: [
      { title: "概念說明", body: "不要一次讀完整段程式，先找資料從哪裡來、經過哪些條件、最後輸出到哪裡。" },
      { title: "本章收穫", body: "你會學會拆段閱讀與自我驗證，不再只是複製貼上。" },
      { title: "完整書稿", body: "完整版本包含更多程式註解範例與練習。" }
    ],
    cta: {
      heading: "繼續閱讀完整 10 章",
      text: "後續章節將進入檔案自動化、Excel、網頁爬蟲、Selenium、桌面流程與完整專案。",
      href: "https://play.google.com/store/books",
      label: "前往 Google Play Books"
    }
  }
];

function renderChapterList() {
  const chapterList = document.getElementById("chapter-list");
  if (!chapterList) return;

  chapterList.innerHTML = previewChapters.map((chapter) => `
    <a class="card chapter-card" href="chapter.html?id=${chapter.id}">
      <span class="chapter-number">Chapter ${chapter.number}</span>
      <h3>${chapter.title}</h3>
      <p>${chapter.summary}</p>
    </a>
  `).join("");
}

function renderSidebar(activeId) {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.innerHTML = `
    <p class="eyebrow">試閱章節</p>
    ${previewChapters.map((chapter) => `
      <a class="sidebar-link ${chapter.id === activeId ? "active" : ""}" href="chapter.html?id=${chapter.id}">
        <span>Chapter ${chapter.number}</span>
        <strong>${chapter.title}</strong>
      </a>
    `).join("")}
  `;
}

function renderReader() {
  const reader = document.getElementById("reader-content");
  if (!reader) return;

  const params = new URLSearchParams(window.location.search);
  const currentId = params.get("id") || "chapter01";
  const chapter = previewChapters.find((item) => item.id === currentId) || previewChapters[0];

  document.title = `${chapter.title} | AI 自動化工具書`;
  renderSidebar(chapter.id);

  const ctaHtml = chapter.cta ? `
    <section class="card cta-card">
      <p class="eyebrow">繼續閱讀</p>
      <h2>${chapter.cta.heading}</h2>
      <p>${chapter.cta.text}</p>
      <a class="button primary" href="${chapter.cta.href}" target="_blank" rel="noreferrer">${chapter.cta.label}</a>
    </section>
  ` : "";

  reader.innerHTML = `
    <p class="eyebrow">Chapter ${chapter.number}</p>
    <h1>${chapter.title}</h1>
    <p class="lead">${chapter.summary}</p>
    ${chapter.sections.map((section) => `
      <section class="card reader-block">
        <h2>${section.title}</h2>
        <p>${section.body}</p>
      </section>
    `).join("")}
    ${ctaHtml}
  `;
}

renderChapterList();
renderReader();
