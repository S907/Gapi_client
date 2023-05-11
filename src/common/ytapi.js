export const loadYtScript = (callback)=>{
    let existScript = document.getElementById('yt-div');
    if(!existScript){
       const script= document.createElement('script');
    //    console.log('5=====::::::', script);
       script.src = 'https://apis.google.com/js/api.js';
       script.id='yt-div';
       document.body.appendChild(script);

       script.onload=()=>{
        if(callback){
            console.log('11====::::', callback);
            callback;
        }
       };
    }
    if(existScript && callback){
        console.log('18:::::::::', callback);
        callback;
    }

}