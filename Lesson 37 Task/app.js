const books = [
    {
    title: 'Dancing Queen',
    description: 'An orphan becomes royalty in strange land',
    numberOfPages: 150,
    author: 'Meaghan Styles',
    reading: false
    },
    {
        title: 'The Mob',
        description: 'A young man discovers he is the son of a powerful crime family boss',
        numberOfPages: 320,
        author: 'James Hadley Chase',
        reading: false
    },
    {
        title: 'Eclectic',
        description: 'A collection of short stories by various authors',
        numberOfPages: 510,
        author: 'Various Authors',
        reading: true
    },
    {
        title: 'Adire',
        description: 'A mysterious woman comes to town and everyones life changes forever',
        numberOfPages: 252,
        author: 'Biodun Stephen',
        reading: true
    },
    {
        title: 'Becoming',
        description: 'Biography of a great woman of substance and grace',
        numberOfPages: 444,
        author: 'Michelle Obama',
        reading: true
    }
    ];

    for (let B = 0; B < books.length; B = B+1) {
        const book = books[B];
        if (book.reading) {
          console.log(book);
        }
    }
