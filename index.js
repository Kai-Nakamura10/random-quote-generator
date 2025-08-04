const quotes = [
    { text: "成功する秘訣は、成功するまでやり続けることだ。", author: "不明" },
    { text: "チャンスは準備された心にのみ訪れる。", author: "ルイ・パスツール" },
    { text: "失敗は成功のもと。", author: "日本のことわざ" },
    { text: "昨日よりも今日、今日よりも明日。", author: "自己啓発の言葉" },
    { text: "できるかできないかじゃない。やるかやらないかだ。", author: "ナイキの広告" },
    { text: "夢を語ろう。声に出すと現実が近づく。", author: "自己啓発本" },
    { text: "挑戦を恐れるな、変化を楽しめ。", author: "変化を愛する人々" },
    { text: "最も暗い夜もいつか明ける。", author: "マーティン・ルーサー・キングJr." },
    { text: "天才とは、1%のひらめきと99%の努力である。", author: "トーマス・エジソン" },
    { text: "私は9,000回以上シュートを外し、300試合に敗れた。決勝シュートを任されて26回も外した。人生で何度も何度も失敗してきた。だから私は成功したんだ。", author: "マイケル・ジョーダン" }
];

const colors = [
    "#fce4ec", // ピンク
    "#e3f2fd", // 水色
    "#e8f5e9", // 緑
    "#fff3e0", // オレンジ
    "#ede7f6", // パープル
    "#f0f4c3", // 黄緑
    "#f5f5f5", // グレー
    "#ffffff", // 白
    "#e0f7fa"  // シアン
];

const quoteDiv = document.getElementById("quote");
const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    quoteDiv.classList.remove("fade-in");

    quoteDiv.innerHTML = `
        <p>"${quote.text}"</p>
        <p><em>ー ${quote.author}</em></p>
      `;

    setTimeout(() => {
        quoteDiv.classList.add("fade-in");
    }, 10);

    // 音声読み上げ機能
    if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(`${quote.text}。${quote.author}`);
        utter.lang = 'ja-JP';
        window.speechSynthesis.cancel(); // 前の読み上げを止める
        window.speechSynthesis.speak(utter);
    }
});