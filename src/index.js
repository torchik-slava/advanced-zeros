module.exports = function getZerosCount(number, base) {
  // количество нулей зависит от наибольшего простого делителя системы счисления и его степени; 
  // если сис-ма счисления разбивается на делители так, что наибольший делитель увеличенный на 1 
  // степень меньше другого делителя, то кол-во нулей будет зависеть от последнего: 160=2^5*5; 2^5>5^2.

  let inputNum=number, inputBase=base; 
  let zeros = 0;
  const numbers =[], powers = [];
    
  for(let i=2, goCondition = true; goCondition; i++){
    let p=0;
    while(inputBase%i===0){
      inputBase/=i;
      p++;
      if(inputBase===1) goCondition=false;
    }
    if(p!==0){
      numbers.push(i);
      powers.push(p);
    }    
  }
  
  let pos = numbers.length-1;
  for(let i=0, l=numbers.length-1; i<l; i++){
    if(Math.pow(numbers[i],powers[i])>Math.pow(numbers[pos],powers[pos]+1)) pos=i;
  }
  // block from previous task
  for(let i = 1; inputNum/Math.pow(numbers[pos],i)>1; i++){
    zeros+=Math.floor(inputNum/Math.pow(numbers[pos],i));
  }
  return Math.floor(zeros/powers[pos]);   
}
//Тут и далее попытка использовать ES6 и писать правильно, в соответствии с замечаниями при первом разборе таксов :)