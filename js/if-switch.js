// 算術演算子を使用した戻り値を出力
console.log(45 + 18);

// 比較演算子を使用した戻り値を出力
console.log(45 > 18);

// 等価演算子を使用した場合の戻り値を出力
console.log('5' == 5);

// 厳密等価演算子を使用した場合の戻り値を出力
console.log('5' === 5);

// 変数numに0~4迄のランダムな整数を代入
let num = Math.floor(Math.random() * 5);

// 変数numの値を出力（確認）
console.log(num);

// 変数numの値が4であれば「大当たりです」と文字列で出力
if (num == 4) {
  console.log('大当たりです');
}

// 変数numの値が3であれば「当たりです」と文字列で出力
else if (num == 3) {
  console.log('当たりです');
}

// それ以外の時は「はずれです」と文字列で出力
else {
  console.log('はずれです');
}

// 変数numに0～4までのランダムな整数を代入する
num = Math.floor(Math.random() * 5);

// 変数numの値を出力（確認）
console.log(num);

// 変数numの値によって出力する文字列を切り替える
switch (num) {
  case 2:
    console.log('小吉です')
    break;
  case 3:
    console.log('中吉です')
    break;
  case 4:
    console.log('大吉です')
    break;
  default:
    console.log('末吉です')
    break;
}