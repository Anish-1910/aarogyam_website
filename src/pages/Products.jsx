const productCategories = [
  {
    name: 'Cereals',
    icon: '🌾',
    description: 'Our organic cereals are grown without any chemical fertilizers or pesticides. Each grain is cultivated using traditional organic farming methods in the fertile lands of Virudhunagar district, ensuring the highest nutritional value and authentic taste.',
    items: [
      { name: 'Thooya Malli Rice', note: 'Premium aromatic rice variety, known for its fine grain and natural fragrance. Ideal for everyday meals.', badge: 'Rice' },
      { name: 'Idli 16 Variety Rice', note: 'A special short-grain rice variety, perfect for making soft, fluffy idlis and dosas.', badge: 'Rice' },
      { name: 'Naatu Cumbu (Pearl Millet)', note: 'Rich in iron and calcium. A traditional millet that helps in digestion and is naturally gluten-free.', badge: 'Millet' },
      { name: 'Kudirai Valli (Barnyard Millet)', note: 'High in dietary fiber and low in calories. Excellent for weight management and diabetic-friendly meals.', badge: 'Millet' },
      { name: 'Varagu (Kodo Millet)', note: 'Rich in antioxidants and polyphenols. Helps in regulating blood sugar and is easy to digest.', badge: 'Millet' },
      { name: 'Vellai Cholam (White Sorghum)', note: 'A nutrient-dense, gluten-free grain rich in iron. Makes excellent rotis and porridge.', badge: 'Millet' },
      { name: 'Sivappu Cholam (Red Sorghum)', note: 'Contains more antioxidants than white sorghum. Rich in iron and helps improve heart health.', badge: 'Millet' },
    ]
  },
  {
    name: 'Cereals — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/kambu_kozhu_cholam.jpeg', title: 'Naatu Cumbu (Pearl Millet)', sub: 'Rich in iron & calcium • Aids digestion • Gluten-free' },
    ]
  },
  {
    name: 'Dhall (Lentils)',
    icon: '🫘',
    description: 'Organically grown lentils, stone-ground and minimally processed to retain maximum nutrition. Our dhalls are free from artificial polishing and chemical treatment.',
    items: [
      { name: 'Udad Dhall (Black Gram)', note: 'Essential for South Indian cuisine — idli, dosa, vada. Rich in protein, potassium, and iron.' },
      { name: 'Green Gram Dhall (Moong)', note: 'Light on the stomach and easy to digest. Excellent source of plant-based protein and folate.' },
      { name: 'Toor Dhall (Pigeon Pea)', note: 'The everyday sambar dhall. Rich in folic acid, protein, and complex carbohydrates.' },
    ]
  },
  {
    name: 'Dhall — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/toor_dhal.jpeg', title: 'Toor Dhall (Pigeon Pea)', sub: 'Essential sambar dhall • Rich in folic acid & protein' },
    ]
  },
  {
    name: 'Edible Oil',
    icon: '🫒',
    description: 'Our oils are cold-pressed (chekku) using traditional wooden/stone pressing methods, preserving the natural nutrients, flavor, and aroma without any chemical extraction or refinement.',
    items: [
      { name: 'Til Oil (Sesame Oil)', note: 'Cold-pressed gingelly oil, excellent for cooking South Indian dishes. Rich in antioxidants and vitamin E. Known for its heart-healthy properties.', badge: 'Cold Pressed' },
      { name: 'Coconut Oil', note: 'Pure virgin coconut oil extracted by cold pressing. Ideal for cooking, hair care, and skin care. Contains lauric acid with antimicrobial properties.', badge: 'Cold Pressed' },
      { name: 'Ground Nut Oil (Peanut Oil)', note: 'Traditional cold-pressed groundnut oil with a rich nutty flavor. High in monounsaturated fats and vitamin E.', badge: 'Cold Pressed' },
    ]
  },
  {
    name: 'Edible Oil — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/sesame_oil.jpeg', title: 'Til Oil (Sesame Oil)', sub: 'Cold-pressed • Rich in antioxidants & vitamin E' },
      { src: '/images/coconutoil.jpeg', title: 'Coconut Oil', sub: 'Pure virgin • Cold-pressed • Antimicrobial properties' },
    ]
  },
  {
    name: 'Cosmetics',
    icon: '✨',
    description: 'Premium handcrafted herbal cosmetics made with organic ingredients and traditional recipes. From nourishing hair oils to luxurious bath products, all made using natural methods passed down through generations.',
    items: [
      { name: "Mridhula's Organic Coconut Herbal Oil", note: "A special blend of organic coconut oil infused with carefully selected herbs. Made using traditional methods to promote hair health, prevent hair fall, and nourish the scalp naturally.", badge: 'Herbal' },
      { name: 'Herbal Bath Powder', note: 'A luxurious blend of organic herbs and natural ingredients crafted into a soothing bath powder. Gently cleanses and nourishes the skin while providing a spa-like experience at home. Perfect for sensitive skin and all skin types.', badge: 'Natural' },
      { name: 'Herbal Soap', note: 'Handmade herbal soap created with pure organic ingredients and traditional soap-making methods. Rich lather, natural fragrance, and skin-nourishing properties. Free from synthetic chemicals and artificial preservatives.', badge: 'Organic' },
    ]
  },
  {
    name: 'Cosmetics — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/herbal_bath_powder.jpeg', title: 'Herbal Bath Powder', sub: 'Luxurious blend • Organic herbs • Natural cleansing' },
      { src: '/images/herbal_soap.jpeg', title: 'Herbal Soap', sub: 'Handmade • Pure ingredients • Skin-nourishing' },
    ]
  },
  {
    name: 'Fresh Fruits',
    icon: '🍎',
    description: 'Seasonal fruits harvested directly from our participating organic farms. Available fresh as per harvest season — no cold storage, no artificial ripening, no wax coating.',
    items: [
      { name: 'Guava (Red)', note: 'Rich in lycopene and vitamin C. The red variety has more antioxidants than the white.' },
      { name: 'Guava (White)', note: 'Classic aromatic guava, high in dietary fiber and vitamin C. Boosts immunity naturally.' },
      { name: 'Red Banana (Sevvazhai)', note: 'Sweeter and creamier than regular bananas. Rich in beta carotene, potassium, and vitamin C.', badge: 'Specialty' },
      { name: 'Sapota (Chikoo)', note: 'Naturally sweet fruit rich in vitamins A, C, and dietary fiber. Great as a natural energy source.' },
      { name: 'Mango', note: 'Seasonal organic mangoes from local farms. No carbide ripening — naturally tree-ripened.', badge: 'Seasonal' },
      { name: 'Kodikkai', note: 'A traditional local fruit variety with unique flavor profile.' },
      { name: 'Gooseberry – Big (Nellikai)', note: 'Indian gooseberry (amla), one of the richest sources of vitamin C. Excellent for immunity and hair health.', badge: 'Superfood' },
      { name: 'Gooseberry – Small', note: 'The smaller variety with a more concentrated sour taste. Traditionally used in pickles and chutneys.' },
      { name: 'Cucumber', note: 'Organic, naturally grown cucumber. Hydrating and rich in minerals.' },
      { name: 'Lemon', note: 'Fresh, chemical-free lemons from local organic farms.' },
    ]
  },
  {
    name: 'Fresh Vegetables',
    icon: '🥬',
    description: 'Freshly harvested vegetables from organic farms around Virudhunagar. Grown naturally without pesticides, our vegetables are picked and delivered to ensure peak freshness and nutrition.',
    items: [
      { name: "Lady's Finger (Okra)", note: 'Rich in fiber, vitamin C, and folate. A staple in South Indian cuisine.' },
      { name: 'Cluster Beans (Kothavarangai)', note: 'High in dietary fiber and protein. Helps regulate blood sugar levels.' },
      { name: 'Gourd (Suraikai)', note: 'Bottle gourd — cooling vegetable with high water content. Excellent for summer and digestion.' },
      { name: 'Bitter Gourd (Pavakkai)', note: 'Known for its medicinal properties, especially for regulating blood sugar. A traditional remedy.', badge: 'Medicinal' },
      { name: 'Tomato', note: 'Organically grown, naturally ripened tomatoes. Rich in lycopene antioxidant.' },
      { name: 'Small Onion (Sambar Onion)', note: 'The essential shallot for authentic South Indian sambar. Richer in nutrients than regular onions.' },
      { name: 'Ridge Gourd (Peerkangai)', note: 'Low-calorie vegetable rich in dietary fiber. Good for weight management.' },
      { name: 'Coconut', note: 'Fresh organic coconuts from local farms. Used in cooking, oil extraction, and traditional preparations.' },
      { name: 'Greens (Keerai)', note: 'Assorted seasonal organic greens — incredibly nutrient-dense with iron, calcium, and vitamins.', badge: 'Rotating' },
    ]
  },
  {
    name: 'Fresh Vegetables — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/vegetables.jpeg', title: 'Fresh Organic Vegetables', sub: 'Freshly harvested • Pesticide-free • Peak freshness' },
    ]
  },
  {
    name: 'Eggs',
    icon: '🥚',
    description: 'Free-range eggs from naturally raised country hens and guinea fowls. No hormones, no antibiotics — just healthy birds producing nutritious eggs.',
    items: [
      { name: 'Naatu Kozhi Eggs (Country Chicken)', note: 'Free-range country chicken eggs with deep orange yolks, richer in omega-3 fatty acids and vitamins compared to commercial eggs.', badge: 'Free Range' },
      { name: 'Guinea Fowl Eggs', note: 'A rare delicacy — smaller than chicken eggs but richer in protein and flavor. Guinea fowls are naturally hardy birds that thrive without any medical intervention.', badge: 'Rare' },
    ]
  },
  {
    name: 'Pickles',
    icon: '🫙',
    description: 'Homemade pickles prepared using traditional recipes with organic ingredients. No preservatives, no artificial colors — just authentic taste and natural preservation methods.',
    items: [
      { name: 'Nellikai Pickle (Big Gooseberry)', note: 'Tangy and spicy gooseberry pickle. Amla is known for its high vitamin C content and immunity-boosting properties.', badge: 'Immunity' },
      { name: 'Nellikai Pickle (Small Gooseberry)', note: 'Made with smaller, more intense gooseberries. Concentrated flavor and nutritional benefits.' },
      { name: 'Garlic Pickle (Malai Poondu)', note: 'Made with hill garlic (malai poondu) known for its medicinal properties — good for heart health and blood pressure.', badge: 'Medicinal' },
      { name: 'Pirandai Thokku', note: 'Pirandai (veldt grape) is a traditional herb known for aiding digestion and strengthening bones. This unique pickle carries those medicinal benefits.', badge: 'Medicinal' },
    ]
  },
  {
    name: 'Sweets & Healthy Treats',
    icon: '🍯',
    description: 'Traditional sweets and health mixes made with organic ingredients and natural sweeteners like karuppati (palm jaggery) and naatu sarkarai (country sugar). No refined sugar or artificial ingredients.',
    items: [
      { name: "Mridhula's Dry Fruit Punch", note: "A premium mix of organic dry fruits prepared with organic ghee and honey. A nutritious snack packed with energy, vitamins, and minerals.", badge: 'Premium' },
      { name: "Mridhula's Organic Guava Jam", note: 'Made from fresh organic guavas with naatu sarkarai (country sugar). A healthy alternative — no preservatives, no refined sugar.' },
      { name: "Mridhula's Organic Sapota Jam", note: 'Farm-to-jar sweetness made from organically grown sapota. 250g, no preservatives, made in India.' },
      { name: "Mridhula's Seed Punch", note: 'A natural energy booster made from a blend of seeds with natural sweetness. Boosts body energy the traditional way.', badge: 'Energy' },
      { name: 'Til + Karuppati (Sesame + Palm Jaggery)', note: 'A traditional combination — sesame provides calcium and iron, while palm jaggery is rich in minerals. Excellent winter snack.', badge: 'Traditional' },
      { name: 'Til + Jaggery', note: 'Classic combination of sesame seeds and cane jaggery. Rich in iron and calcium.' },
      { name: 'Cumbu + Naatu Sarkarai', note: 'Pearl millet sweet made with country sugar. A nutritious energy-boosting traditional treat.' },
      { name: 'Kezh Varagu + Naatu Sarkarai', note: 'Kodo millet sweet with country sugar. High in fiber and antioxidants.' },
      { name: 'Paasi Payaru + Naatu Sarkarai', note: 'Green gram sweet with country sugar. Rich in protein and easy to digest.' },
    ]
  },
  {
    name: 'Sweets & Spices — A Closer Look',
    icon: '📸',
    isGallery: true,
    photos: [
      { src: '/images/dry-fruit-punch-logo.jpeg', title: "Mridhula's Dry Fruit Punch", sub: 'Organic ghee & honey blend' },
      { src: '/images/guava-jam.jpeg', title: "Mridhula's Organic Guava Jam", sub: 'Made with organic guava & naatu sarkarai' },
      { src: '/images/sapota-jam.jpeg', title: "Mridhula's Organic Sapota Jam", sub: 'Farm-to-jar sweetness • No preservatives' },
      { src: '/images/seed-punch.jpeg', title: "Mridhula's Seed Punch", sub: 'Boosts body energy • Natural sweetness' },
      { src: '/images/sweet-balls.jpeg', title: 'Millet Sweet Balls', sub: 'Til, cumbu, varagu & paasi payaru varieties' },
      { src: '/images/coriander-packet.jpeg', title: 'Naatu Malli (Coriander)', sub: 'Single-source • Aarogyam branded • Responsibly grown' },
      { src: '/images/coriander_seeds.jpeg', title: 'Coriander Seeds (Naatu Malli)', sub: 'Authentic dried seeds • Aromatic & flavorful' },
      { src: '/images/elachi.jpeg', title: 'Elaichi (Cardamom)', sub: 'Queen of Spices • Premium aromatic variety' },
    ]
  },
  {
    name: 'Herbal Items',
    icon: '🌿',
    description: 'Carefully sourced and dried herbs, leaves, and spices with known medicinal and health benefits. Used in traditional Siddha and Ayurvedic preparations for centuries.',
    items: [
      { name: 'Cloves (Kirambu)', note: 'Powerful antiseptic and pain reliever. Used traditionally for dental health and respiratory issues.', badge: 'Medicinal' },
      { name: 'Elaichi (Cardamom)', note: 'The "Queen of Spices" — aids digestion, freshens breath, and is used in both sweet and savory preparations.', badge: 'Premium' },
      { name: 'Mango Leaf (Dried)', note: 'Traditionally used to manage blood sugar levels. Made into tea or powder for various health benefits.', badge: 'Medicinal' },
      { name: 'Guava Leaf (Dried)', note: 'Known to help manage blood sugar, aid digestion, and boost immunity. Used as herbal tea.', badge: 'Medicinal' },
      { name: 'Murungai Leaf (Moringa)', note: 'One of the most nutrient-dense superfoods on earth. Rich in protein, vitamins A, C, and calcium. Called the "Miracle Tree."', badge: 'Superfood' },
      { name: 'Hibiscus Flower (Dried)', note: 'Rich in antioxidants. Used for hair care and making herbal tea that helps manage blood pressure.', badge: 'Beauty & Health' },
      { name: 'Kasthuri Turmeric Powder', note: 'Wild turmeric used for skin care and beauty treatments. Has anti-inflammatory and skin-brightening properties.', badge: 'Beauty' },
      { name: 'Elaichi Bud Oil', note: 'Essential oil extracted from cardamom buds. Used for aromatherapy and traditional medicine.', badge: 'Essential Oil' },
      { name: 'Elaichi Leaf Oil', note: 'Aromatic essential oil from cardamom leaves with soothing and therapeutic properties.', badge: 'Essential Oil' },
    ]
  },
  {
    name: 'Honey',
    icon: '🍯',
    description: 'Pure, raw, unprocessed honey collected from natural beehives. No sugar feeding, no heat treatment, no blending — just pure organic honey as nature intended.',
    items: [
      { name: 'Organic Honey', note: 'Raw, unprocessed local honey from natural beehives. Contains natural enzymes, pollen, and propolis with antibacterial and healing properties. A natural immunity booster.', badge: 'Raw & Pure' },
    ]
  },
  {
    name: 'Dairy Products',
    icon: '🥛',
    description: 'From native breed cows (desi/naatu pashu) raised on organic feed without hormones or antibiotics. A2 milk and dairy products known for being easier to digest.',
    items: [
      { name: 'Native Cow Milk', note: 'A2 milk from native breed cows raised organically. Rich in A2 beta-casein protein which is easier to digest. Fresh and unprocessed.', badge: 'A2 Milk' },
      { name: 'Native Cow Milk Ghee', note: 'Pure ghee made from native cow milk using traditional bilona (churning) method. Rich in fat-soluble vitamins A, D, E, and K.', badge: 'Traditional' },
      { name: 'Paneer from Cow Milk', note: 'Fresh paneer made from native cow milk. Rich in protein and calcium, with no preservatives or additives.' },
    ]
  },
  {
    name: 'Fries & Dried Items',
    icon: '🍽️',
    description: 'Sun-dried vegetable preparations (vathals) made the traditional way. These can be stored for months and fried fresh when needed — a staple in South Indian meals.',
    items: [
      { name: 'Seeni Avarkai Vathal', note: 'Sun-dried flat beans (avarai). When fried, they become crispy and make a delicious accompaniment to rice and sambar.', badge: 'Traditional' },
      { name: 'Vendaikai Vathal', note: "Sun-dried okra (lady's finger). A traditional dried preparation that adds crunch and flavor to everyday meals.", badge: 'Traditional' },
    ]
  },
  {
    name: 'Chilli',
    icon: '🌶️',
    description: 'The famous Virudhunagar Samba chilli — known across Tamil Nadu for its perfect balance of heat and flavor.',
    items: [
      { name: 'Virudhunagar Samba Chilli', note: 'The iconic chilli variety of Virudhunagar, known for its vibrant red color, moderate heat, and rich flavor. Essential for authentic South Indian sambar, rasam, and chutneys. Organically grown without pesticides.', badge: 'Signature' },
    ]
  },
]

