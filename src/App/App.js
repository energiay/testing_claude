import React, {useRef} from "react"
import Header from '@Components/Header'
import Body from '@Components/Body'
import {BodyRefProvider} from './useBodyRef'

import Classes from "./App.module.css"
import "./index.css"


function App({settings}) {
    const bodyRef = useRef(null)

    return (
        <div className={Classes.App}>
            zhora
        </div>
    )
    //return (
    //    <div className={Classes.App}>
    //        <BodyRefProvider bodyRef={bodyRef}>
    //            <Header />
    //            <div ref={bodyRef}>
    //                <Body settings={settings.data}/>
    //            </div>
    //        </BodyRefProvider>
    //    </div>
    //)
}

export default App
