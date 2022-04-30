import React from 'react';
import { Button } from "react-bootstrap";

function Card(props) {
    return (
        <>
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
                  <h6 class="card-price text-center">${props.type.price}<span class="period">/month</span></h6>
                  <hr />
                  <ul class="fa-ul">
                    <li class={props.type.userEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.title==="FREE"?<>{props.type.user}</>:<b>{props.type.user}</b>}</li>
                    <li class={props.type.storageEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.storage} </li>
                    <li class={props.type.publicProjectEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.publicProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.publicProject}</li>
                    <li class={props.type.communityEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.communityEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.community} </li>
                    <li class={props.type.privateProjectEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.privateProjectEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.privateProject}</li>
                    <li class={props.type.supportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.support} </li>
                    <li class={props.type.domainEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.title==="PRO"?<><b>Unlimited </b></>:""}{props.type.domain}</li>
                    <li class={props.type.reportEnabler?"":"text-muted"}><span class="fa-li"><i class={props.type.reportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.type.report}</li>
                  </ul>
                  <div class="d-grid">
                    <Button classNmae='btn btn-primary text-uppercase'>SUBSCRIBE</Button>
                   
                  </div>
                </div>
              </div>
            </div>
            
        </>
    )
}

export default Card