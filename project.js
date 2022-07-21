let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

function sendRequest() {
	//検索キーを取得　5-1
    let i = document.querySelector('input[name="kuni"]');
    let id = i.value;       // ユーザが記入した文字列
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id +'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
    let data = resp.data;
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
    let aa = document.querySelector('span#t');
    let bb = document.querySelector('span#f');
    let cc = document.querySelector('span#j');
    console.log(data);
    aa.textContent = ("都市名 : "+data.name);
    bb.textContent = ("最高気温 : "+data.main.temp_max);
    cc.textContent = ("最低気温 : "+data.main.temp_min);
}

function showError(err) {
	console.log(err);
}	

function finish() {
	console.log('通信が終わりました');
}
