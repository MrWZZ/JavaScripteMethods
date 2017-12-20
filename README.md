+ [整数](#整数)
  + [GetRandomNum](#GetRandomNum)
+ [数组](#数组)
  + [GetItemsInArray](#GetItemsInArray)

---

<h1 id="整数">整数</h1>
<h2 id="GetRandomNum">GetRandomNum(min, max)</h2>

+ 返回一个范围为[min,max]的值。
+ min：最小值。
+ max：最大值。

```
function GetRandomNum(min, max)
{
  var range = max - min;
  var rand = Math.random();
  return (min + Math.round(rand * range));
}
```

<h1 id="数组">数组</h1>
<h2 id="GetItemsInArray">GetItemsInArray(num, array)</h2>

+ 在一个数组中返回多个不重复的项。
+ num：返回项的个数。
+ array：在哪个数组中返回。

```
function GetItemsInArray(num, array)
{
  var itemsArray = [];
  var indexArray = [];
  while (itemsArray.length < num)
  {
    var randomIndex = GetRandomNum(0, array.length - 1);
    //判断该值是否重复
    var isRepeated = false;
    for (var i = 0; i < indexArray.length; i++)
    {
      if (randomIndex == indexArray[i])
      {
        isRepeated = true;
        break;
      }
    }
    if (isRepeated)
    {
      continue;
    } else
    {
      indexArray.push(randomIndex);
      itemsArray.push(array[randomIndex]);
    }
  }
  return itemsArray;
}
```
