import React from 'react'
import Dailyframe from '@daily-co/daily-js'

function Header() {

    let callFrame = Dailyframe.wrap(MY_IFRAME)

    return (
        <div>
            Header here
        </div>
    )
}

export default Header
