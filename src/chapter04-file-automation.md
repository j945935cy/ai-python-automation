# 第 4 章：檔案自動化

## 概念說明
檔案自動化是最適合初學者的主題之一，因為你可以直接看到結果。常見需求有：

- 建立資料夾
- 批次搬移檔案
- 依副檔名整理
- 重新命名

`pathlib` 能讓路徑處理更直觀，也比較適合教學。

## 程式範例
```python
from pathlib import Path

source_folder = Path("downloads")
target_folder = Path("images")
target_folder.mkdir(exist_ok=True)

for file_path in source_folder.glob("*.png"):
    file_path.rename(target_folder / file_path.name)
    print(f"已移動：{file_path.name}")
```

### 範例解讀
- `Path()` 用來建立路徑物件
- `mkdir(exist_ok=True)` 表示若資料夾不存在就建立
- `glob("*.png")` 找出所有 PNG 檔
- `rename()` 可用來改名或搬移

## AI 任務
請 AI 按照你的實際資料夾名稱，改寫成可直接使用的版本，並提醒可能的風險。

## AI Prompt 範例
```text
請用 pathlib 幫我寫一個 Python 程式，
把 downloads 資料夾中的所有 PDF 搬到 reports 資料夾。
程式要適合初學者，並逐行解釋。
```

## 練習題
1. 把範例改成搬移 `.jpg`。
2. 建立 `data`、`output`、`backup` 三個資料夾。
3. 只列出資料夾中的所有檔案，不做搬移。

## 挑戰題
設計一個依副檔名分類的檔案整理器，把檔案分到 `images`、`docs`、`archives`。

## 小結
檔案自動化雖然簡單，卻非常實用。當你學會這一章，就已經能開始解決真實工作的痛點。
