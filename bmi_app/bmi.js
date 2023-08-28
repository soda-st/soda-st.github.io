const weight = document.getElementById('weight');
const height = document.getElementById('height');
const pic = document.getElementById('calc');
const bgimg = document.querySelector('.cont');
const result = document.getElementById('result');
const advice = document.getElementById('advice');
const person = document.querySelector('.person');
let imgType = null;

pic.addEventListener('click', function() {
    let bmi = Math.floor(weight.value / ((height.value / 100) ** 2));

    person.style.display = 'none';

    result.style.fontWeight = 900;
    result.style.color = '#ff0000'
    result.textContent = bmi;
    
    if (bmi < 18.5) { 
	advice.innerText = '低体重の部類に入りますね\nこの体重をキープすることを心掛けましょう!';
	imgType = 'url(img/sky.png)';
    } else if (bmi >= 18.5 && bmi < 25.0) {
	advice.innerText = 'おめでとうございます!\n普通の体重の部類に入りますね\n食生活を崩さないように頑張りましょう!';
	imgType = 'url(img/sky.png)';
    } else if (bmi <= 25.0 && bmi < 30.0) {
	advice.innerText = '肥満度が1であることがわかりました\n適度な運動を心掛けるようにしましょう';
	imgType = 'url(img/sky.png)';
    } else if (bmi <= 30.0 && bmi < 35.0) {
	advice.innerText = '肥満度が2であることがわかりました\n適度な運動を心掛けるようにしましょう';
	imgType = 'url(img/jigoku.jpeg';
    } else if (bmi >= 35.0 && bmi < 40.0) {
	advice.innerText = '判定の結果、肥満度が3であることがわかりました\n健康を維持するためにも適度な運動と食事管理が必要です';
	imgType = 'url(img/jigoku.jpeg)';
    } else {
	advice.innerText = '判定の結果、肥満度が4であることがわかりました\nダイエットが必要かもしれません...';
	imgType = 'url(img/jigoku.jpeg)';
    }

    bgimg.style.backgroundImage = imgType;
    bgimg.style.backgroundSize = 'cover';
    bgimg.style.backgroundRepeat = 'no-repeat';

}, false);




