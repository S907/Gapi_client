import React, { useEffect, useState } from 'react'
import {loadYtScript, loadExtScript} from '../common/ytapi'
function Yout() {
    const [loaded, setLoaded]=useState(false);
    const [stated, setStated]=useState([]);

    console.log('Before Mount:::::::::::',window);
    console.log('Before Mount:::::::::::',window.gapi);
    useEffect(()=>{
        // loadYtScript(()=>{
        //     setLoaded(true)
        // });
        loadExtScript(setLoaded)
        
        console.log('10:::::::::',window.gapi);
        return ()=>{
          window.removeEventListener('load', loadExtScript)
        }
       
    },[]);
    useEffect(()=>{
        console.log('15:::::::::',window.gapi);
        if(!loaded){
          return;
        }else{
          window.gapi.load('client', initClient);
        }
       
    },[loaded]);
    // console.log('20:::::::', stated);

    // const loadFunc = ()=>{
    //         window.gapi.load('client', initClient);
    // }

    const initClient = ()=>{
         return gapi.client.init({
            'apiKey': '12443536',
            // Your API key will be automatically added to the Discovery Document URLs.
            // 'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
            // clientId and scope are optional if auth is not required.
            // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
            // 'scope': 'profile',
          }).then(function() {
            // 3. Initialize and make the API request.
            return gapi.client.people.people.get({
              'resourceName': 'people/me',
              'requestMask.includeField': 'person.names'
            });
          }).then(function(response) {
            console.log(response.result);
          }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
          })
    }


  
    console.log('After Mount:::::::::::',window.gapi);
    // console.log('After Mount:::::::::::',initClient);

  return (
    <div>Yout</div>
  )
}

export default Yout