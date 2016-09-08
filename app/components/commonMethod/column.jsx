module.exports = {
  distribution(groupNumber, data){
    var result = [];
    if(data || data.length>0){
      for (var i = 0; i < groupNumber; i++) {
        result.push({
          height:0,
          data:[]
        });
      }

      function getMinHeightColumn() {
        var resultIndex = 0;
        var minHeight = result[0].height;
        for(let i=0;i<result.length;i++){
          if(result[i].height < minHeight){
            minHeight = result[i].height;
            resultIndex = i;
          }
        }
        return resultIndex;
      }

      data.map( ( item, index ) =>{
        var pushIndex = index < 1 ? index : getMinHeightColumn();
        var newHeight = Math.ceil(item.des.length/15) + (item.imageSize.split(':')[1]-0) * 12.86;
        result[pushIndex].data.push(item);
        result[pushIndex].height = result[pushIndex].height + newHeight;
      });
    }
    return result;
  }
};
