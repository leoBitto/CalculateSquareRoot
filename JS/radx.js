/* prendi input
ciclo calcolo approssimazione per eccesso a1 < radq(x)
 --- osserva che x/a1 e appross per difetto di radq(x)
calcolo media tra due numeri a2
 --- osserva che a2 è approx eccesso 
ripeti fino a dove voluto
*/
function calculate(){
    let x = document.getElementById('x').value;
    if(x != 0){
        var val = 0;
        
        /* approx eccesso primo numero */
        while(val*val < x){
            val = val + 1;
        }
        console.log(val);
        /* ciclo calcolo */
        for(let i=0; i<100 ; i++){
            let apprx = x/val;
            val = (val + apprx)/2;
        }
        /* output valore */
        document.getElementById('retval').innerHTML = val;
    }else{
        document.getElementById('retval').innerHTML = 0;
    }
}

