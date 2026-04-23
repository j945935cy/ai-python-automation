# 第 5 章：Excel 自動化

## 概念說明
很多重複工作都圍繞在 Excel。只要你能把 Excel 讀進 Python，就能開始做篩選、統計、轉換與輸出。`pandas` 可以把 Excel 資料表看成一個可操作的表格物件。

## 程式範例
```python
import pandas as pd

df = pd.read_excel("sales.xlsx")
high_sales = df[df["金額"] >= 10000]
high_sales.to_excel("high_sales.xlsx", index=False)

print("已輸出 high_sales.xlsx")
```

### 範例解讀
- `read_excel()` 讀取資料
- `df["金額"] >= 10000` 是篩選條件
- `to_excel()` 把結果輸出成新檔

## AI 任務
請 AI 根據你的欄位名稱、條件與輸出需求，改寫出對應的 `pandas` 程式。

## AI Prompt 範例
```text
我有一個 Excel 檔案 orders.xlsx，
欄位包含客戶、地區、金額、日期。
請用 pandas 寫一個適合初學者的程式，
篩選出金額大於 5000 的資料並另存新檔。
```

## 練習題
1. 把條件改成金額大於等於 3000。
2. 印出資料筆數。
3. 只保留 `客戶` 與 `金額` 兩欄。

## 挑戰題
讀取一份 Excel 後依地區分組統計總金額，再輸出成新的 Excel。

## 小結
Excel 自動化最重要的不是背 API，而是先知道欄位、條件與你要的輸出，再讓 AI 協助補齊細節。
