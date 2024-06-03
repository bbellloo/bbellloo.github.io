// script.js

$(document).ready(function() {
  // 彈出標題
  gsap.fromTo("#title", { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 1 });

  // 彈出地圖
  gsap.fromTo("#map", { display: 'none', opacity: 0 }, { display: 'block', opacity: 1, duration: 1, delay: 1 });

  // 點擊行政區，顯示對應的美食列表
  $(".district").click(function() {
    $(".food-list").hide();
    var district = $(this).data("district");
    $("#food-list-" + district).fadeIn();
  });

  // 點擊美食，顯示對應的介紹文
  $(".food").click(function() {
    var food = $(this).data("food");
    var foodTitle, foodDescription;

    switch(food) {
      case "xiaolongbao":
        foodTitle = "小籠包";
        foodDescription = "小籠包是一種小巧可愛的包子，以多汁的內餡聞名。";
        break;
      case "mangoshavedice":
        foodTitle = "芒果冰";
        foodDescription = "芒果冰是一種受歡迎的夏季甜點，由新鮮的芒果和刨冰製成。";
        break;
      case "ruyifang":
        foodTitle = "瑞芳老街豆腐";
        foodDescription = "瑞芳老街的豆腐因其獨特的風味和口感而受歡迎。";
        break;
      case "jiufen":
        foodTitle = "九份芋圓";
        foodDescription = "九份的芋圓Q彈可口，是當地的特色甜點。";
        break;
      case "sunbiscuit":
        foodTitle = "太陽餅";
        foodDescription = "太陽餅是台中的名產，酥脆甜美。";
        break;
      case "milktea":
        foodTitle = "珍珠奶茶";
        foodDescription = "珍珠奶茶是台灣的招牌飲品，風靡全球。";
        break;
      case "coffinbread":
        foodTitle = "棺材板";
        foodDescription = "棺材板是一道台南特色小吃，外脆內軟，內餡豐富。";
        break;
      case "danzaimian":
        foodTitle = "擔仔麵";
        foodDescription = "擔仔麵是台南的經典美食，以細麵和濃郁的肉燥湯頭聞名。";
        break;
      case "seafood":
        foodTitle = "海鮮";
        foodDescription = "高雄靠海，海鮮新鮮美味，種類繁多。";
        break;
      case "papaya":
        foodTitle = "木瓜牛奶";
        foodDescription = "高雄的木瓜牛奶香甜濃郁，是當地的特色飲品。";
        break;
      case "tempura":
        foodTitle = "基隆甜不辣";
        foodDescription = "基隆甜不辣口感獨特，風味絕佳，是當地的著名小吃。";
        break;
      case "nightmarket":
        foodTitle = "廟口夜市";
        foodDescription = "基隆廟口夜市是當地的著名景點，聚集了各式各樣的美食。";
        break;
      case "rice-noodles":
        foodTitle = "新竹米粉";
        foodDescription = "新竹米粉細緻Q彈，口感獨特，是新竹的代表性美食。";
        break;
      case "pork-ball":
        foodTitle = "貢丸湯";
        foodDescription = "新竹的貢丸湯鮮美可口，肉質細膩。";
        break;
      case "chicken-rice":
        foodTitle = "雞肉飯";
        foodDescription = "嘉義的雞肉飯以嫩滑的雞肉和香濃的米飯聞名。";
        break;
      case "turkey-rice":
        foodTitle = "火雞肉飯";
        foodDescription = "嘉義的火雞肉飯風味獨特，深受食客喜愛。";
        break;
      // 添加更多食物介紹
      default:
        foodTitle = "";
        foodDescription = "";
    }

    $("#food-title").text(foodTitle);
    $("#food-description").text(foodDescription);
    gsap.fromTo("#food-intro", { opacity: 0 }, { opacity: 1, duration: 1 });
  });
});
