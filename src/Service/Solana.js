
const SendTransaction = async(party) => {
    console.log(party);
    window.Buffer = window.Buffer || require('buffer').Buffer;
    const {Keypair, Transaction, SystemProgram, clusterApiUrl, Connection, sendAndConfirmTransaction, LAMPORTS_PER_SOL, PublicKey} = require("@solana/web3.js");

    let fromKeypair = Keypair.generate();
    let toKeypair = null;
    switch(party.toUpperCase()){
        case "ADMK":
            toKeypair = new PublicKey('HJHjvHfo9muRe1TNeCC6aZiimKh7uhBQRCzRN5Bx49Ni');
            break;
        case "DMK":
            toKeypair = new PublicKey('E5A9b8VAKi8GniFMRviT3fncVsJB3bmhbHFWHhsBBXyX');
            break;
        case "PMK":
            toKeypair = new PublicKey('CpFVn1S5H29Lnw6jd7QKiPejjG3MLy7Mmf9GRWEYzbFG');
            break;
        case "NTK":
            toKeypair = new PublicKey('AHnDUUimCapaXtgsaUM3PAfUvvxdk3erJBvgk5vcyckA');
            break;
        case "MNM":
            toKeypair = new PublicKey('2e3UXYhcF3wciqXnQv6zZNfZcgTpYwhpT34nmgG9hAfK');
            break;
        case "CPT":
            toKeypair = new PublicKey('GXZ6bLUwSeeD4P8qDwrXveE8psuvNFckvabvjg36qs8E');
            break;
        default:
            break;
    }
    console.log("from : ", fromKeypair.publicKey.toString());
    console.log("to : ", party);

    let connection = new Connection(clusterApiUrl('devnet'));


    let airdropSignature = await connection.requestAirdrop(
      fromKeypair.publicKey,
      LAMPORTS_PER_SOL * 2,
    );

    await connection.confirmTransaction(airdropSignature);

    let transaction = new Transaction();

    // Add an instruction to execute
    transaction.add(SystemProgram.transfer({
        fromPubkey: fromKeypair.publicKey,
        toPubkey: toKeypair,
        lamports: LAMPORTS_PER_SOL,
    }));

    sendAndConfirmTransaction(
      connection,
      transaction,
      [fromKeypair]
    );
}

export default SendTransaction;