const fs = require("fs")
const cheerio = require("cheerio")

String.prototype.trim = function () {
    return this.replace(/\s+/g, "")
  }

let html = fs.readFileSync("./data/html_da/201911291331295433580.html")
const $ = cheerio.load(html)
// $(".shisi_text .shisi_text_hui").each(function (i, elem) {
//   console.log($(this).html(),i)
// })

$(".shisi_text_hui").each(function (i, elem) {
    let str = $(this).parent().parent().text().trim()
    str = i ? str.replace('软考在线[rkpass.cn]解析：',''):str.replace('答案：','')
    console.log(str,i)
  })
// console.log()
