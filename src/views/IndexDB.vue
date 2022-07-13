<template>
  <div class="index-db">
    测试IndexDB
    <a-input v-model:value="inputVal"></a-input>
    <a-button type="info" size="small" @click="openDB">打开数据库</a-button
    ><br />
    <a-button type="primary" size="small" @click="insert">插入数据</a-button
    ><br />
    <a-button type="primary" size="small" @click="query">获取数据</a-button
    ><br />
    <a-button type="primary" size="small" @click="update">修改数据</a-button
    ><br />
    <a-button type="primary" size="small" @click="remove">删除数据</a-button
    ><br />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const inputVal = ref(0);
    let dbName = "helloIndexDB",
      version = 1,
      storeName = "helloStore";
    let db;
    let indexedDB = window.indexedDB;
    // 打开数据库
    const openDB = () => {
      const request = indexedDB.open(dbName, version);
      request.onsuccess = function (event) {
        db = event.target.result; // 数据库对象
        console.log("数据库打开成功");
      };
      request.onerror = function (event) {
        console.log("数据库打开错误");
      };
      request.onupgradeneeded = function (event) {
        // 数据库创建或升级的时候会触发
        console.log("onupgradeneeded");
        db = event.target.result; // 数据库对象
        let objectStore;
        if (!db.objectStoreNames.contains(storeName)) {
          objectStore = db.createObjectStore(storeName, { keyPath: "id" }); // 创建表
          // objectStore.createIndex('name', 'name', { unique: true }) // 创建索引 可以让你搜索任意字段
        }
      };
    };

    // 插入数据
    const insert = () => {
      let data = {
        id: new Date().getTime(), // 必须且值唯一
        name: "张三",
        age: 18,
        desc: "helloworld",
      };
      let request = db
        .transaction([storeName], "readwrite") // 事务对象, 指定表格名
        .objectStore(storeName)
        .add(data);
      request.onsuccess = function (event) {
        console.log("数据写入成功");
        request.onerror = function (event) {
          console.log("数据写入失败");
          throw new Error(event.target.error);
        };
      };
    };

    // 根据id查询数据
    const query = () => {
      let transaction = db.transaction([storeName]); // 事务
      let objectStore = transaction.objectStore(storeName); // 仓库对象
      let request = objectStore.get(inputVal.value - 0);
      request.onsuccess = function () {
        console.log("主键查询结果: ", request.result);
      };
      request.onerror = function () {
        console.log("事务失败");
      };
    };

    // 根据id修改数据
    const update = () => {
      let data = { id: 1638164880484, desc: "修改的内容" };
      let request = db
        .transaction([storeName], "readwrite")
        .objectStore(storeName)
        .put(data);
      request.onsuccess = function () {
        console.log("数据更新成功");
      };
      request.onerror = function () {
        console.log("数据更新失败");
      };
    };

    // 删除数据
    const remove = () => {
      let request = db
        .transaction([storeName], "readwrite")
        .objectStore(storeName)
        .delete(inputVal.value - 0);
      request.onsuccess = function () {
        console.log("数据删除成功");
      };
      request.onerror = function () {
        console.log("数据删除失败");
      };
    };

    return {
      inputVal,
      openDB,
      insert,
      query,
      update,
      remove,
    };
  },
};
</script>


<style lang="less" scoped>
.index-db {
}
</style>