//assuming I was able to retreive parsed json data
function displayResult (responseData) {
    console.log(responseData);

    /*
    would have made DOM elements to dislay result in window
    and update map as well
     */
}

let form = document.querySelector('.main-form');

//handling form submit
form.addEventListener('submit', function(e) {

    e.preventDefault();
    const siretInput = document.querySelector('#siret').value;

    //test input for valid format
    if (siretInput.length === 14 && !isNaN(parseInt(siretInput))) {

        //AJAX call to PHP REST API handler
        let xhr= new XMLHttpRequest();
        const url = 'sirene.php?siret=' + siretInput;
        xhr.open('get', url);
    
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === this.DONE && xhr.status === 200) {
                
                const response = JSON.parse(xhr.responseText);
                displayResult(response);
            }
        });
        xhr.send();
    }
});