function LabelHarga({ nilai }) {
  return (
    <p>Harga: Rp {nilai.toLocaleString()}</p>
  );
}

export default LabelHarga;