window.BOOK_CHAPTERS = [
  {
    "id": "chapter01",
    "number": "01",
    "title": "AI 自動化概念",
    "fullTitle": "第 1 章：AI 自動化概念",
    "summary": "很多初學者一看到「AI 自動化」就會以為要先學一堆很難的語法，其實真正的起點不是語法，而是看懂工作流程。這一章要幫你建立一個核心觀念：",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "很多初學者一看到「AI 自動化」就會以為要先學一堆很難的語法，其實真正的起點不是語法，而是看懂工作流程。這一章要幫你建立一個核心觀念："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "先看懂工作怎麼做",
              "再拆成可以描述的步驟",
              "最後才交給 Python 和 AI 幫忙"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果你每天都會做重複工作，例如下載資料、整理欄位、輸出報表，那就已經很適合開始學自動化了。"
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每週都要做一次銷售整理，流程可能像這樣："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "到系統下載 Excel",
              "打開檔案檢查欄位",
              "篩選大於指定金額的訂單",
              "複製結果到新的報表",
              "把摘要貼到訊息或 Email"
            ]
          },
          {
            "type": "paragraph",
            "text": "這類工作有三個特徵："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "會重複發生",
              "步驟可以講清楚",
              "做完之後可以檢查結果對不對"
            ]
          },
          {
            "type": "paragraph",
            "text": "只要符合這三點，就很適合思考自動化。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "自動化的核心不是把所有事都交給機器，而是把「重複、可描述、可驗證」的工作交給程式處理。AI 的角色通常不是直接取代你，而是幫你拆流程、寫草稿、解釋錯誤與優化程式。"
          },
          {
            "type": "paragraph",
            "text": "學習 Python 自動化時，先記住這個簡單模型："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "取得資料",
              "處理資料",
              "輸出結果",
              "驗證結果"
            ]
          },
          {
            "type": "paragraph",
            "text": "很多工作場景都能放進這個模型，例如整理資料夾、篩選 Excel、抓網站資料、輸出週報表。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "開啟檔案",
              "找出需要的資料",
              "手動整理",
              "複製貼上到新檔案",
              "再重新檢查"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "讀入資料",
              "依條件篩選或整理",
              "自動輸出成新檔",
              "顯示處理結果"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你把工作拆成步驟",
              "根據需求寫出第一版程式",
              "解釋每一段程式的用途",
              "協助你修改錯誤或補上新需求"
            ]
          },
          {
            "type": "paragraph",
            "text": "你可以把 AI 想成「協作助教」，不是完全代做的人。"
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "tasks = [\"下載資料\", \"整理欄位\", \"輸出報表\", \"檢查結果\"]\n\nfor task in tasks:\n    print(f\"正在執行：{task}\")\n\nprint(\"全部任務完成\")"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`tasks` 是任務清單，也就是流程拆解後的結果。",
              "`for` 會依序執行每個步驟，模擬自動化流程一關一關往下走。",
              "`print()` 先用來顯示目前進度，這是很適合初學者理解流程的方式。"
            ]
          },
          {
            "type": "paragraph",
            "text": "這段程式雖然還沒真的下載資料或輸出報表，但它先幫你建立一個很重要的習慣：把工作變成明確步驟。"
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一份工作需求",
              "一串明確的步驟"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "可閱讀的流程",
              "可逐步改寫成程式的任務清單"
            ]
          },
          {
            "type": "paragraph",
            "text": "在真實專案裡，很多人一開始就急著寫程式，結果寫到一半才發現需求沒想清楚。先把輸入和輸出講清楚，後面會穩很多。"
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一開始就想全部自動化。 建議先挑一小段重複流程，例如「讀取檔案並列出內容」。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "流程講不清楚就開始問 AI。 如果你自己都說不清楚，AI 很容易寫出看似完整、實際上不適用的程式。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "沒有驗證結果。 自動化不是跑完就好，還要確認結果是不是你要的。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "把 AI 當成黑盒子。 AI 可以幫很多忙，但你還是要知道程式的輸入、處理和輸出。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 幫你把一個日常重複工作拆成 4 到 6 個步驟，並標示哪幾步適合用 Python 自動化、哪幾步需要人工確認。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python 自動化助教。\n請把下面的工作流程拆成初學者可以理解的步驟，\n並指出哪些部分適合用 Python 自動化、哪些地方建議人工確認。\n\n工作內容：\n每天下載資料、整理欄位、輸出報表、寄給主管。\n\n請用條列方式回答，並保持白話。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "列出 3 個你生活中可能重複發生的工作。",
              "判斷哪一個工作最適合自動化，並說明原因。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把其中 1 個工作拆成取得資料、處理資料、輸出結果、驗證結果四段。",
              "將你拆好的流程改寫成 Python 串列。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "參考本章範例，寫一段程式列出你自己的工作步驟。",
              "執行後確認每個步驟都有正確印出。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "設計一個「每週資料整理」的自動化流程圖，先不用真的寫出完整程式，只要把步驟、輸入、輸出和檢查點列清楚即可。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "自動化的起點不是語法，而是流程。只要你能把步驟拆清楚，Python 和 AI 就能幫你把工作慢慢變成可執行的系統。這也是整本書最重要的核心能力。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter02",
    "number": "02",
    "title": "Prompt 基礎",
    "fullTitle": "第 2 章：Prompt 基礎",
    "summary": "很多人不是不會用 AI，而是「不知道怎麼把需求說清楚」。如果你的描述太模糊，AI 很可能給你一段看起來厲害、實際上不適合初學者的程式。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "很多人不是不會用 AI，而是「不知道怎麼把需求說清楚」。如果你的描述太模糊，AI 很可能給你一段看起來厲害、實際上不適合初學者的程式。"
          },
          {
            "type": "paragraph",
            "text": "這一章要教你的，不是神奇咒語，而是一種清楚表達需求的方法。"
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你對 AI 說："
          },
          {
            "type": "code",
            "text": "幫我整理檔案"
          },
          {
            "type": "paragraph",
            "text": "這句話太短，AI 會有很多不確定的地方："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "要整理哪個資料夾？",
              "是搬移、重新命名，還是分類？",
              "可以使用哪些套件？",
              "你要的是完整程式、步驟說明，還是教學版本？"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果你改成這樣："
          },
          {
            "type": "code",
            "text": "你是一位 Python 初學者助教。\n請用標準函式庫寫一個簡單程式，\n把 downloads 資料夾中的 PDF 搬到 reports 資料夾。\n請逐段說明程式用途，並提醒可能的風險。"
          },
          {
            "type": "paragraph",
            "text": "結果通常就會穩定很多。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Prompt 是你交給 AI 的工作說明書。Prompt 越清楚，AI 產出的程式越接近你要的結果。對初學者最有幫助的 Prompt，通常包含四個元素："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "角色：請 AI 扮演什麼身份",
              "任務：要完成什麼工作",
              "限制：只能用哪些工具、程式要多簡單",
              "輸出格式：希望回覆有哪些內容"
            ]
          },
          {
            "type": "paragraph",
            "text": "你不一定每次都要寫得很長，但至少要讓 AI 知道你要它做什麼、做到什麼程度。"
          }
        ]
      },
      {
        "title": "壞 Prompt 與好 Prompt",
        "blocks": [
          {
            "type": "subheading",
            "text": "壞 Prompt"
          },
          {
            "type": "code",
            "text": "幫我寫 Python"
          },
          {
            "type": "paragraph",
            "text": "問題："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "不知道要解決什麼工作",
              "不知道要用什麼工具",
              "不知道你是初學者還是進階使用者"
            ]
          },
          {
            "type": "subheading",
            "text": "好 Prompt"
          },
          {
            "type": "code",
            "text": "你是一位 Python 初學者助教。\n請用 pathlib 寫一個簡單範例，\n列出 downloads 資料夾中的所有 PDF 檔名。\n請逐行解釋，並避免使用太複雜的寫法。"
          },
          {
            "type": "paragraph",
            "text": "優點："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "有角色",
              "有任務",
              "有限制",
              "有輸出要求"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "prompt = \"\"\"\n你是一位 Python 初學者助教。\n請示範如何列出資料夾中的所有檔案。\n只能使用標準函式庫，並逐行解釋程式。\n\"\"\"\n\nprint(prompt)"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "多行字串適合儲存 Prompt，方便修改與重用。",
              "Prompt 本身也是教材內容，可以整理成你自己的常用模板。",
              "清楚描述限制，能有效降低 AI 產生過度複雜程式的機率。"
            ]
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "自己先想清楚要做什麼",
              "確認輸入資料與預期結果",
              "把需求用白話整理出來"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "根據明確需求撰寫程式",
              "確認有沒有符合限制",
              "測試輸出結果"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "先請 AI 寫第一版",
              "再請 AI 解釋每一段",
              "如果太難，要求它簡化",
              "如果有錯誤，貼出錯誤訊息請它協助排查"
            ]
          },
          {
            "type": "paragraph",
            "text": "這樣的做法比一次要求 AI 生出「完美答案」更實際。"
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "需求太模糊。 先補上資料來源、想做的動作、輸出格式。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "沒有限制難度。 可以明確寫「適合初學者」「避免進階語法」。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "沒有指定工具。 例如你可以寫「只用標準函式庫」或「使用 pandas」。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一次塞太多需求。 先讓 AI 完成第一步，再逐步追加條件，通常更穩。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "把你自己寫的一段模糊需求交給 AI，要求它改寫成更適合初學者的高品質 Prompt，並說明改寫理由。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "請把下面這句模糊請求改寫成適合初學者的 Prompt：\n「幫我整理檔案」\n\n請補上：\n1. 角色\n2. 任務\n3. 限制\n4. 輸出格式\n\n最後請再說明，為什麼原本的需求不夠清楚。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "寫一個 Prompt，要求 AI 幫你列出資料夾中的所有 PDF。",
              "寫一個 Prompt，要求 AI 用 `pandas` 讀取 Excel。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把「幫我抓網站資料」改寫成更完整的 Prompt。",
              "把「幫我修錯誤」改寫成包含錯誤訊息與輸出需求的 Prompt。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "寫一個完整 Prompt，要求 AI 產生「下載網頁後存成文字檔」的範例程式。",
              "再追加一句要求 AI 用更白話的方式解釋。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請設計一個你未來會反覆使用的 Prompt 模板，主題不限，但要包含角色、任務、限制與輸出格式四個區塊。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "會寫 Prompt，不是因為你很會下命令，而是因為你知道自己真正要什麼。需求越明確，AI 的幫助越穩定。對初學者來說，好的 Prompt 就像清楚的作業說明書。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter03",
    "number": "03",
    "title": "看懂 AI 程式",
    "fullTitle": "第 3 章：看懂 AI 程式",
    "summary": "AI 可以很快產生程式，但真正重要的是你能不能看懂。只要你看不懂，就很難修改，也很難判斷結果到底對不對。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "AI 可以很快產生程式，但真正重要的是你能不能看懂。只要你看不懂，就很難修改，也很難判斷結果到底對不對。"
          },
          {
            "type": "paragraph",
            "text": "這一章的目標不是讓你一眼看懂所有 Python，而是建立一套穩定的閱讀順序。"
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設 AI 給你一段程式，說它會幫你篩選出大於 10 的數字。這時很多初學者會直接複製貼上執行，但更好的做法是先問自己："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "資料從哪裡來？",
              "程式在哪裡做判斷？",
              "結果存到哪裡？",
              "最後怎麼顯示？"
            ]
          },
          {
            "type": "paragraph",
            "text": "只要先抓住這四件事，你就比較不容易被程式碼嚇到。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "閱讀 AI 程式最穩的方式，是先找出四件事："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "輸入資料是什麼",
              "處理邏輯在哪裡",
              "輸出結果去哪裡",
              "有沒有風險或看不懂的地方"
            ]
          },
          {
            "type": "paragraph",
            "text": "不要一口氣讀完整個檔案，而是分段閱讀。你可以先把程式切成「資料準備」「主要處理」「輸出結果」三段，再逐段理解。"
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "numbers = [5, 12, 18, 3]\nresult = []\n\nfor number in numbers:\n    if number >= 10:\n        result.append(number)\n\nprint(result)"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`numbers` 是輸入資料。",
              "`result` 是輸出容器，用來收集符合條件的結果。",
              "`for` 代表逐一檢查每個數字。",
              "`if number >= 10` 是條件判斷。",
              "`append()` 把符合條件的數字加進結果清單。",
              "`print(result)` 負責把最後結果顯示出來。"
            ]
          }
        ]
      },
      {
        "title": "用固定順序閱讀程式",
        "blocks": [
          {
            "type": "subheading",
            "text": "第一步：先看輸入"
          },
          {
            "type": "paragraph",
            "text": "程式一開始通常會先建立資料、讀取檔案，或接收外部輸入。這段範例中的輸入是："
          },
          {
            "type": "code",
            "text": "numbers = [5, 12, 18, 3]"
          },
          {
            "type": "subheading",
            "text": "第二步：再看處理"
          },
          {
            "type": "paragraph",
            "text": "找出迴圈、條件、函式呼叫等主要邏輯。這段範例的核心處理是："
          },
          {
            "type": "code",
            "text": "for number in numbers:\n    if number >= 10:\n        result.append(number)"
          },
          {
            "type": "subheading",
            "text": "第三步：最後看輸出"
          },
          {
            "type": "paragraph",
            "text": "輸出不一定是 `print()`，也可能是寫入檔案、輸出 Excel、寄送訊息。這段範例的輸出是："
          },
          {
            "type": "code",
            "text": "print(result)"
          },
          {
            "type": "subheading",
            "text": "第四步：檢查風險"
          },
          {
            "type": "paragraph",
            "text": "這段程式雖然簡單，但還是可以問："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "如果資料是空的會怎樣？",
              "如果條件要改成大於 15，要改哪裡？",
              "如果想保留原本資料，又想另外輸出結果，現在的寫法合不合理？"
            ]
          },
          {
            "type": "paragraph",
            "text": "這些問題會幫你從「看懂」進一步走到「能修改」。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "自己先分段閱讀",
              "用白話寫下每一段在做什麼",
              "找出看不懂的地方"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "確認輸入、處理、輸出",
              "試著改一個小條件",
              "觀察結果有沒有跟著改變"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "請 AI 把程式切成小段",
              "請 AI 解釋變數用途",
              "請 AI 用更簡單的版本重寫",
              "請 AI 比較修改前後差異"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一次讀整段程式。 先切小段再讀，比較不容易卡住。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "只看語法，不看資料流向。 初學者最重要的是知道資料怎麼進來、怎麼被處理、怎麼輸出去。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "不敢修改。 其實最好的學法就是改一個小地方，再看結果有沒有變。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "完全相信 AI 沒有錯。 AI 會寫程式，也會寫錯。能看懂才知道哪裡需要修。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 將一段你看不懂的程式拆成 4 個小段，每段都用白話解釋，並指出初學者最容易卡住的地方。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "請把下面這段 Python 程式拆成 4 個小區塊說明。\n每個區塊都要回答：\n1. 這段在做什麼\n2. 為什麼需要它\n3. 初學者最容易卡在哪裡\n4. 如果我要自己修改，應該先改哪裡\n\n請用白話說明，不要只講語法名稱。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "找出範例中的輸入、條件與輸出。",
              "說明 `result = []` 的用途。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把條件改成 `number >= 15`，先預測結果，再實際執行確認。",
              "在迴圈中加入一行，印出目前正在檢查的數字。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "請 AI 幫你產生一段 10 行內的檔案處理程式。",
              "你自己把它切成三段，分別寫上註解：輸入、處理、輸出。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請讓 AI 產生一段含有迴圈與條件判斷的簡單程式，然後你自己用白話寫出這段程式的流程說明，不要直接照抄 AI 的解釋。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "真正的能力不是複製貼上，而是知道程式在做什麼。能看懂 AI 程式，才算真的會使用 AI。當你會看輸入、看處理、看輸出，你就開始具備修改與除錯的能力了。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter04",
    "number": "04",
    "title": "檔案自動化",
    "fullTitle": "第 4 章：檔案自動化",
    "summary": "很多人第一次接觸自動化，最適合從檔案開始。原因很簡單：你看得到結果，也容易驗證對不對。像是建立資料夾、搬移檔案、依副檔名分類，都是很典型的入門場景。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "很多人第一次接觸自動化，最適合從檔案開始。原因很簡單：你看得到結果，也容易驗證對不對。像是建立資料夾、搬移檔案、依副檔名分類，都是很典型的入門場景。"
          },
          {
            "type": "paragraph",
            "text": "這一章要幫你建立的能力是："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "看懂檔案整理的流程",
              "用 Python 取代重複搬檔、分類、建立資料夾的工作",
              "在真正搬移前先做好風險檢查"
            ]
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每天都會從瀏覽器下載很多檔案，下載資料夾很快就會變得很亂。你可能會手動做這些事："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "找出所有圖片檔",
              "建立一個 `images` 資料夾",
              "把圖片搬進去",
              "再確認有沒有漏掉"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這件事常常發生，就很值得自動化。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "檔案自動化是最適合初學者的主題之一，因為你可以直接看到結果。常見需求有："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "建立資料夾",
              "批次搬移檔案",
              "依副檔名整理",
              "重新命名"
            ]
          },
          {
            "type": "paragraph",
            "text": "`pathlib` 能讓路徑處理更直觀，也比較適合教學。你可以把它想成「用物件方式操作路徑」，比傳統字串拼接更好理解。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "打開資料夾",
              "找出指定類型的檔案",
              "建立目標資料夾",
              "一個一個搬移",
              "再檢查結果"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "指定來源與目標資料夾",
              "找出符合條件的檔案",
              "建立目標資料夾",
              "逐一搬移",
              "印出處理結果"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你把資料夾名稱改成你的實際環境",
              "協助你加入安全檢查",
              "解釋 `pathlib` 每一行程式在做什麼",
              "幫你從「先列出檔案」進一步改成「真的搬移」"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "from pathlib import Path\n\nsource_folder = Path(\"downloads\")\ntarget_folder = Path(\"images\")\ntarget_folder.mkdir(exist_ok=True)\n\nfor file_path in source_folder.glob(\"*.png\"):\n    file_path.rename(target_folder / file_path.name)\n    print(f\"已移動：{file_path.name}\")"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`Path()` 用來建立路徑物件。",
              "`mkdir(exist_ok=True)` 表示若資料夾不存在就建立。",
              "`glob(\"*.png\")` 會找出來源資料夾中所有 PNG 檔。",
              "`rename()` 在這裡可用來搬移檔案到新位置。",
              "`print()` 讓你在執行過程中看到處理進度。"
            ]
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一個來源資料夾",
              "一種副檔名條件，例如 `*.png`",
              "一個目標資料夾"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "建立好的目標資料夾",
              "已搬移完成的檔案",
              "畫面上的處理提示"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "來源資料夾不存在。 先確認 `downloads` 真的存在，或改成你自己的資料夾名稱。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "目標資料夾名稱寫錯。 如果路徑打錯，檔案可能搬到不是你預期的位置。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一開始就直接搬移，有風險。 初學者可以先把 `rename()` 改成 `print(file_path.name)`，先確認找到的是不是正確檔案。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "檔名衝突。 如果目標資料夾裡已經有同名檔案，後續最好再加入檢查。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 按照你的實際資料夾名稱，改寫成可直接使用的版本，並提醒可能的風險與安全檢查方式。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python 檔案自動化助教。\n請用 pathlib 幫我寫一個 Python 程式，\n把 downloads 資料夾中的所有 PDF 搬到 reports 資料夾。\n\n限制：\n- 適合初學者\n- 先提供簡單版本\n- 再提醒我有哪些風險\n\n輸出格式：\n- 先給完整程式\n- 再逐段解釋\n- 最後列出常見錯誤"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把範例改成搬移 `.jpg` 檔。",
              "建立 `data`、`output`、`backup` 三個資料夾。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "只列出資料夾中的所有檔案，不做搬移。",
              "把目標資料夾名稱改成 `pictures`。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "設計一個小程式，把某個資料夾中的 `.txt` 檔搬到 `texts` 資料夾。",
              "執行後確認檔案真的被搬移，並且畫面有正確提示。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "設計一個依副檔名分類的檔案整理器，把檔案分到 `images`、`docs`、`archives` 三類，並先用 `print()` 模擬分類結果，再考慮真正搬移。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "檔案自動化雖然簡單，卻非常實用。當你學會這一章，就已經能開始解決真實工作的痛點。更重要的是，你會開始習慣先想流程、再寫程式。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter05",
    "number": "05",
    "title": "Excel 自動化",
    "fullTitle": "第 5 章：Excel 自動化",
    "summary": "很多職場上的重複工作都圍繞在 Excel。你可能每天都要開啟表格、篩選資料、統計數字，再另存成新檔。這些工作如果每次都手動做，很容易花時間，也容易出錯。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "很多職場上的重複工作都圍繞在 Excel。你可能每天都要開啟表格、篩選資料、統計數字，再另存成新檔。這些工作如果每次都手動做，很容易花時間，也容易出錯。"
          },
          {
            "type": "paragraph",
            "text": "這一章要幫你建立的能力是："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "把 Excel 讀進 Python",
              "根據條件篩選資料",
              "輸出成新的 Excel",
              "慢慢建立資料檢查的習慣"
            ]
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每週都要整理訂單資料，流程可能像這樣："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "打開 `orders.xlsx`",
              "找出金額大於 5000 的資料",
              "把符合條件的資料另存成新檔",
              "再確認有沒有篩錯"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果每週都要重複一次，這就是很適合交給 Python 的工作。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "很多重複工作都圍繞在 Excel。只要你能把 Excel 讀進 Python，就能開始做篩選、統計、轉換與輸出。`pandas` 可以把 Excel 資料表看成一個可操作的表格物件。"
          },
          {
            "type": "paragraph",
            "text": "學這一章時，請先記住三件事："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "欄位名稱要先確認",
              "篩選條件要寫清楚",
              "輸出前最好先檢查資料筆數或前幾列"
            ]
          },
          {
            "type": "paragraph",
            "text": "這會比只記 `pandas` 語法更重要。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "打開 Excel",
              "找欄位",
              "設定篩選條件",
              "複製結果到新檔",
              "存檔並檢查"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "讀取 Excel",
              "根據條件篩選",
              "視需要保留指定欄位",
              "輸出成新檔",
              "印出處理結果"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "根據你的欄位名稱改寫程式",
              "幫你加入分組統計或排序",
              "解釋每一行 `pandas` 在做什麼",
              "提醒你哪些地方可能因為欄位或資料型別出錯"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "import pandas as pd\n\ndf = pd.read_excel(\"sales.xlsx\")\nhigh_sales = df[df[\"金額\"] >= 10000]\nhigh_sales.to_excel(\"high_sales.xlsx\", index=False)\n\nprint(\"已輸出 high_sales.xlsx\")"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`pd.read_excel()` 讀取 Excel 資料。",
              "`df[\"金額\"] >= 10000` 是篩選條件。",
              "`df[...]` 會保留符合條件的資料列。",
              "`to_excel()` 把結果輸出成新檔。",
              "`index=False` 表示不要把索引欄另外寫進 Excel。"
            ]
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一個 Excel 檔案",
              "欄位名稱，例如 `客戶`、`地區`、`金額`、`日期`",
              "一個篩選條件"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一份整理過的新 Excel",
              "螢幕上的完成提示",
              "之後可延伸成摘要數字或統計表"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "欄位名稱寫錯。 例如 Excel 寫的是 `總金額`，程式卻寫成 `金額`，就會出錯。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "金額欄位不是數字。 如果 Excel 裡的內容混有文字或空值，篩選前可能要先清理資料。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "輸出檔案有了，但內容不對。 建議先印出資料筆數，或先看前幾列資料，再確認篩選結果。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一次做太多事。 初學者先把「讀取 + 篩選 + 輸出」做好，再慢慢加排序、分組與摘要。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 根據你的欄位名稱、條件與輸出需求，改寫出對應的 `pandas` 程式，並提醒你要先檢查哪些欄位。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python Excel 自動化助教。\n我有一個 Excel 檔案 orders.xlsx，\n欄位包含客戶、地區、金額、日期。\n\n請用 pandas 寫一個適合初學者的程式，\n篩選出金額大於 5000 的資料並另存新檔。\n\n請再補充：\n- 哪些欄位要先確認\n- 哪裡最容易出錯\n- 每段程式在做什麼"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把條件改成金額大於等於 3000。",
              "印出資料筆數。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "只保留 `客戶` 與 `金額` 兩欄。",
              "把輸出檔名改成 `filtered_sales.xlsx`。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "讀取一份 Excel，篩選出指定條件的資料並另存新檔。",
              "執行後打開輸出的 Excel，確認結果是否正確。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "讀取一份 Excel 後依地區分組統計總金額，再輸出成新的 Excel，並額外印出銷售最高的地區。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Excel 自動化最重要的不是背 API，而是先知道欄位、條件與你要的輸出，再讓 AI 協助補齊細節。當你能穩定處理 Excel，很多職場任務就已經能開始省下不少時間。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter06",
    "number": "06",
    "title": "網頁爬蟲",
    "fullTitle": "第 6 章：網頁爬蟲",
    "summary": "有些資料不是放在 Excel，而是放在網站上。像是公告、商品資訊、文章標題、價格列表，很多時候都需要先從網頁取得內容，才能進一步整理或分析。這就是網頁爬蟲的起點。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "有些資料不是放在 Excel，而是放在網站上。像是公告、商品資訊、文章標題、價格列表，很多時候都需要先從網頁取得內容，才能進一步整理或分析。這就是網頁爬蟲的起點。"
          },
          {
            "type": "paragraph",
            "text": "這一章的重點不是一開始就學很複雜的解析技巧，而是先建立一個穩定流程："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "發送請求",
              "確認有沒有成功拿到內容",
              "先讀懂 HTML",
              "再決定要抓什麼資料"
            ]
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每天都要查看某個網站的最新公告，手動流程可能是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "打開網站",
              "等頁面載入",
              "找到公告標題",
              "複製到自己的筆記或報表"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這件事常常重複，你就可以考慮先用 Python 把網頁內容抓下來。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "網頁爬蟲的基本步驟通常是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "發送請求",
              "取得內容",
              "擷取目標資料",
              "存檔或分析"
            ]
          },
          {
            "type": "paragraph",
            "text": "一開始先學會穩定取得 HTML，不急著一次用太多工具。只要你能先確認狀態碼、看懂回應內容，後續解析會容易很多。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "打開網站",
              "找到要看的資料",
              "複製內容",
              "貼到自己的檔案或報表"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "發送 HTTP 請求",
              "確認狀態碼",
              "印出部分 HTML 內容",
              "再決定後續要抓哪些欄位"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你把想抓的資料拆成欄位",
              "解釋回應內容應該怎麼讀",
              "協助你從 HTML 找出標題、連結、價格等目標",
              "提醒你常見錯誤與網站使用限制"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "import requests\n\nurl = \"https://example.com\"\nresponse = requests.get(url, timeout=10)\n\nprint(\"狀態碼：\", response.status_code)\nprint(response.text[:200])"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`requests.get()` 會送出請求到指定網址。",
              "`timeout=10` 可避免等待太久。",
              "`response.status_code` 可判斷請求是否成功。",
              "`response.text[:200]` 先顯示前 200 個字元，幫你快速確認拿到的是不是預期內容。"
            ]
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一個網址",
              "想觀察的網頁內容",
              "一個明確目標，例如標題、價格或連結"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "狀態碼",
              "HTML 原始內容",
              "後續可繼續整理的文字資料"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "網址寫錯。 先直接把網址貼到瀏覽器測試，確認網站能正常打開。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "狀態碼不是 200。 表示請求可能失敗，先不要急著解析內容，要先確認網站是否可連線。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "抓到的內容看起來很亂。 這很正常，因為 HTML 本來就不是給人直接閱讀的。先確認有拿到正確頁面，再慢慢挑出需要的部分。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一開始就想抓太多欄位。 建議先抓一個最簡單的目標，例如頁面標題或前幾個連結。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 幫你把某個網頁的目標資訊拆成擷取步驟，例如標題、價格或連結，並說明應該先看哪些 HTML 特徵。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python 網頁爬蟲助教。\n請教我如何用 requests 抓取一個網頁的 HTML，\n並用最簡單的方式找出頁面中的標題文字。\n\n限制：\n- 適合初學者\n- 先不要用太多工具\n- 先解釋怎麼判斷請求有沒有成功\n\n請用白話語氣說明，並列出常見錯誤。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "改成抓取你自己的測試網站。",
              "印出回應內容長度。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "只有在狀態碼是 200 時才顯示內容。",
              "加上一行，顯示目前抓取的是哪個網址。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "抓取一個簡單頁面，印出狀態碼與前 200 個字元。",
              "比較兩個不同網址的回應結果有什麼差異。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "抓取一個列表頁面，輸出前 5 個標題。先用白話列出你打算怎麼抓，再請 AI 幫你補成第一版程式。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "爬蟲學習不要貪快。先把請求與回應看懂，再逐步學解析，會更穩定。當你能穩定取得網頁內容，後面不管要整理公告、收集資訊或做報表，都會順很多。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter07",
    "number": "07",
    "title": "Selenium 自動化",
    "fullTitle": "第 7 章：Selenium 自動化",
    "summary": "前一章介紹了用 `requests` 抓網頁內容，但有些網站不是一打開就把資料放在 HTML 裡，而是需要點擊、輸入、登入，甚至等畫面載入後才看得到內容。這時只靠 `requests` 通常不夠，就需要 Selenium 幫你模擬瀏覽器操作。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "前一章介紹了用 `requests` 抓網頁內容，但有些網站不是一打開就把資料放在 HTML 裡，而是需要點擊、輸入、登入，甚至等畫面載入後才看得到內容。這時只靠 `requests` 通常不夠，就需要 Selenium 幫你模擬瀏覽器操作。"
          },
          {
            "type": "paragraph",
            "text": "這一章要讓你理解的是："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "什麼情況下要用 Selenium",
              "怎麼把人工操作流程翻成程式步驟",
              "執行失敗時可以先檢查哪些地方"
            ]
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每天都要到一個內部網站查詢資料，流程可能是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "開啟網站",
              "找到搜尋框",
              "輸入關鍵字",
              "按下查詢按鈕",
              "讀取畫面上的結果"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這個網站需要按鈕點擊或等待動態內容出現，Selenium 就很適合處理這種任務。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Selenium 可以幫你控制瀏覽器，模擬真實操作流程。它很適合處理以下情境："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "需要登入",
              "需要點擊按鈕",
              "需要輸入表單",
              "資料是頁面載入後才出現"
            ]
          },
          {
            "type": "paragraph",
            "text": "學習 Selenium 時，不要一開始就想控制整個網站。先從最小流程開始，例如："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "開啟網站",
              "找到一個元素",
              "讀取文字",
              "關閉瀏覽器"
            ]
          },
          {
            "type": "paragraph",
            "text": "只要這四步穩定了，再慢慢加上輸入、點擊和等待。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "自己打開瀏覽器",
              "進入指定網址",
              "找到搜尋框或按鈕",
              "輸入資料並按下操作",
              "讀取畫面結果"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "啟動瀏覽器",
              "開啟網站",
              "找到頁面元素",
              "讀取或操作元素",
              "結束程式並關閉瀏覽器"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你把操作步驟整理成 Selenium 腳本",
              "解釋定位方式的差異",
              "幫你加上等待與錯誤排查建議",
              "協助你把流程拆成可測試的小段"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "from selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get(\"https://example.com\")\n\nheading = driver.find_element(By.TAG_NAME, \"h1\").text\nprint(\"頁面標題：\", heading)\n\ndriver.quit()"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`webdriver.Chrome()` 用來啟動 Chrome 瀏覽器。",
              "`get()` 會打開指定網址。",
              "`find_element()` 用來找出頁面上的元素。",
              "`By.TAG_NAME` 代表用標籤名稱來定位元素。",
              "`.text` 會讀取元素的文字內容。",
              "`quit()` 很重要，執行完要關閉瀏覽器，避免背景程序留著。"
            ]
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一個網址",
              "一組明確的操作步驟",
              "一個要抓取或操作的元素"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "頁面上的文字",
              "查詢結果",
              "截圖或自動化後的畫面狀態"
            ]
          },
          {
            "type": "paragraph",
            "text": "初學者最容易忽略的是：Selenium 的輸入不只是網址，還包括你對網頁操作流程的描述。"
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "瀏覽器驅動沒有安裝好。 如果程式一開始就無法啟動瀏覽器，先確認 Selenium 與瀏覽器版本是否相容。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "元素找不到。 先用瀏覽器開發者工具確認元素真的存在，再檢查你的定位方式有沒有寫對。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "頁面還沒載入完成就開始抓資料。 這時可以先暫停一下，再確認是不是需要等待元素出現。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "執行完沒有關閉瀏覽器。 記得在最後加上 `driver.quit()`。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "把網站操作步驟整理成列表，請 AI 幫你翻成 Selenium 流程，並標出哪幾步可能需要等待，哪幾步最容易失敗。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Selenium 初學者助教。\n請幫我把下面操作流程轉成 Selenium Python 程式：\n1. 開啟網站\n2. 找到搜尋框\n3. 輸入關鍵字\n4. 按下搜尋\n5. 讀取搜尋結果第一筆標題\n\n限制：\n- 適合初學者\n- 程式保持簡單\n- 請提醒哪些步驟可能需要等待\n\n輸出格式：\n- 先給程式\n- 再逐段說明\n- 最後列出常見錯誤"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "改成抓取頁面的 `<title>`。",
              "試著用不同定位方式找元素，例如 `By.ID` 或 `By.CLASS_NAME`。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "在程式中加入一段提示文字，顯示目前正在讀取頁面。",
              "如果找不到元素，先用 `print()` 顯示提醒訊息。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "找一個測試網站，練習打開頁面並讀取標題文字。",
              "再加入一個按鈕點擊或輸入框操作。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "設計一個自動登入測試網站並截圖保存的 Selenium 腳本，先把流程列出來，再請 AI 幫你補成第一版程式。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Selenium 的重點不是 API 多熟，而是操作流程清不清楚。你只要能把「人怎麼操作網站」講清楚，就更容易把它轉成 Python 程式，也更容易和 AI 一起完成自動化。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter08",
    "number": "08",
    "title": "桌面自動化",
    "fullTitle": "第 8 章：桌面自動化",
    "summary": "不是每個系統都有 API，也不是每個工具都能用爬蟲或 Selenium 直接操作。有些舊系統、公司內部工具或 Windows 軟體，只能靠滑鼠、鍵盤和畫面互動。這時你就會遇到桌面自動化。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "不是每個系統都有 API，也不是每個工具都能用爬蟲或 Selenium 直接操作。有些舊系統、公司內部工具或 Windows 軟體，只能靠滑鼠、鍵盤和畫面互動。這時你就會遇到桌面自動化。"
          },
          {
            "type": "paragraph",
            "text": "這一章的重點不是立刻寫出一大段控制滑鼠的程式，而是先學會判斷："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "哪些桌面流程適合自動化",
              "哪些步驟需要人工確認",
              "怎麼把螢幕上的操作翻成標準流程"
            ]
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每天都要從公司內部報表系統下載資料，流程可能像這樣："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "開啟報表系統",
              "輸入帳號密碼",
              "選擇日期區間",
              "按下載",
              "將檔案另存到指定資料夾"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這個系統沒有匯出 API，也無法直接用瀏覽器自動化，那桌面自動化就很有用。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "桌面自動化是指自動控制滑鼠、鍵盤、視窗或桌面軟體。它常見在舊系統、內部工具或沒有 API 的環境。這類流程最重要的是先寫清楚步驟，因為執行結果很依賴環境。"
          },
          {
            "type": "paragraph",
            "text": "桌面自動化通常有幾個特性："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "很依賴畫面位置",
              "很怕視窗被移動",
              "執行時不適合同時做其他操作",
              "容易受到解析度、縮放比例影響"
            ]
          },
          {
            "type": "paragraph",
            "text": "所以這一章最重要的能力是流程標準化，而不是程式炫技。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "打開軟體",
              "點選功能",
              "輸入資料",
              "下載或匯出",
              "檢查結果"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "將操作步驟標準化",
              "標出每一步的輸入與輸出",
              "找出需要等待或確認的地方",
              "再決定是否值得自動化"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你整理桌面操作步驟",
              "標出高風險與低風險步驟",
              "協助你把需求改寫成自動化規格",
              "先做腳本藍圖，再逐步補成程式"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "steps = [\n    \"開啟報表系統\",\n    \"登入帳號\",\n    \"輸入日期區間\",\n    \"下載報表\",\n    \"另存檔案\"\n]\n\nfor step in steps:\n    print(\"執行步驟：\", step)"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "這段程式還沒有真的控制滑鼠或鍵盤。",
              "它的作用是先把流程標準化，讓你知道整個任務是由哪些步驟組成。",
              "當流程被列成清單後，你更容易判斷哪一步適合自動化、哪一步該保留人工確認。"
            ]
          },
          {
            "type": "paragraph",
            "text": "這也是桌面自動化最容易被忽略的一點：很多問題不是出在程式，而是流程本身沒有整理好。"
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一套實際操作步驟",
              "系統畫面上的欄位或按鈕位置",
              "需要輸入的資料，例如日期區間或帳號"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "明確的操作腳本",
              "可供 AI 協助產生程式的需求說明",
              "可檢查的下載結果或輸出檔案"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "流程步驟太模糊。 例如只寫「下載報表」，但沒有說要先點哪個按鈕、選哪個區間。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "執行時移動視窗或滑鼠。 桌面自動化很依賴畫面穩定，執行時最好不要同時做其他操作。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "忽略人工確認點。 有些步驟像登入驗證碼或下載完成確認，仍然需要人工介入。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一開始就追求完全自動化。 先讓 60% 到 80% 的流程穩定，比一次做滿全部更實際。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 根據你的操作步驟，幫你標出哪些步驟適合自動化、哪些地方可能需要人工確認，並整理成一份桌面自動化規格草稿。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "我想做桌面自動化，但我是初學者。\n請根據下面步驟，先整理成標準化流程，\n再說明哪些步驟適合用 Python 自動化、哪些地方建議保留人工確認：\n\n1. 開啟系統\n2. 登入\n3. 輸入日期\n4. 匯出報表\n5. 另存到指定資料夾\n\n請用白話回答，並列出風險提醒。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "寫出一個你每天會做的桌面流程。",
              "把流程拆成至少 5 個步驟。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "標出哪一步最容易失敗，並說明原因。",
              "標出哪一步應該保留人工確認。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "把你的流程改寫成 `steps = []` 的 Python 清單。",
              "用 `for` 迴圈把每一步印出來，模擬執行順序。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "設計一個可以交給 AI 的桌面自動化需求說明，讓它能產出第一版腳本藍圖，包括步驟、風險、確認點與預期輸出。"
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "桌面自動化不是先寫程式，而是先讓流程標準化。流程越明確，後續腳本越穩定；風險越早看見，真正執行時就越不容易失控。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter09",
    "number": "09",
    "title": "報表自動化",
    "fullTitle": "第 9 章：報表自動化",
    "summary": "前面學過的檔案處理、Excel 讀寫、資料整理，其實很常一起出現在同一個工作裡。最典型的例子，就是報表自動化。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "前面學過的檔案處理、Excel 讀寫、資料整理，其實很常一起出現在同一個工作裡。最典型的例子，就是報表自動化。"
          },
          {
            "type": "paragraph",
            "text": "這一章要幫你做的，不只是把 Excel 讀進來而已，而是學會把資料整理成「別人看得懂」的結果。因為報表真正的目的，不是把表格做完，而是把資訊傳達清楚。"
          }
        ]
      },
      {
        "title": "情境案例",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每週都要整理訂單資料給主管，手動流程通常是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "打開原始 Excel",
              "看有哪些欄位",
              "計算各地區總金額",
              "找出最高銷售區域",
              "另存成新報表",
              "再寫一句摘要說明"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這些事每週都重複一次，就非常適合做成自動化流程。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "報表自動化是把前面學過的資料讀取、整理、統計與輸出整合在一起。典型流程是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "讀取原始資料",
              "篩選或清理",
              "計算指標",
              "輸出報表與摘要"
            ]
          },
          {
            "type": "paragraph",
            "text": "學習報表自動化時，建議先想清楚三件事："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "你手上有哪些欄位",
              "你想回答什麼問題",
              "最後要輸出給誰看"
            ]
          },
          {
            "type": "paragraph",
            "text": "這樣寫出來的程式才不會只是「有跑完」，而是真的有用。"
          }
        ]
      },
      {
        "title": "人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "開 Excel",
              "用篩選或樞紐分析整理資料",
              "複製結果到新檔",
              "手動寫摘要文字"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "讀取原始資料",
              "分組統計",
              "產出新報表",
              "自動印出或寫出摘要"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你設計報表需求",
              "根據欄位產生 `pandas` 範例",
              "解釋每一步的統計邏輯",
              "協助你把表格結果翻成白話摘要"
            ]
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "import pandas as pd\n\ndf = pd.read_excel(\"orders.xlsx\")\nsummary = df.groupby(\"地區\", as_index=False)[\"金額\"].sum()\nsummary = summary.sort_values(\"金額\", ascending=False)\n\nsummary.to_excel(\"region_summary.xlsx\", index=False)\n\ntop_region = summary.iloc[0]\nmessage = f\"本期銷售最高地區為 {top_region['地區']}，總金額為 {top_region['金額']}。\"\n\nprint(summary)\nprint(message)"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`pd.read_excel()` 讀取原始資料。",
              "`groupby(\"地區\")[\"金額\"].sum()` 依地區加總金額。",
              "`sort_values()` 讓金額高的排在前面。",
              "`to_excel()` 把摘要表輸出成新檔。",
              "`summary.iloc[0]` 取出第一名地區。",
              "`message` 把統計結果轉成主管較容易閱讀的文字。"
            ]
          }
        ]
      },
      {
        "title": "輸入與輸出長什麼樣",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "原始 Excel 檔",
              "欄位名稱，例如 `地區`、`商品`、`數量`、`金額`",
              "想計算的指標，例如總金額、平均金額、筆數"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "整理過的報表 Excel",
              "螢幕上的摘要結果",
              "可貼到訊息或 Email 的中文說明"
            ]
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "欄位名稱寫錯。 程式裡寫的欄位名稱要和 Excel 完全一致。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`金額` 欄位不是數字。 如果 Excel 內容混有文字，統計前可能要先清理資料。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "只輸出表格，沒有摘要。 主管通常不只要表格，也需要一句快速看懂的結論。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "沒有先確認資料筆數。 在做統計前，先看資料是否成功讀取，是很好的習慣。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 根據你的資料欄位，幫你決定哪些指標適合做成主管一眼能看懂的摘要，並補上一段文字結論。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python 報表自動化助教。\n我有一份訂單資料，欄位包含地區、商品、數量、金額、日期。\n\n請幫我：\n1. 設計一個初學者可理解的報表自動化流程\n2. 用 pandas 寫出示範程式\n3. 輸出每個地區的總金額\n4. 再產生一句主管看得懂的中文摘要\n\n請保持白話，並逐段說明程式用途。"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "改成依商品分組統計。",
              "增加一行，印出總訂單數。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "將輸出檔名改成今天日期開頭。",
              "增加一段摘要文字，例如「本月北區銷售最高」。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "同時輸出摘要 Excel 與一段文字說明。",
              "執行後確認 Excel 內容與文字摘要是否一致。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請設計一個你自己的報表任務，至少包含："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "一份原始資料",
              "一種分組統計",
              "一份輸出 Excel",
              "一段白話摘要"
            ]
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "報表自動化是很好的整合練習，因為它會逼你把資料、邏輯與輸出一次想清楚。真正有價值的報表，不只是算出數字，而是讓別人一眼就能看懂重點。"
          }
        ]
      }
    ]
  },
  {
    "id": "chapter10",
    "number": "10",
    "title": "完整專案",
    "fullTitle": "第 10 章：完整專案",
    "summary": "學到這裡，你已經接觸過流程拆解、Prompt、讀懂 AI 程式、Excel 處理、爬蟲、自動化操作與報表輸出。最後一章的重點不是再學一個新工具，而是把前面的能力串成一個真的能交付的小專案。",
    "sections": [
      {
        "title": "這章要解決什麼問題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "學到這裡，你已經接觸過流程拆解、Prompt、讀懂 AI 程式、Excel 處理、爬蟲、自動化操作與報表輸出。最後一章的重點不是再學一個新工具，而是把前面的能力串成一個真的能交付的小專案。"
          },
          {
            "type": "paragraph",
            "text": "這一章要完成的專案是："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "讀取每週訂單資料",
              "統計各地區銷售金額",
              "產出摘要報表",
              "產生主管看得懂的文字結論"
            ]
          },
          {
            "type": "paragraph",
            "text": "你會看到，真實工作通常不是單一技巧，而是多個小流程接在一起。"
          }
        ]
      },
      {
        "title": "專案情境",
        "blocks": [
          {
            "type": "paragraph",
            "text": "假設你每週五都要整理一份銷售資料，交給主管做會議使用。原本的工作流程可能是："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "打開 `weekly_orders.xlsx`",
              "檢查欄位是否正確",
              "依地區統計總金額",
              "找出本週銷售最高地區",
              "另存摘要 Excel",
              "寫一段簡短中文說明"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果每週都重做一次，這就是非常典型的自動化情境。"
          }
        ]
      },
      {
        "title": "概念說明",
        "blocks": [
          {
            "type": "paragraph",
            "text": "完整專案的重點，不是把所有功能寫得很複雜，而是把前面學過的能力合理串起來。你可以把它看成一個小型工作流程整合："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "先確認輸入資料",
              "再進行整理與統計",
              "接著輸出報表",
              "最後補上可閱讀的摘要與驗證步驟"
            ]
          },
          {
            "type": "paragraph",
            "text": "這種「先拆流程、再逐步完成」的方式，會比一開始就追求很大的系統更適合初學者，也更符合真實工作情境。"
          }
        ]
      },
      {
        "title": "專案目標",
        "blocks": [
          {
            "type": "paragraph",
            "text": "本專案的目標很明確："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "讓原始 Excel 能被穩定讀入",
              "自動整理成主管可閱讀的摘要報表",
              "把關鍵結論輸出成文字",
              "保留基礎的錯誤處理與檢查點"
            ]
          },
          {
            "type": "paragraph",
            "text": "這樣的成果不一定很大，但很像職場真實任務，也很適合當作你的第一個整合專案。"
          }
        ]
      },
      {
        "title": "專案輸入與輸出",
        "blocks": [
          {
            "type": "subheading",
            "text": "輸入"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "檔案名稱：`weekly_orders.xlsx`",
              "主要欄位：`地區`、`金額`"
            ]
          },
          {
            "type": "subheading",
            "text": "輸出"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "摘要報表：`weekly_summary.xlsx`",
              "中文摘要：`summary.txt`",
              "畫面提示：告訴你專案是否完成"
            ]
          }
        ]
      },
      {
        "title": "建議資料夾結構",
        "blocks": [
          {
            "type": "code",
            "text": "project/\n├─ weekly_orders.xlsx\n├─ weekly_summary.xlsx\n├─ summary.txt\n└─ report_automation.py"
          },
          {
            "type": "paragraph",
            "text": "初學者先把資料和程式放在同一層比較簡單，等你熟悉之後再慢慢拆分資料夾。"
          }
        ]
      },
      {
        "title": "先拆成小流程",
        "blocks": [
          {
            "type": "paragraph",
            "text": "在寫程式前，先把專案拆小："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "確認原始檔案是否存在",
              "讀取 Excel",
              "檢查必要欄位是否存在",
              "依地區統計總金額",
              "輸出成新的 Excel",
              "找出金額最高的地區",
              "產生摘要文字",
              "把摘要寫入文字檔"
            ]
          },
          {
            "type": "paragraph",
            "text": "這樣做的好處是，如果程式出錯，你比較容易知道卡在哪一段。"
          }
        ]
      },
      {
        "title": "程式範例",
        "blocks": [
          {
            "type": "code",
            "text": "from pathlib import Path\n\nimport pandas as pd\n\nsource_file = Path(\"weekly_orders.xlsx\")\n\nif not source_file.exists():\n    print(\"找不到 weekly_orders.xlsx，請先確認檔案是否放在同一個資料夾。\")\nelse:\n    df = pd.read_excel(source_file)\n\n    required_columns = {\"地區\", \"金額\"}\n    if not required_columns.issubset(df.columns):\n        print(\"缺少必要欄位，請確認 Excel 是否包含 地區 和 金額。\")\n    else:\n        summary = df.groupby(\"地區\", as_index=False)[\"金額\"].sum()\n        summary = summary.sort_values(\"金額\", ascending=False)\n\n        summary.to_excel(\"weekly_summary.xlsx\", index=False)\n\n        top_region = summary.iloc[0]\n        message = (\n            f\"本週銷售最高地區為 {top_region['地區']}，\"\n            f\"總金額為 {top_region['金額']}。\"\n        )\n\n        Path(\"summary.txt\").write_text(message, encoding=\"utf-8\")\n\n        print(\"已輸出 weekly_summary.xlsx\")\n        print(\"已輸出 summary.txt\")\n        print(message)"
          },
          {
            "type": "subheading",
            "text": "範例解讀"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`Path(\"weekly_orders.xlsx\")` 用來表示原始檔案路徑。",
              "`exists()` 先檢查檔案存不存在，避免一開始就報錯。",
              "`pd.read_excel()` 負責讀取 Excel。",
              "`required_columns` 用來檢查欄位是否齊全。",
              "`groupby(\"地區\")[\"金額\"].sum()` 會把每個地區的金額加總。",
              "`sort_values()` 讓最高金額排在前面，方便直接找到第一名。",
              "`to_excel()` 把統計結果輸出成新檔案。",
              "`write_text()` 把摘要文字寫進文字檔。"
            ]
          },
          {
            "type": "paragraph",
            "text": "這段程式的重點不是炫技，而是讓你看見一個完整的小型工作流程。"
          }
        ]
      },
      {
        "title": "專案中的人工流程、Python 流程、AI 協作流程",
        "blocks": [
          {
            "type": "subheading",
            "text": "人工流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "開檔案",
              "檢查欄位",
              "用 Excel 做統計",
              "複製結果",
              "手動寫摘要"
            ]
          },
          {
            "type": "subheading",
            "text": "Python 流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "自動讀檔",
              "自動分組統計",
              "自動輸出摘要表",
              "自動產生文字結論"
            ]
          },
          {
            "type": "subheading",
            "text": "AI 協作流程"
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "幫你把專案需求寫成步驟",
              "協助產生第一版程式",
              "解釋每一段在做什麼",
              "幫你補上錯誤處理與延伸功能"
            ]
          },
          {
            "type": "paragraph",
            "text": "最好的合作方式不是「叫 AI 一次全部做完」，而是你先掌握流程，再讓 AI 幫你補速度與說明。"
          }
        ]
      },
      {
        "title": "驗收清單",
        "blocks": [
          {
            "type": "paragraph",
            "text": "專案完成後，至少要檢查這幾件事："
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "`weekly_orders.xlsx` 能成功讀取",
              "缺檔時會顯示友善訊息",
              "缺少欄位時會顯示提醒",
              "`weekly_summary.xlsx` 有正確輸出",
              "`summary.txt` 有成功建立",
              "摘要文字與 Excel 統計結果一致"
            ]
          },
          {
            "type": "paragraph",
            "text": "如果這幾項都通過，這個專案就已經有基本可交付性。"
          }
        ]
      },
      {
        "title": "常見錯誤與排查",
        "blocks": [
          {
            "type": "list",
            "ordered": false,
            "items": [
              "檔案不存在。 先確認 Excel 是否和程式放在同一個資料夾。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "欄位名稱不一致。 例如 Excel 寫成「區域」不是「地區」，這時要先改欄位名稱或修改程式。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "`金額` 不是數字。 如果 Excel 裡混入文字，統計前要先清理資料。"
            ]
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "摘要檔有輸出，但內容不合理。 先開啟 `weekly_summary.xlsx`，確認排序和加總是否正確。"
            ]
          }
        ]
      },
      {
        "title": "AI 任務",
        "blocks": [
          {
            "type": "paragraph",
            "text": "請 AI 幫這個專案補上日期檔名、平均金額、總筆數與更友善的輸出訊息，並要求它保持初學者可理解的寫法。"
          }
        ]
      },
      {
        "title": "AI Prompt 範例",
        "blocks": [
          {
            "type": "code",
            "text": "你是一位 Python 自動化助教。\n請幫我優化下面的報表專案。\n\n需求：\n1. 讀取 weekly_orders.xlsx\n2. 檢查是否包含 地區 與 金額 欄位\n3. 統計各地區總金額\n4. 輸出 weekly_summary.xlsx\n5. 產生一段中文摘要\n6. 把摘要寫入 summary.txt\n\n限制：\n- 適合初學者\n- 使用 pandas 與 pathlib\n- 不要用太進階的語法\n\n輸出格式：\n- 先給完整程式\n- 再逐段解釋每個區塊的用途\n- 最後列出可能出錯的地方"
          }
        ]
      },
      {
        "title": "練習題",
        "blocks": [
          {
            "type": "subheading",
            "text": "基礎題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "增加一個欄位統計平均金額。",
              "印出原始資料總筆數。"
            ]
          },
          {
            "type": "subheading",
            "text": "改寫題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "將摘要檔名改成包含日期，例如 `summary_2026-04-24.txt`。",
              "如果資料為空，顯示「本週沒有可統計資料」。"
            ]
          },
          {
            "type": "subheading",
            "text": "實作題"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "將本章程式改成可以同時輸出 Excel 與文字摘要。",
              "執行後比對輸出的摘要內容，確認與報表數字一致。"
            ]
          }
        ]
      },
      {
        "title": "挑戰題",
        "blocks": [
          {
            "type": "paragraph",
            "text": "將第 4 章到第 9 章任選兩種能力整合成你自己的小專案，例如："
          },
          {
            "type": "list",
            "ordered": false,
            "items": [
              "先用爬蟲抓資料，再輸出 Excel 報表",
              "先整理下載資料夾，再自動彙整成摘要",
              "先用 Selenium 下載報表，再用 pandas 做統計"
            ]
          }
        ]
      },
      {
        "title": "小結",
        "blocks": [
          {
            "type": "paragraph",
            "text": "完成專案不代表學習結束，而是你已經具備把工作流程變成程式的基本能力。真正有價值的地方，不是你用了多少函式，而是你能不能把需求拆清楚、驗證結果、逐步優化。當你能做到這三件事，你就已經踏進真正的 AI 自動化實作了。"
          }
        ]
      }
    ]
  }
];
