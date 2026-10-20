import React from 'react';

function KartuMenu({ nama, harga, kategori = "Makanan" }) {
  return (
    <div className="kartu-menu">
      <h3>{nama}</h3>
      <p>Harga: Rp {harga.toLocaleString()}</p>
      <p>Kategori: {kategori}</p>
    </div>
  );



};

export default KartuMenu;