// データ（例）
const quotes = [
  { text: 'helloworld' },
  { text: 'hellomanga' }
];

// 要素取得
const abc = document.getElementById("quote");          // 表示エリア
const cgi = document.getElementById("generateBtn");    // 名言を表示ボタン
const hyu = document.getElementById("favoriteBtn");    // お気に入りに追加ボタン
const but = document.getElementById("favoritesList");  // お気に入り一覧(ul)

// ランダム名言を表示
function showQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  const text = quotes[idx].text;
  abc.textContent = text;
}

// お気に入り保存
function save() {
  const current = abc.textContent?.trim();
  if (!current || current === "名言がここに表示されます") return; // 何も表示してない時はスキップ

  // 既存のお気に入りを取得（なければ空配列）
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

  // 重複チェック
  if (!favorites.includes(current)) {
    favorites.push(current);
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
    aiuy(); // 保存後に一覧を更新
  }
}

// お気に入り一覧を表示（再描画）
function aiuy() {
  const list = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];
  but.innerHTML = ""; // クリア

  if (list.length > 0) {
    list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      but.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "お気に入りがありません";
    but.appendChild(li);
  }
}

// 初期化：ページ読み込み時に一覧描画
window.addEventListener("DOMContentLoaded", () => {
  aiuy();
});

// イベントリスナー
cgi.addEventListener("click", showQuote);
hyu.addEventListener("click", save);
