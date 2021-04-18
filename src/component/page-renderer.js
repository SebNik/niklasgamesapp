import React from "react";
import {useRouteMatch} from 'react-router-dom'
import dynamic from 'next/dynamic'


const generatePage = page => {
    const Component = dynamic(() => import(`../pages/${page}`), { loading: () => <p>...</p> })
    return <Component/>
}

export default function PageRenderer() {
    const {
        params: {page}
    } = useRouteMatch()

    return generatePage(page)
}
