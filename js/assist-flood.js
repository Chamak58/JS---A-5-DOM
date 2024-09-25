//console.log('assist file added')
document.getElementById('btn-donate-now')
    .addEventListener('click', function(event){
        event.preventDefault();


        //getInputFieldValueById
        // const addDonation = getInputFieldValueById();
        // console.log(addDonation);

        const addDonation = getInputFieldValueById('add-donation');
        //console.log(addDonation);

        const balance = getTextFieldValueById('donation-balance')
        //console.log(addDonation, balance);
        const newBalance = balance + addDonation;
        console.log(newBalance);

        document.getElementById('donation-balance').innerText = newBalance;


        const myBalance =getTextFieldValueById('my-balance');
        console.log(myBalance);
        const myUpdateBalance = myBalance - addDonation;
        console.log(myUpdateBalance);

        document.getElementById('my-balance').innerText = myUpdateBalance;


        const p = document.createElement('p');
        p.innerText = `${addDonation} Taka is Donated for the sufferer on recent flood in Bangladesh.`;
        console.log(p.innerText);

        document.getElementById('transaction-container').appendChild(p.innerText);



    })