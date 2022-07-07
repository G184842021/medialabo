// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let n = 0;
let yoso;
// 予想を4回実行する
let b = document.querySelector('#print');
b.addEventListener('click', hantei);
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
// ボタンを押した後の処理をする関数 hantei() の定義

function hantei() {
    let i = document.querySelector('input[name="answer"]');
	yoso = i.value;
    yoso = Number(yoso);

    let a = document.querySelector('span#t');
    let b = document.querySelector('span#kaisu');
    kaisu = kaisu + 1;
    n = n + 1;
         // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
   
    b.textContent = (kaisu+"回目の予想"+yoso);
    if(n > 4) {
        a.textContent = ("答えは"+kotae+"でした。すでにゲームは終わっています");
    } else if(yoso === kotae) {
        a.textContent = ("正解です。おめでとう！");
        n = n + 4;
    } else if(yoso < kotae) {
        a.textContent = ("間違い。答えはもっと大きいですよ");
    } else if(yoso > kotae) {
        a.textContent = ("間違い。答えはもっと小さいですよ");
    }
   

}