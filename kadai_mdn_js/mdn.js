//今日の日付を取得
const now =  new Date();

//年、月、日を取得する関数を定義
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();

//YYYY年MM月DD日の形式で出力
const today = `${year}年${month}月${date}日`;

console.log(today);