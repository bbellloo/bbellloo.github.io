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
        foodDescription = "台北著名的小籠包以鮮嫩多汁的肉餡和薄薄的皮子著稱，是一道不可錯過的台灣特色小吃。";
        break;
      case "mangoshavedice":
        foodTitle = "芒果冰";
        foodDescription = "新鮮的台北芒果搭配冰涼的刨冰，清甜爽口，是夏日消暑的絕佳選擇。";
        break;
      case "ruyifang":
        foodTitle = "瑞芳老街豆腐";
        foodDescription = "瑞芳老街出名的豆腐料理，口感細膩，搭配獨特的醬料，讓人回味無窮。";
        break;
      case "jiufen":
        foodTitle = "九份芋圓";
        foodDescription = "九份特色小吃，芋頭製成的圓球煮熟後加上糖水，口感Q彈香甜。";
        break;
      case "sunbiscuit":
        foodTitle = "太陽餅";
        foodDescription = "台中特色糕餅，外皮酥脆，內餡香甜，是絕對不能錯過的伴手禮。";
        break;
      case "milktea":
        foodTitle = "珍珠奶茶";
        foodDescription = "台中著名的飲料，香濃的茶香搭配Q彈的珍珠，一口下肚令人陶醉。";
        break;
      case "coffinbread":
        foodTitle = "棺材板";
        foodDescription = "台南傳統料理，香脆的酥皮包裹著鮮嫩的魚肉，口感豐富，讓人回味無窮。";
        break;
      case "danzaimian":
        foodTitle = "擔仔麵";
        foodDescription = "台南特色小吃，以獨特的麵條配上豐富的配料和獨特的湯頭，香氣撲鼻，回味無窮。";
        break;
      case "seafood":
        foodTitle = "海鮮";
        foodDescription = "高雄擁有豐富的海產資源，各式鮮美的海鮮料理讓人垂涎欲滴。";
        break;
      case "papaya":
        foodTitle = "木瓜牛奶";
        foodDescription = "高雄特色飲品，新鮮的木瓜搭配鮮奶製成，清甜爽口，是解暑的最佳選擇。";
        break;
      case "tempura":
        foodTitle = "基隆甜不辣";
        foodDescription = "基隆特色小吃，以彈牙的魚漿外皮包裹著香氣濃郁的內餡，入口鮮甜可口。";
        break;
      case "nightmarket":
        foodTitle = "廟口夜市";
        foodDescription = "基隆廟口聚集眾多美食，包括各式海鮮料理、小吃和熱騰騰的鍋物，絕對能滿足你的味蕾。";
        break;
      case "rice-noodles":
        foodTitle = "新竹米粉";
        foodDescription = "新竹特色米粉湯，清爽爽口，配料豐富，令人垂涎欲滴。";
        break;
      case "pork-ball":
        foodTitle = "貢丸湯";
        foodDescription = "新竹著名的貢丸湯，貢丸彈牙，湯頭鮮美，是道暖胃的美食。";
        break;
      case "chicken-rice":
        foodTitle = "雞肉飯";
        foodDescription = "嘉義特色料理，鮮嫩的雞肉搭配香氣十足的米飯，口味濃郁。";
        break;
      case "turkey-rice":
        foodTitle = "火雞肉飯";
        foodDescription = "嘉義另一道美食，以火雞肉製成，清爽可口，是當地人的最愛。";
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