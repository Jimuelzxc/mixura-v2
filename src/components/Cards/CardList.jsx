import Card from "./Card";
export default function CardList() {
  let data = [1, 2, 3, 4, 5, 7];

  return (
    <div id="card-list" className="columns-3 ">
      {data.map((value) => {
        return (
          <Card /> 
        );
      })}
    </div>
  );
}
