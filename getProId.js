const fs = require("fs")
const cheerio = require("cheerio")
const {handleMongo} = require("./mogo")

String.prototype.trim = function () {
  return this.replace(/\s+/g, "")
}

const paperIdList = [
  "655",
  "618",
  "592",
  "553",
  "519",
  "485",
  "463",
  "420",
  "378",
  "359",
  "305",
  "304",
  "91",
  "89",
  "72",
  "74",
  "76",
  "78",
  "80",
  "82",
  "84",
  "88",
]
const fieldList = [
    "20192",
    "20191",
    "20182",
    "20181",
    "20172",
    "20171",
    "20162",
    "20161",
    "20152",
    "20151",
    "20142",
    "20141",
    "20132",
    "20131",
    "20122",
    "20121",
    "20112",
    "20111",
    "20102",
    "20101",
    "20092",
    "20091"
  ]
// console.log(paperIdList.length)
const arr = []
paperIdList.forEach((paperId,paperIndex) => {
    let obj = {}
    let list = []
  for (let i = 1; i < 76; i++) {
    
    //proId
    let html = fs.readFileSync(`./data/htmls/6_${paperId}_${i}_xuanze.html`)
    const $ = cheerio.load(html)
    let id = $('td[valign=top] script').attr("src").match(/product_id=(.*)&paper_id/)[1]
    // list.push({product_id:id})

    //答案及解析
    let ans = ''
    let analysis = ''
    let html_ans = fs.readFileSync(`./data/html_da/${id}.html`)
    const $ans = cheerio.load(html_ans)
    $ans(".shisi_text_hui").each(function (i, elem) {
      let str = $(this).parent().parent().text().trim()
       i ? ans = str.replace('软考在线[rkpass.cn]解析：',''): analysis = str.replace('答案：','')
    })
    list.push({product_id:id,ans:ans,analysis:analysis})

  }
  obj.paperId = paperId
  obj.field = fieldList[paperIndex]
  obj.question_list = list
  arr.push(obj)

})
fs.writeFileSync('./paperIdList.json',JSON.stringify(arr))
// handleMongo(arr,'papers')
// console.log(handleMongo)