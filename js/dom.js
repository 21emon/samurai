// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);
// windowオブジェクトの中身を出力する
console.log(window);

// html要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));
// html要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));
// 複数のhtml要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');
// 複数のhtml要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
}

// html要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));