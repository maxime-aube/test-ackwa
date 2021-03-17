let form = document.querySelector('.main-form');

form.addEventListener('submit', function(e) {

    e.preventDefault();
    const siretInput = document.querySelector('#siret').value;

    if (siretInput.length === 14 && !isNaN(parseInt(siretInput))) {

        let xhr= new XMLHttpRequest();
        const url = 'sirene.php?siret=' + siretInput;
        xhr.open('get', url);
    
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState === this.DONE && xhr.status === 200) {
                const response = xhr.responseText;
                alert(response);
            }
        });
        xhr.send();
    }
});