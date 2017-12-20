define(function()
{
  var self = this;
  //返回一个范围为[min,max]的值。
  //min:最小值。
  //max:最大值。
  self.GetRandomNum = function(min, max)
  {
    var range = max - min;
    var rand = Math.random();
    return (min + Math.round(rand * range));
  }

  //在一个数组中返回多个不重复的项。
  //num:返回项的个数。
  //array:在那个数组中返回。
  self.GetItemsInArray = function(num, array)
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

  return self;
});
