const MongoClient = require("mongodb").MongoClient
const assert = require("assert") //用于调试信息
const dbName = "softExam"
const url = "mongodb://localhost:27017" //连接地址，斜杠"/myproject"表示数据库，若不存在则自动创建
module.exports = {
  handleMongo: (data, col) => {
    MongoClient.connect(url, { useUnifiedTopology: true }, function (
      err,
      client
    ) {
      // Use connect method to connect to the server
      assert.equal(null, err)
      console.log("Connected successfully to server")

      const db = client.db(dbName)

      updateDocument(db, function () {
        client.close()
      })
    })

    const insertDocuments = function (db, callback) {
      // Get the documents collection
      const collection = db.collection(col)
      console.log(collection)
      // Insert some documents
      // collection.insertMany(data, function (err, result) {
      //   // assert.equal(err, null)
      //   // assert.equal(3, result.result.n)
      //   // assert.equal(3, result.ops.length)
      //   console.log(`Inserted ${data.length} documents into the collection`)
      //   callback(result)
      // })
    }

    const updateDocument = function(db, callback) {
      // Get the documents collection
      const collection = db.collection(col);
      // Update document where a is 2, set b equal to 1

      // collection.find().toArray(function(err, docs) {
      //   assert.equal(err, null);
      //   console.log("Found the following records");
      //   console.log(docs)
      //   callback(docs);
      // });

      collection.updateOne({paperId:'655'}
        , { $set: { b : 1 } }, function(err, result) {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log("Updated the document with the field a equal to 2");
        callback(result);
      });
    }

  }
}
