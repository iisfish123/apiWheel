function slice(array, start, end) {
  // 判断数组合法性
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  // start和end处理称为非空
  start = start == null ? 0 : start
  end = end === undefined ? length : end
  // 处理负数 start = length + start && end = length + end
  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

module.exports = slice