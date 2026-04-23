# 第 10 章：完整專案

## 概念說明
最後一章把前面的能力整合成一個「每週資料整理與報表輸出」專案。你會看到真實工作通常不是單一技巧，而是多個小流程串在一起。

## 程式範例
```python
import pandas as pd

df = pd.read_excel("weekly_orders.xlsx")
summary = df.groupby("地區")["金額"].sum().reset_index()
summary.to_excel("weekly_summary.xlsx", index=False)

top_region = summary.sort_values("金額", ascending=False).iloc[0]
message = f"本週銷售最高地區為 {top_region['地區']}，總金額為 {top_region['金額']}。"

print(message)
```

### 範例解讀
- 先讀取原始資料
- 再做分組統計
- 最後輸出報表與摘要文字

## AI 任務
請 AI 幫這個專案補上錯誤處理、日期檔名與摘要輸出到文字檔的功能。

## AI Prompt 範例
```text
請幫我優化下面的 Python 報表專案。
需求：
1. 讀取 weekly_orders.xlsx
2. 統計各地區總金額
3. 輸出 weekly_summary.xlsx
4. 產生一段中文摘要
請用初學者可理解的方式改寫，並說明每段程式用途。
```

## 練習題
1. 增加一個欄位統計平均金額。
2. 將摘要文字寫入 `summary.txt`。
3. 如果檔案不存在，顯示友善錯誤訊息。

## 挑戰題
將第 4 章到第 9 章任選兩種能力整合成你自己的小專案。

## 小結
完成專案不代表學習結束，而是你已經具備把工作流程變成程式的基本能力。下一步就是持續練習與優化。
