//TODO: Please write code in this file.
function printInventory(inputs) {
        var result="***<没钱赚商店>购物清单***"+"\n";
        var sum=0;

        for(var i=0;i<inputs.length;i++){
            result=result+"名称:"+inputs[i].name+"，数量："+inputs[i].count+inputs[i].unit+"，单价："
            +inputs[i].price.toFixed(2)+"(元)"+"，小计："+(parseInt(inputs[i].price)*parseInt(inputs[i].count)).toFixed(2)+"(元)"+"\n";
            sum+=(parseInt(inputs[i].price)*parseInt(inputs[i].count));

        }
        result=result+"---------------------"+"\n";
        result+="总计:"+sum.toFixed(2)+"(元)";
         console.log(result);
}
