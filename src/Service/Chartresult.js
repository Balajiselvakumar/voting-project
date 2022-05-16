import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";

function Sol_balance() {
    (async() => {
        console.log(clusterApiUrl('devnet'));
        const connection = new Connection(
            clusterApiUrl('devnet'),
            'confirmed',
        );
        const admk_1 = new PublicKey('HJHjvHfo9muRe1TNeCC6aZiimKh7uhBQRCzRN5Bx49Ni');
        let admk_Balance = await connection.getBalance(admk_1) / 1000000000;
        console.log(admk_Balance);

        const dmk_1 = new PublicKey('E5A9b8VAKi8GniFMRviT3fncVsJB3bmhbHFWHhsBBXyX');
        let dmk_Balance = await connection.getBalance(dmk_1) / 1000000000;
        console.log(dmk_Balance);

        const cpt_1 = new PublicKey('GXZ6bLUwSeeD4P8qDwrXveE8psuvNFckvabvjg36qs8E');
        let cpt_Balance = await connection.getBalance(cpt_1) / 1000000000;
        console.log(cpt_Balance);

        const mnm_1 = new PublicKey('2e3UXYhcF3wciqXnQv6zZNfZcgTpYwhpT34nmgG9hAfK');
        let mnm_Balance = await connection.getBalance(mnm_1) / 1000000000;
        console.log(mnm_Balance);

        const pmk_1 = new PublicKey('CpFVn1S5H29Lnw6jd7QKiPejjG3MLy7Mmf9GRWEYzbFG');
        let pmk_Balance = await connection.getBalance(pmk_1) / 1000000000;
        console.log(pmk_Balance);

        const ntk_1 = new PublicKey('AHnDUUimCapaXtgsaUM3PAfUvvxdk3erJBvgk5vcyckA');
        let ntk_Balance = await connection.getBalance(ntk_1) / 1000000000;
        console.log(ntk_Balance);

        var votes = [admk_Balance, dmk_Balance, cpt_Balance, mnm_Balance, pmk_Balance, ntk_Balance];
        localStorage.setItem('votes', votes);
    })();

}