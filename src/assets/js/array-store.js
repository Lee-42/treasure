import storage from "good-storage"

/**
 * 
 * @param {*} arr 
 * @param {*} val 
 * @param {*} compare findIndex的比较函数
 * @param {*} maxLen 支持保存的最大歌曲数
 * @returns 
 */
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    return
  }
  arr.unshift(val)
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

/**
 * 
 * @param {*} arr 
 * @param {*} compare 
 */
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if(index > -1){
    arr.splice(index, 1)
  }
}

/**
 * 
 * @param {Object} item 要保存的歌曲
 * @param {*} key 
 * @param {*} compare findIndex的比较函数
 */
export function save(item, key, compare) {
  const items = storage.get(key, [])
  insertArray(items, item, compare)
  storage.set(key, items)
  return items
}

/**
 * 
 * @param {*} key 
 * @param {*} compare 
 */
export function remove(key, compare) {
  const items = storage.get(key, [])
  deleteFromArray(items, compare)
  storage.set(key, items)
  return items
}


/**
 * 加载本地数据
 * @param {*} key 
 * @returns 
 */
export function load(key){
  return storage.get(key, [])
}
