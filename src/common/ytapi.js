export const loadYtScript = (callback)=>{
    let existScript = document.getElementById('yt-div');
    if(!existScript){
       const script= document.createElement('script');
    //    console.log('5=====::::::', script);
       script.src = 'https://apis.google.com/js/api.js';
       script.id='yt-div';
       script.async=true;
       script.defer=true;
       document.head.appendChild(script);

       script.onload=()=>{
        if(callback){
            console.log('11====::::', callback);
            callback;
        }
       };
    }
    // Pass callback if you want to do additional task
    // && callback
    if(existScript && callback){
        console.log('18:::::::::', callback);
        callback;
        
    }

}

export const loadExtScript=(setStateCallback)=>{
    const scriptTag = document.createElement('script');
        scriptTag.src = 'https://apis.google.com/js/api.js';
        scriptTag.addEventListener('load', setStateCallback(true));
        document.body.appendChild(scriptTag);
}