# 第 6 章：網頁爬蟲

## 概念說明
網頁爬蟲的基本步驟通常是：

1. 發送請求
2. 取得內容
3. 擷取目標資料
4. 存檔或分析

一開始先學會穩定取得 HTML，不急著一次用太多工具。

## 程式範例
```python
import requests

url = "https://example.com"
response = requests.get(url, timeout=10)

print("狀態碼：", response.status_code)
print(response.text[:200])
```

### 範例解讀
- `requests.get()` 送出請求
- `timeout=10` 可避免等待太久
- `status_code` 可判斷是否成功
- `response.text[:200]` 先檢查內容前 200 字

## AI 任務
請 AI 幫你把某個網頁的目標資訊拆成擷取步驟，例如標題、價格或連結。

## AI Prompt 範例
```text
請教我如何用 requests 抓取一個網頁的 HTML，
並用最簡單的方式找出頁面中的標題文字。
請用初學者語氣說明。
```

## 練習題
1. 改成抓取你自己的測試網站。
2. 印出回應內容長度。
3. 只有在狀態碼是 200 時才顯示內容。

## 挑戰題
抓取一個列表頁面，輸出前 5 個標題。

## 小結
爬蟲學習不要貪快。先把請求與回應看懂，再逐步學解析，會更穩定。
