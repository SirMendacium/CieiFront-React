export default function ({ opinion, src }) {
  return (
    <div className="col-md-2">
      <img src={src} />
      <p>{opinion}</p>
    </div>
  );
}
