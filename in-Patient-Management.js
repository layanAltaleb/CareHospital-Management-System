
let currentDate = new Date();
document.getElementById("discharge-date").min = currentDate.toISOString().split("T")[0];

// Getting Form Modal
let formModal = document.getElementById('form-modal');

// Getting Patient Form
let patientForm = document.getElementById('patient-form');
 
// Getting Form Modal
let reservationModal = document.getElementById('reservation-modal');

// Getting Available Beds
let allBeds = document.querySelectorAll('.bed');

var formInputBedID = document.getElementById("bed-id");
// Looping in available beds classes and adding on click function to show form modal
for(let i = 0; i < allBeds.length; i++){
    allBeds[i].onclick = function(e) {
        
        let clickedElementID = e.target.parentNode.parentNode.getAttribute('id');
        
        let bed = document.getElementById(clickedElementID);

        if (allBeds[i].getAttribute('class') == 'bed available') {

            // Getting Clicked Element Parent
            formModal.style.top = '0';
            // Adding Clicked Element Id To the form
            formInputBedID.value = clickedElementID;

        }

        if (allBeds[i].getAttribute('class') == 'bed occupied') {

            // Getting Clicked Element Parent
            
            let bed_data = bed.querySelector('.bed-data');
            
            let clonedData = bed_data.cloneNode(true);
            
            if (reservationModal.querySelector('.bed-data') !== null) {

                reservationModal.removeChild(reservationModal.lastElementChild);
            }
            reservationModal.appendChild(clonedData);

            reservationModal.querySelector('.bed-data').style.visibility = "visible";
            reservationModal.style.top = '0';
        }

        if (allBeds[i].getAttribute('class') == 'bed static') {

            let patients = ['leen', 'sara', 'khaled', 'Kayan'];
            let ddates = ['20-02-2023', '13-03-2023', '17-3-2023', '01-04-2023'];
            let adates = ['20-02-2023', '13-03-2023', '17-3-2023', '01-04-2023'];
            let bed_data = bed.querySelector('.bed-data');

            bed_data.querySelector('.p-name').innerHTML = "<br>Patient Name: "+patients[Math.floor(Math.random() * patients.length)];
            bed_data.querySelector('.ad-date').innerHTML ="<br>Addmission Date: "+adates[Math.floor(Math.random() * adates.length)];
            bed_data.querySelector('.d-date').innerHTML = "<br> Discharge Date: "+ddates[Math.floor(Math.random() * ddates.length)];
            
            let clonedData = bed_data.cloneNode(true);
            
            if (reservationModal.querySelector('.bed-data') !== null) {

                reservationModal.removeChild(reservationModal.lastElementChild);
            }
            reservationModal.appendChild(clonedData);

            reservationModal.querySelector('.bed-data').style.visibility = "visible";

            reservationModal.style.top = '0';
        }
        
        
    }
}

// Add an onsubmit event handler to the form
patientForm.onsubmit = function(a) {
    // Preventing form from submiting
    a.preventDefault(); 
    // Getting Form Inputs Values
    let patient_name = document.getElementById('patient-name').value;
    let discharge_date = document.getElementById('discharge-date').value;
    // Getting Bed
    let bed = document.getElementById(formInputBedID.value);
    // Getting Clicked Element's Child img attribute [src]
    let bedImage = document.getElementById(formInputBedID.value).querySelector('img');

    // Getting Today Date
    let currentDate = new Date();
    let today = currentDate.toISOString().split("T")[0];
    if (patient_name !== '' && patient_name.match(/^[a-zA-Z]+$/) != null && discharge_date !== null && discharge_date >= today) {

        // Changing bed attribute to occupied
        bed.setAttribute('class', 'bed occupied');
        // Changing bed picture
        bedImage.setAttribute('src', 'pic/Picture11.png');

        // creating bed data container element
        let bedData = document.createElement('div');
        bedData.setAttribute('class', 'bed-data');

        // Patient Name
        // Creating bed patient name element
        let bedPatientDiv = document.createElement('div');
        let bedPatientText = document.createTextNode('Patient Name');
        bedPatientDiv.appendChild(bedPatientText);
        // Patient Name Element
        let bedPatientName = document.createElement('div');
        let PatientName = document.createTextNode(patient_name);
        bedPatientName.appendChild(PatientName);
        bedPatientName.setAttribute('id', formInputBedID.value + '-p-name');
        bedPatientDiv.appendChild(bedPatientName);
        bedData.appendChild(bedPatientDiv);

        // Addmission Date
        // Creating bed Addmission Date element
        let bedAddmissionDiv = document.createElement('div');
        let bedAddmissionText = document.createTextNode('Addmission Date');
        bedAddmissionDiv.appendChild(bedAddmissionText);
        // Patient Addmission Element
        let bedAddmissionDate = document.createElement('div');
        let AddmissionDate = document.createTextNode(today);
        bedAddmissionDate.appendChild(AddmissionDate);
        bedAddmissionDate.setAttribute('id', formInputBedID.value + '-ad-date');
        bedAddmissionDiv.appendChild(bedAddmissionDate);
        bedData.appendChild(bedAddmissionDiv);
        
        // Discharge Date
        // Creating bed Discharge Date element
        let bedDischargeDiv = document.createElement('div');
        let bedDischargeText = document.createTextNode('Discharge Date');
        bedDischargeDiv.appendChild(bedDischargeText);
        // Patient Discharge Element
        let bedDischargeDate = document.createElement('div');
        let DischargeDate = document.createTextNode(discharge_date);
        bedDischargeDate.appendChild(DischargeDate);
        bedDischargeDate.setAttribute('id', formInputBedID.value + '-d-date');
        bedDischargeDiv.appendChild(bedDischargeDate);
        bedData.appendChild(bedDischargeDiv);

        
        if (bed.querySelector('.bed-data') === null) {
            
            bed.appendChild(bedData);

        }

        formModal.style.top = '-1400px';
    } else {

        alert("write it correctly");
    }

};

// getting form modal close button and assigning on click function to it
var closeBtn = document.getElementById('close-form');
closeBtn.onclick = function () { 
    
    this.parentNode.style.top = '-1400px';

}
// getting form modal close button and assigning on click function to it
var closeBtn = document.getElementById('close-reservation');
closeBtn.onclick = function () { 
    
    this.parentNode.style.top = '-1400px';

}
