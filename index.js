const cheerio = require("cheerio")
const request = require("request")
const fs = require("fs")

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
let arr = []
paperIdList.forEach((id) => {
  for (let i = 1; i < 76; i++) {
    let url = `http://www.rkpass.cn/tk_timu/6_${id}_${i}_xuanze.html`
    // console.log(url)
    request(url).pipe(
      fs.createWriteStream(`./data/${url.substring(url.lastIndexOf("/") + 1)}`)
    )

    // request(url, function (error, response, body) {
    //   if (response.statusCode === 200) {
    //     // console.log(body)
    //     const $ = cheerio.load(body)
    //     // $('span.shisi_text').each(function(i, elem) {
    //     //   console.log($(this).html().split('.&#xA0;'))
    //     //   // console.log($(this).text().trim())
    //     // })
    //     $("tbody script").each(function (i, elem) {
    //       if (
    //         $(this).attr("src") &&
    //         $(this)
    //           .attr("src")
    //           .match(/product_id=(.*)&paper_id/)
    //       ) {
    //         let key = $(this)
    //           .attr("src")
    //           .match(/product_id=(.*)&paper_id/)[1]
    //         if (arr.indexOf(key) !== -1){
    //           arr.push(key)
    //         }
    //           // console.log(
    //           //   $(this)
    //           //     .attr("src")
    //           //     .match(/product_id=(.*)&paper_id/)[1]
    //           // )
    //       }

    //       // console.log($(this).text().trim())
    //     })
    //     console.log(arr)
    //   }
    // })
  }
})

// request(url, function (
//   error,
//   response,
//   body
// ) {
//   if (response.statusCode === 200) {
//     // console.log(body)
//     const $ = cheerio.load(body)
//     // $('span.shisi_text').each(function(i, elem) {
//     //   console.log($(this).html().split('.&#xA0;'))
//     //   // console.log($(this).text().trim())
//     // })
//     $("tbody script").each(function (i, elem) {
//       if (
//         $(this).attr("src") &&
//         $(this)
//           .attr("src")
//           .match(/product_id=(.*)&paper_id/)
//       ) {
//         console.log(
//           $(this)
//             .attr("src")
//             .match(/product_id=(.*)&paper_id/)[1]
//         )
//       }

//       // console.log($(this).text().trim())
//     })
//   }
// })

// $.html()
