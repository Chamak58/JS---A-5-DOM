document.getElementById('show-donation-form').addEventListener('click', function(){
    console.log('show add money btn clicked');
    showSectionById("donation-section");

});

document.getElementById('show-history-section').addEventListener('click', function(){
    showSectionById('transaction-section');
})