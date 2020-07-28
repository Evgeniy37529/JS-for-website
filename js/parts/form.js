function form(){
    let message = {
    loading:'Загрузка',
    success : 'Спасибо, мы скоро свяжимся с вами',
    fail : 'Что-то пошло не так'
};
let form = document.getElementsByClassName('main-form')[0],
    bottom = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(elem){
        elem.addEventListener('submit', function(event){
        event.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);
        
        function postData(data){
        
            return new Promise(function(resolve, reject){
            let reqest = new XMLHttpRequest();
            reqest.open('POST' , '/server.php');
        reqest.setRequestHeader('Content-Type' , 'application/x-www-form-urlencoded');
        //console.log(formData);
        reqest.onreadystatechange = function (){
            if(reqest.readyState < 4){
            resolve()
            //statusMessage.innerHTML = message.loading;
        }else if(reqest.readyState === 4){
            if (reqest.status == 200 && reqest.status < 300){
                resolve()
            }else{
                reject()
            }
        }  
    }
    reqest.send(data);
    })
   }
    function clearInput(){
        for(let i = 0; i < input.length; i++){
            input[i].value = ''
        }
    }
    postData(formData)
            .then(() => statusMessage.innerHTML = message.loading )
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.fail )
    .then(clearInput)       
    })
}
sendForm(form);
sendForm(bottom);
}
module.exports = form;