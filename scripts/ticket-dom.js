
let seat = 0 ;
let availableSeats = 40 ;

const seatSelection = document.getElementsByClassName("kbd");

 for(const oneSeat of seatSelection){
     oneSeat.addEventListener('click', function(event) {
        seat = seat + 1;
        availableSeats = availableSeats - 1 ;
        
        const seatName = event.target.innerText;
        event.target.style.backgroundColor = '#1DD100';

        const firstSeat = document.getElementById('first-seat');
        
        const tr = document.createElement('tr');
        const td = document.createElement('td');
                td.innerText = seatName;
        const td2 = document.createElement('td');
                td2.innerText = "Economy";
        const td3 = document.createElement('td');
                td3.innerText = "550";
        
        tr.appendChild(td);        
        tr.appendChild(td2);        
        tr.appendChild(td3) ;
        firstSeat.appendChild(tr);    

        setInnerText("seat-count", seat);
        setInnerText("seat-left", availableSeats);
        
        
     })
 }

 function setInnerText(id,value){
    document.getElementById(id).innerText = value;     
}


