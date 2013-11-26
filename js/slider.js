/**
 *  RedRock Homework JS
 *  by Ricter(mailto:RicterZheng@gmail.com)
 *  2013/11/26
 */
 
var s_width = 982;
var s_count = 3;
function slideto(count) {
  var leftmargin = s_width * count;
  for (i=1; i<=s_count; i++) {
    var item = document.getElementById("count-" + i);
    var button = document.getElementById("btn-" + i);
	i==count?item.style.zIndex = 1:item.style.zIndex = -1;
	i==count?button.className = 's-button active':button.className = 's-button';
  };
}
