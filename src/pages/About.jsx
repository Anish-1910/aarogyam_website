function About() {
  return (
    <>
      <section className="about-hero">
        <h1>About Aarogyam</h1>
        <p>Our story, our values, and our commitment to organic living.</p>
      </section>

      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            For the first time in India, a few organic farmers have come together to sell
            their own produce in retail packing with full traceback mechanism to their own
            farm, at a single retail point — <strong>Aarogyam</strong>.
          <p>
            For the first time in India, a few organic farmers have come together to sell
            their own produce in retail packing with full traceback mechanism to their own
            farm, at a single retail point — <strong>Aarogyam</strong>.
          </p>
            of the consumer as the top priority.
          </p>
          <p>
            The aim of Aarogyam and its participating farmers is to grow locally and sell
            locally, such that the consumer and the farmer are able to establish a life-long
            relationship. The aim is to stay small and committed to its regular select consumers.
          </p>
          <p>
            Aarogyam plans to slowly shift to a pre-order basis wherein its consumers can
            order the food items they require for the next 6–12 months and will be provided
            with their need or requirement, as and when the respective produce is harvested
            and becomes available for sale.
          </p>
          <p>
            The consumers will be able to track every step of the cultivation, harvest,
            packing and transport, once the farmer and farm are decided mutually by the
            farmer and the consumer. The physical shop is only for front display and
            aggregating the requirement and servicing it, at individual consumer level,
            at the back-end.
          </p>
            <p>
              We are for <em>"growing locally and consuming locally"</em> to reduce the carbon
              footprint and give the best value to both our farmer members and our lifetime consumers.
              We prefer to remain small, as a principle. So, we encourage similar initiatives across
              India by organic farmers to come together to market their produce in their area.
              You are welcome to learn from our successes and failures. By that way,{' '}
              <strong>1 + 1 becomes 11!</strong>
            </p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do at Aarogyam.</p>
            <div className="accent-line"></div>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">🌱</div>
              <h3>Pure Organic Farming</h3>
              <p>
                All our produce is grown without chemical fertilizers, pesticides, or
                herbicides. We follow organic farming practices certified under organic
                farming standards.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">🔗</div>
              <h3>Complete Traceability</h3>
              <p>
                We provide full traceback to the farm for every product. Consumers can
                know exactly which farmer grew their food, on which farm, and how it
                was cultivated.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">🏡</div>
              <h3>Local Economy</h3>
              <p>
                By growing locally and selling locally, we support the rural economy
                of Virudhunagar and ensure the freshest possible produce reaches
                our consumers.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">❤️</div>
              <h3>Consumer Health First</h3>
              <p>
                The name Aarogyam itself means health. Every decision we make is guided
                by what is best for the health and wellbeing of our consumers.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">🤝</div>
              <h3>Farmer-Consumer Bond</h3>
              <p>
                We believe in building lifelong relationships between farmers and consumers.
                Trust, transparency, and mutual respect form the foundation of our community.
              </p>
            </div>
            <div className="value-card">
              <div className="icon">🎯</div>
              <h3>Stay Small, Stay Committed</h3>
              <p>
                We intentionally stay small to maintain the highest quality and personal
                attention to each consumer. Quality over quantity is our mantra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-contact">
        <div className="container">
          <h2>Visit Us</h2>
          <p className="address">
            📍 27, TC Godown Street (Vaadiyan Street), Virudhunagar
          </p>
          <img
            src="/images/shop-front.jpeg"
            alt="Aarogyam Shop Exterior"
            className="shop-exterior-img"
          />
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon">🕘</div>
              <div className="label">Morning Hours</div>
              <div className="value">9:00 AM – 10:30 AM</div>
            </div>
            <div className="contact-item">
              <div className="icon">🕕</div>
              <div className="label">Evening Hours</div>
              <div className="value">6:30 PM – 8:00 PM</div>
            </div>
            <div className="contact-item">
              <div className="icon">📞</div>
              <div className="label">For Orders</div>
              <div className="value">70100 43267 / 94835 03392</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
