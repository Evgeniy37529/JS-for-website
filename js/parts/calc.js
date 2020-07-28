function calc(){
    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;
        totalValue.innerHTML = 0;
        
        persons.addEventListener('change' , function(){
            personSum = +this.value;
            total = (personSum + daysSum) * 4000;
            if(days.value == ''){
                totalValue.innerHTML = 0;
            }else{
                totalValue.innerHTML = total;
            }
        });

        days.addEventListener('change' , function(){
            daysSum = +this.value;
            total = (personSum + daysSum) * 4000;
            if(persons.value == ''){
                totalValue.innerHTML = 0;
            }else{
                totalValue.innerHTML = total;
            }

            place.addEventListener('change' , function(){
                if(days.value == '' || persons.value == '' ){
                    totalValue.innerHTML = total; 
                }else{
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                    console.log(this.options[this.selectedIndex])
                }
            })
        })

}
module.exports = calc;