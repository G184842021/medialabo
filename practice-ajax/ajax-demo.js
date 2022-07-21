let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	//検索キーを取得　5-1
	//id = ;
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';

	// 通信開始
	axios.get(url)
		.then(showResult)//成功
		.catch(showError)//失敗
		.then(finish);//後処理(最後にやる処理)
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力　検索結果の表示
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理　同じでいい
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理　同じでいい
function finish() {
	console.log('Ajax 通信が終わりました');
}
