import React from 'react'

const Mainsection = () => {
  return (
    <div>
      <section className="hero iphone-11-pro">
        <div className="container">
            <div className="title">
                <h2 className="title-heading">iPhone 11 Pro</h2>
                <h3 className="title-sub-heading">Pro cameras. Pro Dispaly. Pro performance. </h3>
                <p className="title-price"> From $24.95/ne or $599 with trade-in.</p>
            </div>
            <div className="cta">
                <a href="" className="cta-link"> Learn More</a>
                <a href="" className="cta-link"> Buy</a>
            </div>
        </div>
    </section>
    <section className="hero iphone-11">
        <div className="container">
            <div className="title title-dark">
                <h2 className="title-heading">iPhone 11 </h2>
                <h3 className="title-sub-heading">Just the right amount of every things </h3>
                <p className="title-price"> From $16.65/ne or $399 with trade-in.</p>
            </div>
            <div className="cta">
                <a href="" className="cta-link cta-link-darker"> Learn More</a>
                <a href="" className="cta-link cta-link-darker"> Buy</a>
            </div>
        </div>
    </section>

    <section className="hero watch">
        <div className="container">
            <div className="title title-dark">
                <h2 className="title-heading-watch"></h2>
                <h3 className="title-sub-heading">with the new always On Retina Display you never seen a watch like this </h3>
            </div>
            <div className="cta">
                <a href="" className="cta-link cta-link-darker"> Learn More</a>
                <a href="" className="cta-link cta-link-darker"> Buy</a>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Mainsection