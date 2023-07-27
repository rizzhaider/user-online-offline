'use client'
import { useState, useEffect } from "react";


const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
   

  useEffect(() => {
    if(navigator.onLine){
        setIsOnline(true);
    }else{
        setIsOnline(false);
    }
    const online = () => {
        setIsOnline(true);
    }
    const offline = () => {
        setIsOnline(false);
    }
      window.addEventListener('online', online);
      window.addEventListener('offline', offline);

    return () => {
        window.removeEventListener('online', online);
        window.removeEventListener('offline', offline)
    }
  }, [])


  return isOnline;
}

export default useOnline;