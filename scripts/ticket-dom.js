
let seat = 0 ;
let availableSeats = 40 ;
const ticketPrice = 550 ;

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


const button = document.getElementById("apply-btn");
console.log(button);

// const totalPrice = document.getElementById("total-price").innerText;
// const convertTotalPrice = parseInt(totalPrice);
// const sum = convertTotalPrice + parseInt(ticketPrice);

// const grandTotal = document.getElementById("grand-total").innerText;
// const convertGrandTotal = parseInt (grandTotal);
// const sum2 = convertGrandTotal + parseInt(ticketPrice) ;

        setInnerText("seat-count", seat);
        setInnerText("seat-left", availableSeats);
        
        
        totalCost("total-price",parseInt(ticketPrice));
        grandTotal("grand-total",parseInt(ticketPrice));
     })
 }


function totalCost(id,value){
        const totalPrice = document.getElementById(id).innerText;
        const convertTotalPrice = parseInt(totalPrice);
        const sum = convertTotalPrice + parseInt(value);
        setInnerText("total-price", sum);
}

function grandTotal(id,value){
        const grandTotal = document.getElementById(id).innerText;
        const convertGrandTotal = parseInt (grandTotal);
        const sum = convertGrandTotal + parseInt(value) ;
        setInnerText("grand-total", sum);
}

 function setInnerText(id,value){
    document.getElementById(id).innerText = value;     
}


