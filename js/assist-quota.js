//console.log('assist file added')
document.getElementById('btn-donate-now-quota')
    .addEventListener('click', function(event){
        event.preventDefault();


        //getInputFieldValueById
        // const addDonation = getInputFieldValueById();
        // console.log(addDonation);

        const addDonationQuota = getInputFieldValueById('add-donation-quota');
        //console.log(addDonationQuota);

        const balanceQuota = getTextFieldValueById('donation-balance-quota')
        //console.log(addDonationQuota, balance);
        const newBalanceQuota = balanceQuota + addDonationQuota;
        console.log(newBalanceQuota);

        document.getElementById('donation-balance-quota').innerText = newBalanceQuota;


        const myBalance =getTextFieldValueById('my-balance');
        console.log(myBalance);
        const myUpdateBalance = myBalance - addDonationQuota;
        console.log(myUpdateBalance);

        document.getElementById('my-balance').innerText = myUpdateBalance;


    })