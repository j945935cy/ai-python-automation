# 第 7 章：Selenium 自動化

## 概念說明
有些網站需要點擊、輸入、登入或等待動態載入，這時只靠 `requests` 不夠。Selenium 可以幫你控制瀏覽器，模擬真實操作流程。

## 程式範例
```python
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("https://example.com")

title = driver.find_element(By.TAG_NAME, "h1").text
print("頁面標題：", title)

driver.quit()
```

### 範例解讀
- `webdriver.Chrome()` 啟動瀏覽器
- `get()` 開啟指定網址
- `find_element()` 尋找頁面元素
- `quit()` 關閉瀏覽器

## AI 任務
把網站操作步驟整理成列表，請 AI 幫你翻成 Selenium 流程，並標出需要等待的地方。

## AI Prompt 範例
```text
請幫我把下面操作流程轉成 Selenium Python 程式：
1. 開啟網站
2. 找到搜尋框
3. 輸入關鍵字
4. 按下搜尋
程式要簡單，並逐行說明。
```

## 練習題
1. 改成抓取頁面的 `<title>`。
2. 加上一秒等待。
3. 試著用不同定位方式找元素。

## 挑戰題
設計一個自動登入測試網站並截圖保存的 Selenium 腳本。

## 小結
Selenium 的重點不是 API 多熟，而是操作流程清不清楚。描述越清楚，AI 幫你的程度越高。
