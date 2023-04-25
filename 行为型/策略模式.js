// 对培养良好的编码习惯和重构意识却大有裨益,了解、会用即可

// 解决if-else很好的解决方案：对象映射
// 定义一个询价处理器对象
const priceProcessor = {
    pre(originPrice) {
      if (originPrice >= 100) {
        return originPrice - 20;
      }
      return originPrice * 0.9;
    },
    onSale(originPrice) {
      if (originPrice >= 100) {
        return originPrice - 30;
      }
      return originPrice * 0.8;
    },
    back(originPrice) {
      if (originPrice >= 200) {
        return originPrice - 50;
      }
      return originPrice;
    },
    fresh(originPrice) {
      return originPrice * 0.5;
    },
};
  
// 询价函数
function askPrice(tag, originPrice) {
    return priceProcessor[tag](originPrice)
}
  

// 如此一来，askPrice 函数里的 if-else 大军彻底被咱们消灭了。这时候如果你需要一个新人价，只需要给 priceProcessor 新增一个映射关系：

priceProcessor.newUser = function (originPrice) {
  if (originPrice >= 100) {
    return originPrice - 50;
  }
  return originPrice;
}