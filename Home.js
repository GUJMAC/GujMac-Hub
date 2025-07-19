import React from "react";

const products = [
  {
    name: "MacBook Air 2013",
    specs: "i5 • 4GB • 128GB SSD",
    image: "https://via.placeholder.com/400x300?text=MacBook+Air+2013",
  },
  {
    name: "MacBook Air 2015",
    specs: "i5 • 8GB • 256GB SSD",
    image: "https://via.placeholder.com/400x300?text=MacBook+Air+2015",
  },
  {
    name: "MacBook Air 2017",
    specs: "i5 • 8GB • 128GB SSD",
    image: "https://via.placeholder.com/400x300?text=MacBook+Air+2017",
  },
  {
    name: "MacBook Air 2020",
    specs: "M1 • 8GB • 256GB SSD",
    image: "https://via.placeholder.com/400x300?text=MacBook+Air+2020",
  },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <img src="/logo1.png" alt="GujMac Hub Logo" style={{ width: 100 }} />
        <h1>Premium Refurbished MacBooks</h1>
        <p>Based in Gujarat · Trusted Deals · Quality Assured</p>
        <a
          href="https://wa.me/919265565548"
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'black',
            color: 'white',
            padding: '10px 20px',
            borderRadius: 10,
            textDecoration: 'none',
            display: 'inline-block',
            marginTop: 10,
          }}
        >
          📱 WhatsApp Us
        </a>
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Available Models</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 20
      }}>
        {products.map((product, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', borderRadius: 10, padding: 10 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: 10 }} />
            <h3>{product.name}</h3>
            <p>{product.specs}</p>
            <a
              href={`https://wa.me/919265565548?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noreferrer"
              style={{
                background: 'green',
                color: 'white',
                padding: '8px 12px',
                borderRadius: 8,
                textDecoration: 'none',
                display: 'inline-block',
                marginTop: 10,
              }}
            >
              Inquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
