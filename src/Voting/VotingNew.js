import * as React from 'react';
import {Card} from "react-bootstrap";
import "../Voting/votingc.css"
import SendTransaction from "../Service/Solana";


export default function votingepages(props){
    function handleTransaction(party){
        const confirmation = prompt("Are you sure, you voted for " + party + "?, please type '"+party+"' to verify");
        if(confirmation === party){
            props.setShow(false);
            props.setLoading(true);
            SendTransaction(party).then(r => {
                console.log('completed');
                props.setRedirect(true);
                props.setLoading(false);
                props.setIsVoted(true);
            });

        }else{
            alert("Unable to verify your vote, You might have entered wrong spelling or cancelled your selection, please try again!");
        }
    }
    return(
        <Card  style={{textAlign:"center", }} className="pro" onClick={() => handleTransaction(props.party.title)}>
            <Card.Img variant="top" src={props.party.img} className="product-image" />
            <Card.Body>
                <Card.Title bsPrefix={'title'}>{props.party.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}