function get_num() {
  let url = new URL(window.location.href);
  // URLSearchParamsオブジェクトを取得
  let params = url.searchParams;
  var fib = (parseInt(params.get('n'),10));
  return fib;
}

function fibonacci(fib) {
  if (fib > 0)
  {
    // フィボナッチ数列の1,2番目は1なので1を返す
    if (fib == 1 || fib == 2)
    {
      return 1;
    }
    // それ以外の時には調べる
    else
    {
      // 番号が既に調べ済みならば参照する
      if (fib-2 in already)
      {
        var one = already[fib-2];
      }
      // まだ調べていなければ計算する
      else
      {
        var one = fibonacci(fib-2);
        already[fib-2] = one;
      }
      if (fib-1 in already)
      {
        var two = already[fib-1];
      }
      else
      {
        var two = fibonacci(fib-1);
        already[fib-1] = two;
      }
      // 2つ前と1つ前の値の和を返す
      return one + two;
    }
  }
  else
  {
    return 0
  }
  
}
