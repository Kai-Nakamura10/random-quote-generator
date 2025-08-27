// データ（例）
const quotes = [
  { text: 'helloworld' },
  { text: 'hellomanga' }
];

// 要素取得
const abc = document.getElementById("quote");          // 名言表示エリア
const cgi = document.getElementById("generateBtn");    // 名言を表示ボタン
const hyu = document.getElementById("favoriteBtn");    // お気に入り追加ボタン
const but = document.getElementById("favoritesList");  // お気に入り一覧(ul)

// ランダム名言を表示
function showQuote() {
  const idx = Math.floor(Math.random() * quotes.length);
  const text = quotes[idx].text;
  abc.textContent = text;
}

// お気に入り保存 ＋ 一覧更新
function save() {
  const current = abc.textContent?.trim();
  if (!current || current === "名言がここに表示されます") return; // まだ名言が出てないときはスキップ

  // 既存のお気に入りを取得（なければ空配列）
  const favorites = JSON.parse(localStorage.getItem("favoriteQuotes")) || [];

  // 重複チェック
  if (!favorites.includes(current)) {
    favorites.push(current);
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  }

  // 保存後すぐに一覧を表示
  aiuy();
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
window.addEventListener("DOMContentLoaded", aiuy);

// イベントリスナー
cgi.addEventListener("click", showQuote);
hyu.addEventListener("click", save);


let coi = 100;
console.log(coi);
let n = coi + 100;
console.log(n);
n = 300;
console.log(n);
function math (a,b) {
  return a + b;
}
console.log(math(8,9));

function string (a,b) {
  return a + " " + b;
}
console.log(string("big", "boy"));

const math2 = (a,b) => {
  return a + b;
};
console.log(math(2,2));
