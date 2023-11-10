"use client"

import React, { useEffect, useState } from 'react'

const ButtonReinstall = ({ text, cl }: any) => {

    const [installLink, setInstallLink] = useState<string>(process.env.CHROME_EXT || '') // default Chrome

    useEffect(() => {
        // Check for Safari
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

        if (isSafari) {
            
        } else if (navigator.userAgent.indexOf("Edg") > -1) {
            setInstallLink(process.env.EDGE_EXT || '')
        } else if ((window as any).chrome) {
        } else if ('InstallTrigger' in window) {
            setInstallLink(process.env.FIREFOX_EXT || '')
        } else if ('ActiveXObject' in window) {
            console.log("Internet Explorer or Microsoft Edge (legacy)")
            setInstallLink(process.env.EDGE_EXT || '')
        } else if ('StyleMedia' in window) {
            console.log("Microsoft Edge")
            setInstallLink(process.env.EDGE_EXT || '')
        } else {
            console.log("Unknown browser")
        }
    }, [])

    return (
        <a href={installLink} className={`btn btn-submit mt-[15px] md:mt-5`} target="_blank">Reinstall Extension - it's free</a>
    )
}

export default ButtonReinstall