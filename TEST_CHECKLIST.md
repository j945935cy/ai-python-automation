# TEST_CHECKLIST.md

## 本地測試清單

### 1. Git 狀態
- [x] 工作樹乾淨
- [x] 本地分支已同步 `origin/main`

### 2. Markdown 書稿
- [x] `src/` 共 10 章
- [x] 每章都有必要章節：
  - `## 概念說明`
  - `## 程式範例`
  - `## AI 任務`
  - `## AI Prompt 範例`
  - `## 練習題`
  - `## 挑戰題`
  - `## 小結`

### 3. 網頁版
- [x] `web/index.html` 存在
- [x] `web/chapter.html` 存在
- [x] `web/styles.css` 存在
- [x] `web/script.js` 存在
- [x] 試閱只顯示 Chapter 1~5
- [x] Chapter 5 含 Google Play Books CTA

### 4. EPUB
- [x] `python tools/build_epub.py` 可成功執行
- [x] `.epub` 檔已生成
- [x] 首個 ZIP 項目是 `mimetype`
- [x] `mimetype` 使用未壓縮格式
- [x] 含 `META-INF/container.xml`
- [x] 含 `OEBPS/content.opf`
- [x] 含 `OEBPS/nav.xhtml`
- [x] 含封面頁與封面資源
- [x] 含 10 章 XHTML
- [x] `content.opf` 含 title / language / creator / publisher / description / cover metadata
- [x] `nav.xhtml` 列出封面與 10 章

### 5. 風險備註
- [x] 已記錄無法透過純本地靜態驗證覆蓋的項目

## 本次驗證限制
- 尚未用真實瀏覽器做人眼點擊與版面檢查
- 尚未用 Google Play Books 後台或外部 EPUB 驗證器做正式上架測試
- Chapter 5 的 CTA 目前導向 Google Play Books 商店首頁，尚未替換成實際商品頁
