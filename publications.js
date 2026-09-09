import React from 'react';

const PUBLICATIONS = [
  {
    title: "Passing Over the Bloody Bridegroom: Exodus 4:24-26 in Its Biblical-Theological Context",
    journal: "The Master's University Journal of Biblical and Theological Studies",
    volume: "Volume 1",
    year: "Spring 2024",
    pages: "3–16",
    desc: "Analyzes the strange and graphic narrative of Exodus 4:24–26, demonstrating how Moses experienced a personal Passover through his son's circumcision that prefigures and sets the paradigm for Israel's national Passover.",
    pdfSrc: "Passing Over the Bloody Bridegroom.pdf"
  }
];

export default function PublicationsPage() {
  return (
    <main className="publications-container">
      <h1>Publications</h1>
      
      {PUBLICATIONS.map((pub, index) => (
        <div key={index} className="publication-card">
          <h2>{pub.title}</h2>
          <p>
            <em>{pub.journal}</em>, {pub.volume} ({pub.year}) | Pages: {pub.pages}
          </p>
          <p>{pub.desc}</p>
          
          <div className="pdf-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {/* Opens the PDF in a new tab */}
            <a 
              href={pub.pdfSrc} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View PDF
            </a>

            {/* Triggers a direct download */}
            <a 
              href={pub.pdfSrc} 
              download
            >
              Download PDF
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}
