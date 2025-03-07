// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById(`name`).addEventListener(`change`, function (eventData) {
      let nameOutput = document.getElementById(`nameOutput`);
      console.log(eventData);
      nameOutput.innerText = eventData.target.value;
    });

    document.getElementById(`type`).addEventListener(`change`, function (eventData) {
      // console.log(eventData);
      let info = document.getElementById(`info`);
      info.innerText = eventData.target.value;
      changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault(); //stop page reload when button submitted
        console.log(e.target);      
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);

        //update Certificate info when form submitted:
        let nameOutput = document.getElementById(`nameOutput`);
        let info = document.getElementById(`info`);
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;



      });
    // Log readiness to console
    console.log("Ready");

    function changeCert(value) {
      let certificate = document.getElementById(`certificate`);
      certificate.classList = ``; // clear classes on each function call
      switch(value) {
        case `A`:
          certificate.classList.add(`number1`);
        break;
        case `B`:
          certificate.classList.add(`number2`);
        break;
        case `C`:
          certificate.classList.add(`number3`);
        break;
        case `D`:
          certificate.classList.add(`number4`);
        break;
      }
    }
});

function processForm(form){

}