

let seat = 0 ;
let availableSeats = 40 ;
const ticketPrice = 550 ;

const seatSelection = document.getElementsByClassName("kbd");
 for(const oneSeat of seatSelection){
     oneSeat.addEventListener('click', function(event) {
        if(!oneSeat.classList.contains("selectedSeat") && seat <4 ){
                seat = seat + 1;
        availableSeats = availableSeats - 1 ;
            

        // seatButton color
        event.target.style.backgroundColor = '#1DD100';
        event.target.style.color = "white";

        // only one seat select
        oneSeat.classList.add("selectedSeat");
                
        
        // show seat details by appendChild
        const seatName = event.target.innerText;

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

        // Enable apply button
        applyButton.removeAttribute('disabled');
        }   

        else if (oneSeat.classList.contains("selectedSeat")) {
                alert('You have already selected this seat.');
        } 
else{
        alert('you can select only 4 seats');
}
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



// Coupon apply button function
const applyButton = document.getElementById("btn-apply");
 applyButton.addEventListener('click', function(){

        const totalPrice = document.getElementById("total-price").innerText;
        convertTotalPrice = parseInt(totalPrice);
        const sum = convertTotalPrice + parseInt(ticketPrice);

        // coupon code catch
 const couponElement = document.getElementById('input-element').value;
 const couponCode = couponElement;

 if(couponCode === 'NEW15'){
        const discountElement = document.getElementById("discount-price");
        const discountPrice = sum * 0.15 ;
        discountElement.innerText = discountPrice.toFixed(2);
         
        const totalSum = convertTotalPrice - discountPrice;

        // hide the label
        document.getElementById('grand-total').innerText = totalSum;
        document.getElementById('hide-element').style.display = 'none';
 }
 else if(couponCode === 'Couple 20'){
        const discountElement = document.getElementById("discount-price");
        const discountPrice = sum * 0.2 ;
        discountElement.innerText = discountPrice.toFixed(2);
         
        const totalSum = convertTotalPrice - discountPrice;

        // hide the label
        document.getElementById('grand-total').innerText = totalSum;
        document.getElementById('hide-element').style.display = 'none';
 }
 else{
        alert('Invalid Coupon Code');
 }
})



