let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);

function printAnswer() {
	let id;
	//検索キーを取得　5-1
    let rs = document.querySelectorAll('input[name="kunimei"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            console.log(r.value);
			id = r.value;
        }
    }

    // ユーザが記入した文字列
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
    let aa = document.querySelector('span#City');
    let bb = document.querySelector('span#Weather');
    let cc = document.querySelector('span#MAX');
    let dd = document.querySelector('span#MIN');
    console.log(data);
    aa.textContent = ("都市名 : " + data.name);
    bb.textContent = ("天気 : " + data.weather[0].description);
    cc.textContent = ("最高気温 : " + data.main.temp_max);
    dd.textContent = ("最低気温 : " + data.main.temp_min);
    
}

function showError(err) {
	console.log(err);
}	

function finish() {
	console.log('通信が終わりました');
}


