import React from "react";

function Dashboard(props) {
  return (
    <div>
      hola desde Dashboard
      <br />
      <img src={require(`../${props.imagen}`)} alt={props.altImagen} />
    </div>
  );
}
export default Dashboard;
