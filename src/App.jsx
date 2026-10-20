import { useState } from 'react'

function Judul() {
  return (
    <div className="judul">
      <h1 
      style={
        { color: 'blue', 
          fontSize: '2rem' 
        }
      }>Kantin Zaidan</h1>

      <p>
        {(() => {
          const jam = 9;
          return jam < 12 ? <p>Selamat pagi</p> : <p>Selamat siang</p>;
        })()}
      </p>

      <p>Saldo awal kartu kantin: Rp {18 * 1000}</p>
      
      <button disabled={true}>Bayar</button>

    </div>
  );
}
export default Judul;

