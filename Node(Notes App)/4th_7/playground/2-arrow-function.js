
const event = {
    name: 'Birthday Party',
    guestList: ['Himanshu', 'Pratik', 'Tanmay'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()