const previewChapters = [
  {
    id: "chapter01",
    number: "01",
    title: "AI 自動化概念",
    summary: "建立自動化流程感，理解 AI 在任務中的角色。",
    sections: [
      {
        title: "概念說明",
        paragraphs: [
          "自動化的核心不是把所有事都交給機器，而是把重複、可描述、可驗證的工作交給程式處理。AI 在這裡更像一位協作助手，能幫你拆流程、寫草稿、解釋錯誤。",
          "學 Python 自動化時，先記住一個穩定模型：取得資料、處理資料、輸出結果、驗證結果。很多真實工作場景都能用這個框架理解。"
        ]
      },
      {
        title: "程式範例",
        code: `tasks = ["下載資料", "整理欄位", "輸出報表"]

for task in tasks:
    print(f"正在執行：{task}")

print("全部任務完成")`
      },
      {
        title: "AI 任務",
        paragraphs: [
          "請 AI 幫你把一個日常重複工作拆成 4 到 6 個步驟，並指出哪幾步最適合用 Python 自動化。"
        ]
      },
      {
        title: "AI Prompt 範例",
        code: `你是一位 Python 自動化助教。
請把下面的工作流程拆成初學者可以理解的步驟，
並指出哪些部分適合用 Python 自動化：
每天下載資料、整理欄位、輸出報表、寄給主管。`
      },
      {
        title: "練習題",
        list: [
          "列出 3 個你生活中可能重複發生的工作。",
          "把其中 1 個工作拆成取得資料、處理資料、輸出結果三段。",
          "將你拆好的流程改寫成 Python 串列。"
        ]
      },
      {
        title: "挑戰題",
        paragraphs: [
          "設計一個每週資料整理流程圖，先不用真的寫出完整程式，但要清楚列出每一步。"
        ]
      }
    ]
  },
  {
    id: "chapter02",
    number: "02",
    title: "Prompt 基礎",
    summary: "學會把模糊需求寫成 AI 看得懂的工作說明書。",
    sections: [
      {
        title: "概念說明",
        paragraphs: [
          "Prompt 是你交給 AI 的工作說明書。對初學者最有幫助的 Prompt，通常包含角色、任務、限制與輸出格式四個元素。",
          "當你把需求描述清楚，AI 比較不會產生過度複雜、難以維護，或不符合學習節奏的程式。"
        ]
      },
      {
        title: "程式範例",
        code: `prompt = """
你是一位 Python 初學者助教。
請示範如何列出資料夾中的所有檔案。
只能使用標準函式庫，並逐行解釋程式。
"""

print(prompt)`
      },
      {
        title: "AI 任務",
        paragraphs: [
          "把你自己寫的一段模糊需求交給 AI，要求它改寫成更適合初學者的高品質 Prompt。"
        ]
      },
      {
        title: "AI Prompt 範例",
        code: `請把下面這句模糊請求改寫成適合初學者的 Prompt：
"幫我整理檔案"

請補上角色、任務、限制與輸出格式。`
      },
      {
        title: "練習題",
        list: [
          "寫一個 Prompt，要求 AI 幫你列出資料夾中的所有 PDF。",
          "寫一個 Prompt，要求 AI 用 pandas 讀取 Excel。",
          "寫一個 Prompt，要求 AI 解釋一段錯誤訊息。"
        ]
      },
      {
        title: "挑戰題",
        paragraphs: [
          "寫一個完整 Prompt，要求 AI 產生下載網頁後存成文字檔的範例程式，並附逐段說明。"
        ]
      }
    ]
  },
  {
    id: "chapter03",
    number: "03",
    title: "看懂 AI 程式",
    summary: "從輸入、處理、輸出三個角度學會閱讀 AI 產生的程式。",
    sections: [
      {
        title: "概念說明",
        paragraphs: [
          "看懂 AI 程式的關鍵，不是一次把全部讀完，而是先找出輸入資料、處理邏輯與輸出結果。",
          "當你開始會分段閱讀，就能更快判斷這段程式是不是合理，也比較知道該怎麼請 AI 修改。"
        ]
      },
      {
        title: "程式範例",
        code: `numbers = [5, 12, 18, 3]
result = []

for number in numbers:
    if number >= 10:
        result.append(number)

print(result)`
      },
      {
        title: "AI 任務",
        paragraphs: [
          "請 AI 將一段你看不懂的程式拆成 4 個小段，每段都用白話說明。"
        ]
      },
      {
        title: "AI Prompt 範例",
        code: `請把下面這段 Python 程式拆成 4 個小區塊說明。
每個區塊都要回答：
1. 這段在做什麼
2. 為什麼需要它
3. 初學者最容易卡在哪裡`
      },
      {
        title: "練習題",
        list: [
          "找出範例中的輸入、條件與輸出。",
          "把條件改成 number >= 15，預測結果。",
          "在迴圈中加入一行，印出目前正在檢查的數字。"
        ]
      },
      {
        title: "挑戰題",
        paragraphs: [
          "請讓 AI 幫你產生一段 10 行內的檔案處理程式，然後自己分段加上註解解釋。"
        ]
      }
    ],
    cta: {
      heading: "繼續閱讀完整 10 章",
      text: "完整版將繼續進入檔案自動化、Excel、網頁爬蟲、Selenium、桌面流程與完整專案，適合想把教材真正用在工作流程的人。",
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

function renderSection(section) {
  const paragraphsHtml = (section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("");
  const listHtml = section.list ? `
    <ul class="reader-list">
      ${section.list.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  ` : "";
  const codeHtml = section.code ? `
    <pre class="reader-code"><code>${section.code}</code></pre>
  ` : "";

  return `
    <section class="card reader-block">
      <h2>${section.title}</h2>
      ${paragraphsHtml}
      ${codeHtml}
      ${listHtml}
    </section>
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
    ${chapter.sections.map(renderSection).join("")}
    ${ctaHtml}
  `;
}

renderChapterList();
renderReader();
