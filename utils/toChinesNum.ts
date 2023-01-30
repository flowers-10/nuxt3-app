let changeNum = [
  "零",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
  "七",
  "八",
  "九",
];
let unit = ["", "十", "百", "千", "万"];
let getWan = (temp: number | string) => {
  let strArr = temp.toString().split("").reverse();
  let newNum = "";
  let newArr: string[] = [];
  strArr.forEach((item, index) => {
    newArr.unshift(
      item === "0" ? changeNum[parseInt(item)] : changeNum[parseInt(item)] + unit[index]
    );
  });

  let numArr: number[] = [];
  newArr.forEach((item, index) => {
    if (item !== "零") numArr.push(index);
  });
  if (newArr.length > 1) {
    newArr.forEach((m, n) => {
      if (newArr[newArr.length - 1] === "零") {
        if (n <= numArr[numArr.length - 1]) {
          newNum += m;
        }
      } else {
        newNum += m;
      }
    });
  } else {
    newNum = newArr[0];
  }
  return newNum;
};

export function toChinesNum(num: number) {
  if (num >= 100000000) return '请输入小于1亿的数字'
  let overWan = Math.floor(num / 10000);
  let noWan: string | number = num % 10000;
  if (noWan.toString().length < 4) {
    noWan = "0" + noWan;
  }
  return overWan ? getWan(overWan) + "万" + getWan(noWan) : getWan(num);
}
