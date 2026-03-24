import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const galleryItems = [
  {
    src: '/images/gooseberry.jpeg',
    alt: 'Fresh organic gooseberry (nellikai)',
    title: 'Fresh Gooseberry',
    description: 'Rich in Vitamin C, straight from local farms',
  },
  {
    src: '/images/dry-fruit-punch.jpeg',
    alt: "Mridhula's Organic Dry Fruit Punch",
    title: "Mridhula's Dry Fruit Punch",
    description: 'With organic ghee & honey',
  },
  {
    src: '/images/organic-rice.jpeg',
    alt: 'Organic rice from Tirunelveli',
    title: 'Organic Rice',
    description: 'From certified organic farms in Tirunelveli',
  },
  {
    src: '/images/rice-bags.jpeg',
    alt: 'Organic rice and millet varieties',
    title: 'Rice & Millet Varieties',
    description: 'Traditional grain varieties, hand packed',
  },
  {
    src: '/images/banner.jpeg',
    alt: 'Aarogyam shop banner',
    title: 'Our Shop',
    description: '27, TC Godown Street, Virudhunagar',
  },
  {
    src: '/images/menu-board-1.jpeg',
    alt: 'Aarogyam full product menu board',
    title: 'Our Full Product List',
    description: 'இயற்கை விற்பனை நிலையம் — Virudhunagar',
  },
]

function Home() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">🌱 First of its kind in India</span>
            <h1>ஆரோக்கியம்</h1>
            <h2>A Direct Sales Point of Organic Farmers of Virudhunagar</h2>
            <p>
              For the first time in India, a group of organic farmers have come together
              to sell their own produce in retail packing with full traceback mechanism
              to their own farm — at a single retail point.
            </p>
            <div className="entry-highlight" role="status" aria-live="polite">
              <div className="entry-highlight-track">
                <span>
                  இயற்கை முறையில் உற்பத்தி செய்து நாங்கள் உட்கொள்ளும் அதே
                  உணவைத்தான், இங்கு விற்கிறோம்.
                </span>
                <span className="entry-highlight-separator" aria-hidden="true">•</span>
                <span>
                  We sell the same naturally grown food that we consume at our own place.
                </span>
                <span className="entry-highlight-separator" aria-hidden="true">•</span>
                <span aria-hidden="true">
                  இயற்கை முறையில் உற்பத்தி செய்து நாங்கள் உட்கொள்ளும் அதே
                  உணவைத்தான், இங்கு விற்கிறோம்.
                </span>
                <span className="entry-highlight-separator" aria-hidden="true">•</span>
                <span aria-hidden="true">
                  We sell the same naturally grown food that we consume at our own place.
                </span>
              </div>
            </div>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-primary">Explore Products</Link>
              <Link to="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
          <div className="hero-images">
            <img src="/images/shop-front.jpeg" alt="Aarogyam store front in Virudhunagar" />
            <img src="/images/products-display.jpeg" alt="Organic products on display" />
            <img src="/images/shop-display.jpeg" alt="Fresh organic produce" />
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <blockquote>
          "Medicine is not health care. Medicine is sick care. Good food, vigorous exercise,
          great friends, sound sleep, mental stimulation — that's health care."
        </blockquote>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <div className="container">
          <div className="section-header">
            <h2>Why Aarogyam?</h2>
            <p>We bring you the purest organic produce, directly from verified farms in Virudhunagar.</p>
            <div className="accent-line"></div>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="icon">🌾</div>
              <h3>Farm to Table</h3>
              <p>
                Every product comes directly from our participating organic farmers.
                No middlemen, no adulteration — just pure, honest food from farm to your table.
              </p>
            </div>
            <div className="highlight-card">
              <div className="icon">🔍</div>
              <h3>Full Traceability</h3>
              <p>
                Track every step of cultivation, harvest, packing and transport.
                Know your farmer, know your farm — complete transparency guaranteed.
              </p>
            </div>
            <div className="highlight-card">
              <div className="icon">🤝</div>
              <h3>Grow Local, Sell Local</h3>
              <p>
                Our farmers grow locally and sell locally, building lifelong relationships
                between consumers and the people who grow their food.
              </p>
            </div>
            <div className="highlight-card">
              <div className="icon">🧪</div>
              <h3>Chemical-Free Farming</h3>
              <p>
                No chemical fertilizers, no pesticides, no herbicides. Our produce is grown
                using only natural organic farming methods, certified and verified.
              </p>
            </div>
            <div className="highlight-card">
              <div className="icon">📦</div>
              <h3>Pre-Order System</h3>
              <p>
                Order what you need for the next 6–12 months. Your produce will be
                harvested and delivered fresh as it becomes available from the farm.
              </p>
            </div>
            <div className="highlight-card">
              <div className="icon">💚</div>
              <h3>Health First</h3>
              <p>
                Aarogyam means health. Our priority is providing trustworthy, safe food
                with the good health of the consumer always at the forefront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>From Our Store</h2>
            <p>A glimpse of the fresh organic produce available at Aarogyam.</p>
            <div className="accent-line"></div>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <button
                type="button"
                className="gallery-item"
                key={item.src}
                onClick={() => setSelectedImage(item)}
                aria-label={`Open image: ${item.title}`}
              >
                <img src={item.src} alt={item.alt} />
                <div className="overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="image-modal" role="dialog" aria-modal="true" aria-label={selectedImage.title}>
          <button
            type="button"
            className="image-modal-backdrop"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image popup"
          />
          <div className="image-modal-content">
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image popup"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="image-modal-caption">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Vision */}
      <section className="vision">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>
              Aarogyam aims to stay small and committed to its regular select consumers.
              We believe in building a community where the consumer and the farmer establish
              a life-long relationship built on trust and transparency.
            </p>
            <p>
              We are slowly shifting to a pre-order basis — consumers can order the food
              items they require for the next 6–12 months and will receive their produce
              as and when it is harvested fresh from the farm.
            </p>
            <div className="vision-stats">
              <div className="stat">
                <div className="number">16+</div>
                <div className="label">Product Categories</div>
              </div>
              <div className="stat">
                <div className="number">100%</div>
                <div className="label">Organic & Natural</div>
              </div>
              <div className="stat">
                <div className="number">0</div>
                <div className="label">Chemicals Used</div>
              </div>
            </div>
          </div>
          <div className="vision-image">
            <img src="/images/products-display.jpeg" alt="Full display of organic products" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
