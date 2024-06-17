// script.js
$(document).ready(function() {
  // 淡入主要標題
  $("#title").fadeIn(1000, function() {
    // 標題淡入後淡入地圖
    $("#map-container").fadeIn(1000);
  });
  // 點擊行政區顯示對應的美食列表
  $(".district").click(function() {
    var district = $(this).data("district");
    $(".food-list").hide();
    $("#food-list-" + district).fadeIn(500); // 淡入特效
  });

  // 點擊美食顯示介紹
  $(".food").click(function() {
    var food = $(this).data("food");
    var foodTitle, foodDescription;

    switch (food) {
      case "xiaolongbao":
        foodTitle = "小籠包";
        foodDescription = "小籠包是台灣的經典美食，皮薄餡多，汁香味美。";
        break;
      case "mangoshavedice":
        foodTitle = "芒果冰";
        foodDescription = "芒果冰是台灣夏天的消暑聖品，芒果甜美，冰涼可口。";
        break;
      case "ruyifang":
        foodTitle = "瑞芳老街豆腐";
        foodDescription = "瑞芳老街的豆腐因其獨特的風味和口感而受歡迎。";
        break;
      case "jiufen":
        foodTitle = "九份芋圓";
        foodDescription = "九份的芋圓口感Q彈，是許多遊客必嘗的美食。";
        break;
      case "sunbiscuit":
        foodTitle = "太陽餅";
        foodDescription = "太陽餅是台中有名的伴手禮，酥脆可口，內餡香甜。";
        break;
      case "milktea":
        foodTitle = "珍珠奶茶";
        foodDescription = "珍珠奶茶是台灣發明的飲品，奶茶香濃，珍珠Q彈。";
        break;
      case "coffinbread":
        foodTitle = "棺材板";
        foodDescription = "棺材板是台南的特色小吃，外酥內嫩，餡料豐富。";
        break;
      case "danzaimian":
        foodTitle = "擔仔麵";
        foodDescription = "擔仔麵是台南著名的小吃，麵條Q彈，湯頭鮮美。";
        break;
      case "seafood":
        foodTitle = "海鮮";
        foodDescription = "高雄靠海，海鮮新鮮美味，各式海鮮料理令人垂涎。";
        break;
      case "papaya":
        foodTitle = "木瓜牛奶";
        foodDescription = "木瓜牛奶是高雄的招牌飲品，香甜濃郁，營養豐富。";
        break;
      case "tempura":
        foodTitle = "基隆甜不辣";
        foodDescription = "基隆甜不辣是當地著名的小吃，外酥內軟，口感獨特。";
        break;
      case "nightmarket":
        foodTitle = "廟口夜市";
        foodDescription = "廟口夜市匯集各種美食，是品味台灣小吃的好去處。";
        break;
      case "rice-noodles":
        foodTitle = "新竹米粉";
        foodDescription = "新竹米粉以其細滑的口感和獨特的風味聞名。";
        break;
      case "pork-ball":
        foodTitle = "貢丸湯";
        foodDescription = "新竹貢丸湯鮮美可口，貢丸Q彈，是當地的特色美食。";
        break;
      case "chicken-rice":
        foodTitle = "雞肉飯";
        foodDescription = "嘉義雞肉飯肉質鮮嫩，飯粒香Q，是當地著名小吃。";
        break;
      case "turkey-rice":
        foodTitle = "火雞肉飯";
        foodDescription = "火雞肉飯是嘉義特有的美食，火雞肉鮮美，配飯極佳。";
        break;
      default:
        foodTitle = "";
        foodDescription = "";
    }

    // 打開新窗口並顯示美食介紹
    var newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write("<html><head><title>" + foodTitle + "</title></head><body>");
    newWindow.document.write("<h1>" + foodTitle + "</h1>");
    newWindow.document.write("<p>" + foodDescription + "</p>");
    newWindow.document.write("</body></html>");
    newWindow.document.close();

    // 清除原窗口中的美食介紹
    $("#food-title").text("");
    $("#food-description").text("");
  });

});