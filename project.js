let b = document.querySelector('#answer');
b.addEventListener('click', printAnswer);

function printAnswer() {
	let id;
	//検索キーを取得　5-1
    let rs = document.querySelectorAll('input[name="kunimei"]');
    for (let r of rs) {
        if (r.checked) {        // r が選択されていたら
            console.log(r.value);
			
        }
    }
        // ユーザが記入した文字列
		id = rs.value;
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
