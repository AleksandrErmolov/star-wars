import React from 'react'
import { useState, useEffect } from "react";
import cn from 'classnames'

import loaderBlack from './img/loader-black.svg'
import loaderWhite from "./img/loader-white.svg";
import loaderBlue from "./img/loader-blue.svg";

import styles from "./UILoading.module.css";


export default function UILoading({ theme = 'white', isShadow=true, classes }) {
    
    const [loaderIcon, setLoaderIcon] = useState(null)

    useEffect(() => { 
        switch (theme) {
    
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderWhite); break;
            case 'blue': setLoaderIcon(loaderBlue); break;

    default: break;
}
    }, [])

    return (
      <div>
        <img
          className={cn(styles.loader, isShadow && styles.shadow, classes)}
          src={loaderIcon}
          alt="loader"
        />
      </div>
    );
}