function Products() {
  return (
    <>
      <section className="products-hero">
        <h1>Our Organic Products</h1>
        <p>
          Over 60 organic items across 16 categories — all sourced directly from
          verified organic farms in and around Virudhunagar.
        </p>
      </section>

      {productCategories.map((category) => {
        if (category.isGallery) {
          return (
            <section className="products-section photo-gallery-section" key={category.name}>
              <div className="container">
                <div className="category-header">
                  <span className="cat-icon">{category.icon}</span>
                  <h2>{category.name}</h2>
                </div>
                <div className="product-photo-grid">
                  {category.photos.map((photo) => (
                    <div className="product-photo-card" key={photo.src}>
                      <img src={photo.src} alt={photo.title} />
                      <div className="product-photo-info">
                        <h4>{photo.title}</h4>
                        <p>{photo.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        }
        return (
          <section className="products-section" key={category.name}>
            <div className="container">
              <div className="category-header">
                <span className="cat-icon">{category.icon}</span>
                <h2>{category.name}</h2>
                <span className="count">{category.items.length} {category.items.length === 1 ? 'item' : 'items'}</span>
              </div>
              {category.description && (
                <p className="category-description">{category.description}</p>
              )}
              <div className="products-grid">
                {category.items.map((item) => (
                  <div className="product-card" key={item.name}>
                    <h4>{item.name}</h4>
                    {item.note && <p>{item.note}</p>}
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Products
