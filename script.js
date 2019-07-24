var product = [
  {name: 'Бакажан', price: 14},
  {name: 'Помидор', price: 16},
  {name: 'Слива', price: 15},
  {name: 'Мороженное', price: 10},
  {name: 'Чеснок', price: 5}
  ];

  product.sort(function(a, b){
  return a.price-b.price;
  });

  product.sort(function(a, b){
  if (a.name > b.name) {
  return 1;
  } if (a.name < b.name) {
  return -1;
  }
  });


function bubbleSort(arr) {
  for (var i = 0, endI = arr.length - 1; i < endI; i++) {
    var wasSwap = false;
  for (var j = 0, endJ = endI - i; j < endJ; j++) {
    if (arr[j].name > arr[j + 1].name) {
      var swap = arr[j];

      arr[j] = arr[j + 1];
      arr[j + 1] = swap;
      wasSwap = true;
    }
  }
    if (!wasSwap) break;
  }
  return arr;
  }

  bubbleSort(product);


  var favoriteDish = ['Блинчики',
  'Вареники с картошкой',
  'Фруктовый салат',
  'Оливки'];

  //1
  for (var i=0; i < favoriteDish.length; i++ ) {
  console.log(favoriteDish[i]);
  };
  //2
  for (var n=1; n < favoriteDish.length; n+=2 ) {
  console.log(favoriteDish[n]);
  };
  //3
  for (var i=favoriteDish.length-1; i>=0; i--) {
  console.log(favoriteDish[i]);
  };

  //4
  for (var i= 0; i < favoriteDish.length; i++) {
    var regexp = /ки/ig;
    var isPrint = regexp.test(favoriteDish[i]);
    if (isPrint) {
    console.log(favoriteDish[i]);
    };
    };