const books = {
    title: 'This Present Darkness',
    description: 'Gospel book illustrating angels and demons',
    numberOfPages: 419,
    author: 'Frank Peretti',
    reading: true,
    toggleReadingStatus: function(){
        if(books.reading===false) {
        books.reading = true
    } else {
        books.reading = false
    }
}
}
books.toggleReadingStatus()

console.log(books.reading)
