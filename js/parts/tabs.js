function tabs(){
    let info = document.querySelector('.info'),
    tabHeader = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hide(a){
        for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide')  
        }
    }
    hide(1);

    function show(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click' , function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tabHeader.length; i++){
               if (target == tabHeader[i]){
                hide(0);
                show(i);
                break;
               };
            }
        };
    });

}
module.exports = tabs;