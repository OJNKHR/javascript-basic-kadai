//btnというidを持つHTML要素を取得し、定数に代入する
const btnItem = document.getElementById('btn');

//textというidを持つHTML要素を取得し、定数に代入する
//const textItem = document.getElementById('text');

//btnをクリックした時のイベント処理を実行する
btnItem.addEventListener('click',()=>{
  //textというidを持つHTML要素を取得し、定数に代入する
  const textItem = document.getElementById('text');
  //textItemの文字を置き換える
  textItem.textContent = "ボタンをクリックしました";
});