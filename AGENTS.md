# AGENTS.md

## 專案名稱
AI 自動化工具書：Python 實戰版

## 專案目標
建立一套「Python + AI 自動化」教材，並輸出：
- 網頁版教材（HTML/CSS/JS）
- EPUB 電子書
- Markdown 原始教材

## 核心理念
- 使用 AI（如 ChatGPT）輔助寫程式
- 強調「流程拆解」而非死背語法
- 每章包含：概念、範例、練習、AI 任務

## 開發原則
- 優先使用 HTML + CSS + JS（避免複雜框架）
- Python 程式需簡單、可教學
- 所有內容需「教學導向」
- 每段程式都要可解釋

## 教材風格
- 簡單白話
- 重點條列
- 實務導向（不要學術）

## AI 行為規範
- 先理解章節目標再生成內容
- 每章需有：
  - 範例程式
  - 練習題
  - AI Prompt 範例
- 不可產生過於複雜程式

## 技術限制
- 前端：純 HTML/CSS/JS
- Python：標準 + pandas + requests + selenium
- 不使用重型框架（React / Vue）

## 任務優先順序
1. 完成 BOOK_STRUCTURE.md
2. 生成 chapter01~10
3. 建立網頁版
4. 建立 EPUB 使用sigil 結構 