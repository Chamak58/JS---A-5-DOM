//console.log('assist file added')
document.getElementById('btn-donate-now-landfall')
    .addEventListener('click', function(event){
        event.preventDefault();


        //getInputFieldValueById
        // const addDonation = getInputFieldValueById();
        // console.log(addDonation);

        const addDonationLandfall = getInputFieldValueById('add-donation-landfall');
        //console.log(addDonationLandfall);

        const balanceLandfall = getTextFieldValueById('donation-balance-landfall')
        //console.log(addDonationLandfall, balance);
        const newBalanceLandfall = balanceLandfall + addDonationLandfall;
        console.log(newBalanceLandfall);

        document.getElementById('donation-balance-landfall').innerText = newBalanceLandfall;


        const myBalance =getTextFieldValueById('my-balance');
        console.log(myBalance);
        const myUpdateBalance = myBalance - addDonationLandfall;
        console.log(myUpdateBalance);

        document.getElementById('my-balance').innerText = myUpdateBalance;


    })