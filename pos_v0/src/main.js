//TODO: Please write code in this file.
function printInventory(inputs) {
        var result="***<没钱赚商店>购物清单***"+"\n";
        var  number=0;
        var  subtotal=0;//小计
        var  sum=0; //总计

        for(var i=0;i<inputs.length;i++){
            number=inputs[i].count+inputs[i].unit;
            subtotal=(parseInt(inputs[i].price)*parseInt(inputs[i].count));
            sum+=(parseInt(inputs[i].price)*parseInt(inputs[i].count));
            result+="名称:"+inputs[i].name+"，数量："+number+"，单价："
            +inputs[i].price.toFixed(2)+"(元)"+"，小计："+subtotal+"(元)"+"\n";

        }

        result=result+"---------------------"+"\n";
        result+="总计:"+sum.toFixed(2)+"(元)";
         console.log(result);
}
