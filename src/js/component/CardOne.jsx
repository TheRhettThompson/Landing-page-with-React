import React from "react";
const CardOne=()=>{
return(
	

<div className="cardOne col-3 text-center">
  <img src="https://picsum.photos/id/63/500/325" className="cardOne-img-top" alt="..."/>
  <div className="cardOne-body">
    <h5 className="cardOne-title">Card title</h5>
    <p className="cardOne-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque.</p>
  </div>  

  <div className="cardOne-footer bg-light">
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>

</div>

);

};
export default CardOne;