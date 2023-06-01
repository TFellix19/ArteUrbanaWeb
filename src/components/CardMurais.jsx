import React from "react";
import { Link } from "react-router-dom";

export function CardMurais(props) {
 
  const {idmurais, idmural, titulo, datainauguracao, descricao, fotografia1} = props;

  return (
    <div id={{idmural}} className="d-flex w-100 mb-5 mt-5">
      <div className="card" style={{ width: '18rem', height: '25rem'}}>
        <img style={{width: '285px', height:'180px'}} src={fotografia1} className="card-img-top" alt="fotografia1" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h4 style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth:'300px'}} className="card-title">{titulo}</h4>
            <h5>{datainauguracao}</h5>
          </div>
          <p style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth:'300px'}} className="card-text pt-3">{descricao}</p>
          <div className="d-flex justify-content-between mt-5">
          <Link to={idmurais} type="button" href="#" className="btn btn-primary">ver mais</Link>
          <a href="" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../assets/ico-coment.svg" alt="icon comentário" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMurais;
