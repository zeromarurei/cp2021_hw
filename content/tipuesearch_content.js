var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023154 \n 網站倉儲:\xa0 https://github.com/zeromarurei/cp2021 \xa0 \n 網站連結:\xa0 https://zeromarurei.github.io/cp2021_hw \xa0 \n \n learn', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': '\n \n 1.將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動 https://gist.githubusercontent.com/zeromarurei/22e4b041d9bf9d75ecf1be257ebf4e74/raw/a3ab6d9b3dd5b8f73354dada328275fcc87adf30/gistfile1.txt  2.啟動按鈕或中斷紅色方塊上下游碰撞移動   https://gist.githubusercontent.com/zeromarurei/a3da102e6cba9840a115762e77a9adeb/raw/31b47b50d3dec3284602c8600dd9341d88b321e8/gistfile1.txt  3.打字   https://gist.githubusercontent.com/zeromarurei/95f06fcc4633e2d3cb70fc14922d4a0e/raw/292c16e407d32a6836a6fb07b8c0756aa2d7f81e/gistfile1.txt \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行) \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': 'run src', 'text': '<h2>run</h2>\n<!-- 導入 brython 程式庫 -->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n// ]]></script>\n<p><!-- 導入 FileSaver 與 filereader --></p>\n<p>\n<script type="text/javascript" src="./../cmsimde/static/ace/FileSaver.min.js"></script>\n<script type="text/javascript" src="./../cmsimde/static/ace/filereader.js"></script>\n</p>\n<p><!-- 導入 ace --></p>\n<p>\n<script type="text/javascript" src="./../cmsimde/static/ace/ace.js"></script>\n<script type="text/javascript" src="./../cmsimde/static/ace/ext-language_tools.js"></script>\n<script type="text/javascript" src="./../cmsimde/static/ace/mode-python3.js"></script>\n<script type="text/javascript" src="./../cmsimde/static/ace/snippets/python.js"></script>\n</p>\n<p><!-- 請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱--></p>\n<p>\n<script type="text/javascript">// <![CDATA[\nfunction doSave(storage_id, filename){\n    var blob = new Blob([localStorage[storage_id]], {type: "text/plain;charset=utf-8"});\n    filename = document.getElementById(filename).value\n    saveAs(blob, filename+".py");\n}\n// ]]></script>\n</p>\n<p><!-- 印出版次與關鍵字程式 --></p>\n<p>\n<script type="text/python3">// <![CDATA[\nfrom browser import document as doc\nimport ace\n# 清除畫布\ndef clear_bd(ev):\n    bd = doc["brython_div"]\n    bd.clear()\n# Brython 3.3.4 內建的 container 名稱為  \'container\' 且 turtle 輸出為 svg 必須使用 div 訂定 id\nAce = ace.Editor(editor_id="kw_editor", console_id="kw_console", container_id="kw__container", storage_id="kw_py_src" )\n# 從 gist 取出程式碼後, 放入 editor 作為 default 程式\ndef run():\n    # 利用 get 取下 src 變數值\n    try:\n        url = doc.query["src"]\n    except:\n        url = "https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py"\n    prog = open(url).read()\n\n    # 將程式載入編輯區\n    Ace.editor.setValue(prog)\n    Ace.editor.scrollToRow(0)\n    Ace.editor.gotoLine(0)\n    # 直接執行程式\n    #ns = {\'__name__\':\'__main__\'}\n    #exec(prog, ns)\n    # 按下 run 按鈕\n    Ace.run()\n\n# 執行程式, 顯示輸出結果與清除輸出結果及對應按鈕綁定\ndoc[\'kw_run\'].bind(\'click\', Ace.run)\ndoc[\'kw_show_console\'].bind(\'click\', Ace.show_console)\ndoc[\'kw_clear_console\'].bind(\'click\', Ace.clear_console)\ndoc[\'clear_bd\'].bind(\'click\', clear_bd)\n# 呼叫函式執行\nrun()\n// ]]></script>\n</p>\n<p><!-- 用來顯示程式碼的 editor 區域 --></p>\n<div id="kw_editor" style="width: 600px; height: 300px;"></div>\n<p><!-- 以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合 --></p>\n<!-- 存擋表單開始 --><form><label>Filename: <input id="kw_filename" placeholder="input file name" type="text">.py</label> <input onclick="doSave(\'kw_py_src\', \'kw_filename\');" type="submit" value="Save"></form><!-- 存擋表單結束 -->\n<p></p>\n<!-- 執行與清除按鈕開始 -->\n<p><button id="kw_run">Run</button> <button id="kw_show_console">Output</button> <button id="kw_clear_console">清除輸出區</button><button id="clear_bd">清除繪圖區</button><button onclick="window.location.reload()">Reload</button></p>\n<!-- 執行與清除按鈕結束 -->\n<p></p>\n<!-- 程式執行 ouput 區 -->\n<div style="width: 100%; height: 100%;"><textarea autocomplete="off" id="kw_console"></textarea></div>\n<!-- Brython 程式執行的結果, 都以 brython_div 作為切入位置 -->\n<div id="brython_div"></div>\n<!-- 導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫 -->\n<script src="https://mde.tw/cp2021/cmsimde/static/Cango-24v03-min.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/gearUtils-09.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/SVGpathUtils-6v03-min.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/sylvester.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/PrairieDraw.js"></script> \n', 'tags': '', 'url': 'run src.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'Final Project.html'}]};