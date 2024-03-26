
function controller(data, sortParam) {

    class Ticket {

        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;

        }
    }

    const ticketsHolder = []

    data.forEach(d => {
        const[destinationName, price, status] = d.split('|');
        ticketsHolder.push(new Ticket(destinationName, price, status));
    })
    if (sortParam === 'price'){
        ticketsHolder.sort((a,b) => {
            return a[sortParam] - (b[sortParam]);
        })
    }else{
        ticketsHolder.sort((a,b) => {
            return a[sortParam].localeCompare(b[sortParam]);
        })
    }
    return ticketsHolder;
}

// console.log(controller(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// ));

console.log(controller(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
