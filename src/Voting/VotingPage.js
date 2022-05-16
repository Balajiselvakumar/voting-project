import ADMK from '../static/images/flag/admk.png'
import DMK from '../static/images/flag/dmk.png'
import MNM from '../static/images/flag/mnm.jpg'
import NMTK from '../static/images/flag/nmtk.png'
import PMK from '../static/images/flag/pmk.png'
import CPT from '../static/images/flag/cpt.png'
import VotingNew from '../Voting/VotingNew'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import '../App.css';
import {useState} from "react";
import Loading from "./Loading";
import Thankyou from "./Thankyou";
import {db} from "../Service/Firebase";

const parties = [
    {
        img:ADMK,
        title:'ADMK'
    },
    {
        img:DMK,
        title:'DMK'
    },
    {
        img:PMK,
        title:'PMK'
    },
    {
        img:NMTK,
        title:'NTK'
    },
    {
        img:MNM,
        title:'MNM'
    },
    {
        img: CPT,
        title: 'CPT'
    }
];

export default function VotingPage(){
    const [show, setshow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    window.addEventListener('load', () => {
        const verified = sessionStorage.getItem('isAuthenticated');
        console.log(verified);
        if (verified === 'true'){
            setshow(true);
        }
    });

    if(isVoted){
        const aadhar = sessionStorage.getItem('aadhar');
        const docRef = db.collection('voters').doc(aadhar);
        docRef.update({
            isVoted:true
        }).then(() => {
            console.log("Voted Successfully");
            sessionStorage.delete('phone');
            sessionStorage.delete('aadhar');
            sessionStorage.delete('isAuthenticated');
        });
    }

    return (
            <Box sx={{ flexGrow: 1 }} style={{
                margin: '0 50px 0 50px',
                position: 'absolute', top: '50%',
                transform: 'translateY(-50%)',
            }}>
                <Grid container spacing={3} style={{display: show ? "" : "none"}}>
                    {
                        Array.from(Array(parties.length)).map((_, index) => (
                            <Grid item xs={12} sm={6} md={3} xl={2} className="party-card">
                                <VotingNew party={parties[index]} setShow={setshow} setLoading={setLoading} setRedirect={setRedirect} setIsVoted={setIsVoted}/>
                            </Grid>
                    ))}
                </Grid>
                 <Grid container spacing={3} style={{display: loading && !show && !redirect? "block" : "none", textAlign:"center", left:"50%",
                    transform:'translateX(50%)'}}>
                     <Loading />
                </Grid>
                 <Grid container spacing={3} style={{display: !show && !loading && !redirect? "block" : "none", textAlign:"center", left:"30%",
                    transform:'translateX(30%)'}}>
                    <h4>You have wrongly entered to authenticated page, kindly login to publish your VOTE!</h4>
                    <a href='/'>Redirect to Authentication Page</a>
                </Grid>

                <Grid container spacing={3} style={{display: redirect && !show && !loading ? "block" : "none", textAlign:"center", left:"100%",
                    transform:'translateX(100%)'}}>
                    <Thankyou />
                </Grid>
            </Box>
    );
}