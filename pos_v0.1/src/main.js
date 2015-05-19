//TODO: Please write code in this file.
function printInventory(inputs) {
    var result="***<没钱赚商店>购物清单***"+"\n";
    var array=[];
    for(var i=0;i<inputs.length;i++){
        var  exist=false;
         for(var j=0;j<array.length;j++){
              if(array[j].barcode==inputs[i].barcode){
                   array[j].count++;
                   exist=true;
                      }
                }
                    if(!exist){
                        inputs[i].count=1;
                        array.push(inputs[i]);
                    }
            }
    var sum=0;
    for(var i=0;i<array.length;i++){
        result+="名称:"+array[i].name+"，数量："+array[i].count+array[i].unit+"，单价："
        +array[i].price+".00(元)"+"，小计："+(parseInt(array[i].price)*parseInt(array[i].count))+".00(元)"+"\n";
        sum+=(parseInt(array[i].price)*parseInt(array[i].count));

    }
    result=result+"---------------------"+"\n";
    result+="总计:"+sum.toFixed(2)+"(元)";
      console.log(result);
}
