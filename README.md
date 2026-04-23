# AI 自動化工具書：Python 實戰版

## 專案內容
這個專案是一套給初學者的「Python + AI 自動化」教材，包含：

- `src/`：完整 10 章 Markdown 書稿
- `web/`：閱讀型試閱網站，目前只顯示 Chapter 1~3
- `epub/`：可上架 Google Play Books 的 EPUB 輸出與資源
- `tools/build_epub.py`：從 Markdown 產生 EPUB 的建置腳本

## 主題範圍
- AI 自動化概念
- Prompt 基礎
- 看懂 AI 程式
- 檔案自動化
- Excel 自動化
- 網頁爬蟲
- Selenium 自動化
- 桌面自動化
- 報表自動化
- 完整專案整合

## 使用方式
1. 直接閱讀 `src/*.md`
2. 開啟 `web/index.html` 查看試閱版網站
3. 執行 `python tools/build_epub.py` 重新產生 EPUB

## 輸出說明
- 網頁版依需求僅展示 Chapter 1~3
- Chapter 3 結尾包含 Google Play Books 購書 CTA
- 完整書籍內容會保留在 `src/` 與 `epub/`
