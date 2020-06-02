import React from 'react'
import img404 from '../../images/undraw_404.svg'

const Page404 = () => {

    return (
        <main className="container">
            <div className="block-404">    
                <div className="block-404-first">
                    <img src={img404} alt="not found" />
                </div>
                <div className="block-404-second">
                    <h1>Page not found</h1>
                    <h2>We're sorry, we couldn't find the page you requested.</h2>
                    <h3>If you feel something is missing that should be here, contact us.</h3>
                </div>
            </div>
        </main>
    )
}

export default Page404
