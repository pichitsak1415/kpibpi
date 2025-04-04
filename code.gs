function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getMenuData() {
  const sheet = SpreadsheetApp.openById("1gLQ3sGY34yJxg9wjeVv94VNOPlg2cXspPwGxlV4230I")
                .getSheetByName("Menu");
  const data = sheet.getDataRange().getValues();
  const result = [];

  for (let i = 1; i < data.length; i++) {
    result.push({
      menu: data[i][0],   // คอลัมน์ A
      link: data[i][1],   // คอลัมน์ B
      icon: data[i][2],   // คอลัมน์ C
      status: data[i][3], // คอลัมน์ D (TRUE/FALSE)
      badge: data[i][4]   // คอลัมน์ E (badge)
    });
  }
  return result;
}



