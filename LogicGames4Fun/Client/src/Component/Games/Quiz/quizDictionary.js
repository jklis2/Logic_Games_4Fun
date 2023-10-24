const quizDictionary = [
    // Geography
    {
      question: "What is the capital of France?",
      category: "Geography",
      options: { a: "Berlin", b: "Madrid", c: "Paris", d: "London" },
      correctAnswer: "c",
    },
    {
      question: "Which country is the largest by land area?",
      category: "Geography",
      options: { a: "Russia", b: "Canada", c: "China", d: "United States" },
      correctAnswer: "a",
    },
    {
      question: "What is the longest river in the world?",
      category: "Geography",
      options: { a: "Amazon", b: "Nile", c: "Yangtze", d: "Mississippi" },
      correctAnswer: "a",
    },
    {
      question: "Which continent is the smallest?",
      category: "Geography",
      options: { a: "Asia", b: "Antarctica", c: "Australia", d: "Europe" },
      correctAnswer: "c",
    },
    {
      question: "What is the highest mountain in the world?",
      category: "Geography",
      options: { a: "K2", b: "Kangchenjunga", c: "Lhotse", d: "Everest" },
      correctAnswer: "d",
    },
    {
      question: "In which country is the Sahara Desert primarily located?",
      category: "Geography",
      options: { a: "Morocco", b: "Egypt", c: "Algeria", d: "Libya" },
      correctAnswer: "c",
    },
    {
      question: "Which river flows through London?",
      category: "Geography",
      options: { a: "Thames", b: "Seine", c: "Danube", d: "Elbe" },
      correctAnswer: "a",
    },
    {
      question: "Which country has the most islands in the world?",
      category: "Geography",
      options: { a: "Indonesia", b: "Finland", c: "Sweden", d: "Philippines" },
      correctAnswer: "c",
    },
    {
      question: "What is the capital of Australia?",
      category: "Geography",
      options: { a: "Sydney", b: "Melbourne", c: "Canberra", d: "Brisbane" },
      correctAnswer: "c",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      category: "Geography",
      options: { a: "China", b: "South Korea", c: "Japan", d: "Thailand" },
      correctAnswer: "c",
    },
    {
      question: "What is the smallest country in the world?",
      category: "Geography",
      options: { a: "Monaco", b: "Vatican City", c: "San Marino", d: "Liechtenstein" },
      correctAnswer: "b",
    },
    {
      question: "Which country has the longest coastline in the world?",
      category: "Geography",
      options: { a: "Australia", b: "Russia", c: "Canada", d: "Indonesia" },
      correctAnswer: "c",
    },
    {
      question: "In which continent is the Amazon rainforest primarily located?",
      category: "Geography",
      options: { a: "Africa", b: "South America", c: "Asia", d: "North America" },
      correctAnswer: "b",
    },
    {
      question: "What is the capital of Japan?",
      category: "Geography",
      options: { a: "Seoul", b: "Beijing", c: "Tokyo", d: "Hanoi" },
      correctAnswer: "c",
    },
    {
      question: "Which country is known for having a shape resembling a boot?",
      category: "Geography",
      options: { a: "Portugal", b: "Italy", c: "Greece", d: "Spain" },
      correctAnswer: "b",
    },
    {
      question: "What is the largest desert in the world?",
      category: "Geography",
      options: { a: "Sahara", b: "Arabian", c: "Gobi", d: "Antarctic" },
      correctAnswer: "d",
    },
    {
      question: "Which city is famous for its Carnival celebration?",
      category: "Geography",
      options: { a: "New Orleans", b: "Rio de Janeiro", c: "Venice", d: "Sydney" },
      correctAnswer: "b",
    },
    {
      question: "What is the name of the longest mountain range in the world?",
      category: "Geography",
      options: { a: "Himalayas", b: "Rockies", c: "Andes", d: "Alps" },
      correctAnswer: "c",
    },
    {
      question: "Which African country has the most pyramids?",
      category: "Geography",
      options: { a: "Egypt", b: "Sudan", c: "Ethiopia", d: "Algeria" },
      correctAnswer: "b",
    },
    {
      question: "Which ocean is the largest?",
      category: "Geography",
      options: { a: "Atlantic", b: "Indian", c: "Southern", d: "Pacific" },
      correctAnswer: "d",
    },
  
    // Animals
    {
      question: "Which animal is known as the King of the Jungle?",
      category: "Animals",
      options: { a: "Lion", b: "Elephant", c: "Tiger", d: "Bear" },
      correctAnswer: "a",
    },
    {
      question: "How many legs does a spider have?",
      category: "Animals",
      options: { a: "6", b: "8", c: "10", d: "12" },
      correctAnswer: "b",
    },
    {
      question: "What is the largest mammal in the world?",
      category: "Animals",
      options: { a: "Elephant", b: "Blue Whale", c: "Giraffe", d: "Shark" },
      correctAnswer: "b",
    },
    {
      question: "Which bird is known for its colorful plumage and ability to mimic human speech?",
      category: "Animals",
      options: { a: "Parrot", b: "Eagle", c: "Owl", d: "Penguin" },
      correctAnswer: "a",
    },
    {
      question: "What is a group of lions called?",
      category: "Animals",
      options: { a: "Pack", b: "Herd", c: "Pride", d: "Colony" },
      correctAnswer: "c",
    },
    {
      question: "Which animal is known for changing its color as a form of camouflage?",
      category: "Animals",
      options: { a: "Octopus", b: "Chameleon", c: "Squid", d: "Cuttlefish" },
      correctAnswer: "b",
    },
    {
      question: "What is the only mammal capable of true sustained flight?",
      category: "Animals",
      options: { a: "Flying Squirrel", b: "Pterodactyl", c: "Bat", d: "Ostrich" },
      correctAnswer: "c",
    },
    {
      question: "Which animal has the longest lifespan?",
      category: "Animals",
      options: { a: "Elephant", b: "Blue Whale", c: "Giant Tortoise", d: "Human" },
      correctAnswer: "c",
    },
    {
      question: "What is the largest bird in the world?",
      category: "Animals",
      options: { a: "Eagle", b: "Ostrich", c: "Penguin", d: "Albatross" },
      correctAnswer: "b",
    },
    {
      question: "Which animal is famous for its black and white stripes?",
      category: "Animals",
      options: { a: "Panda", b: "Zebra", c: "Skunk", d: "Dalmatian" },
      correctAnswer: "b",
    },
    {
      question: "What is the fastest land animal?",
      category: "Animals",
      options: { a: "Lion", b: "Horse", c: "Cheetah", d: "Ostrich" },
      correctAnswer: "c",
    },
    {
      question: "Which animal is known as the ship of the desert?",
      category: "Animals",
      options: { a: "Horse", b: "Donkey", c: "Camel", d: "Elephant" },
      correctAnswer: "c",
    },
    {
      question: "What is a female deer called?",
      category: "Animals",
      options: { a: "Doe", b: "Fawn", c: "Hind", d: "Buck" },
      correctAnswer: "a",
    },
    {
      question: "Which animal is the largest member of the cat family?",
      category: "Animals",
      options: { a: "Lion", b: "Tiger", c: "Cheetah", d: "Leopard" },
      correctAnswer: "b",
    },
    {
      question: "What is the only bird that can fly backwards?",
      category: "Animals",
      options: { a: "Sparrow", b: "Hummingbird", c: "Eagle", d: "Penguin" },
      correctAnswer: "b",
    },
    {
      question: "Which sea creature has three hearts?",
      category: "Animals",
      options: { a: "Dolphin", b: "Shark", c: "Octopus", d: "Whale" },
      correctAnswer: "c",
    },
    {
      question: "What is the largest type of ‘big cat’ in the world?",
      category: "Animals",
      options: { a: "Lion", b: "Tiger", c: "Leopard", d: "Cheetah" },
      correctAnswer: "b",
    },
    {
      question: "Which animal is known to spend 90% of its day sleeping?",
      category: "Animals",
      options: { a: "Cat", b: "Sloth", c: "Koala", d: "Owl" },
      correctAnswer: "b",
    },
    {
      question: "What is a group of crows called?",
      category: "Animals",
      options: { a: "Flock", b: "Pack", c: "Murder", d: "Gaggle" },
      correctAnswer: "c",
    },
    {
      question: "Which animal is the national symbol of the United States?",
      category: "Animals",
      options: { a: "Bald Eagle", b: "Lion", c: "Bear", d: "Tiger" },
      correctAnswer: "a",
    },
  
    // History
    {
      question: "Who was the first President of the United States?",
      category: "History",
      options: { a: "Abraham Lincoln", b: "George Washington", c: "Thomas Jefferson", d: "John Adams" },
      correctAnswer: "b",
    },
    {
      question: "In which year did the Titanic sink?",
      category: "History",
      options: { a: "1912", b: "1915", c: "1918", d: "1921" },
      correctAnswer: "a",
    },
    {
      question: "Which ancient civilization built the pyramids?",
      category: "History",
      options: { a: "Romans", b: "Mayans", c: "Egyptians", d: "Greeks" },
      correctAnswer: "c",
    },
    {
      question: "Who was the first woman to fly solo across the Atlantic?",
      category: "History",
      options: { a: "Valentina Tereshkova", b: "Amelia Earhart", c: "Harriet Quimby", d: "Bessie Coleman" },
      correctAnswer: "b",
    },
    {
      question: "In which war was the Battle of Gettysburg fought?",
      category: "History",
      options: { a: "World War I", b: "American Civil War", c: "World War II", d: "Revolutionary War" },
      correctAnswer: "b",
    },
    {
      question: "Who was the famous queen of ancient Egypt?",
      category: "History",
      options: { a: "Cleopatra", b: "Nefertiti", c: "Hatshepsut", d: "Sheba" },
      correctAnswer: "a",
    },
    {
      question: "What was the name of the ship that brought the Pilgrims to America in 1620?",
      category: "History",
      options: { a: "Mayflower", b: "Santa Maria", c: "Nina", d: "Pinta" },
      correctAnswer: "a",
    },
    {
      question: "Who was assassinated on November 22, 1963, in Dallas, Texas?",
      category: "History",
      options: { a: "Martin Luther King Jr.", b: "John F. Kennedy", c: "Abraham Lincoln", d: "Robert F. Kennedy" },
      correctAnswer: "b",
    },
    {
      question: "Which ancient civilization is known for its Olympic Games?",
      category: "History",
      options: { a: "Romans", b: "Greeks", c: "Egyptians", d: "Mayans" },
      correctAnswer: "b",
    },
    {
      question: "In which year did the United States declare its independence?",
      category: "History",
      options: { a: "1776", b: "1783", c: "1492", d: "1620" },
      correctAnswer: "a",
    },
    {
      question: "Who was the first human to journey into outer space?",
      category: "History",
      options: { a: "Neil Armstrong", b: "Yuri Gagarin", c: "John Glenn", d: "Buzz Aldrin" },
      correctAnswer: "b",
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      category: "History",
      options: { a: "Mongol Empire", b: "Ottoman Empire", c: "Roman Empire", d: "British Empire" },
      correctAnswer: "a",
    },
    {
      question: "Who was the famous British prime minister during World War II?",
      category: "History",
      options: { a: "Neville Chamberlain", b: "Winston Churchill", c: "Margaret Thatcher", d: "Tony Blair" },
      correctAnswer: "b",
    },
    {
      question: "Which ancient civilization invented paper?",
      category: "History",
      options: { a: "Romans", b: "Greeks", c: "Egyptians", d: "Chinese" },
      correctAnswer: "d",
    },
    {
      question: "What was the main cause of the Cold War?",
      category: "History",
      options: { a: "Imperialism", b: "Communism vs Capitalism", c: "Slavery", d: "Religious Differences" },
      correctAnswer: "b",
    },
    {
      question: "Who was the first emperor of China?",
      category: "History",
      options: { a: "Liu Bang", b: "Qin Shi Huang", c: "Kangxi Emperor", d: "Yongzheng Emperor" },
      correctAnswer: "b",
    },
    {
      question: "Which war was fought between the North and South regions in the United States?",
      category: "History",
      options: { a: "American Civil War", b: "Revolutionary War", c: "World War I", d: "World War II" },
      correctAnswer: "a",
    },
    {
      question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
      category: "History",
      options: { a: "Joseph Stalin", b: "Vladimir Putin", c: "Nikita Khrushchev", d: "Mikhail Gorbachev" },
      correctAnswer: "c",
    },
    {
      question: "Which ancient civilization is known for its hieroglyphics?",
      category: "History",
      options: { a: "Romans", b: "Greeks", c: "Mayans", d: "Egyptians" },
      correctAnswer: "d",
    },
    {
      question: "What was the main language of the Roman Empire?",
      category: "History",
      options: { a: "Greek", b: "Latin", c: "Italian", d: "English" },
      correctAnswer: "b",
    },
  
    // Science
    {
      question: "What is the chemical symbol for water?",
      category: "Science",
      options: { a: "H2O", b: "O2", c: "H2", d: "CO2" },
      correctAnswer: "a",
    },
    {
      question: "What is the largest planet in our solar system?",
      category: "Science",
      options: { a: "Earth", b: "Mars", c: "Jupiter", d: "Saturn" },
      correctAnswer: "c",
    },
    {
      question: "What gas do plants absorb from the atmosphere?",
      category: "Science",
      options: { a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Hydrogen" },
      correctAnswer: "b",
    },
    {
      question: "How many bones are there in the adult human body?",
      category: "Science",
      options: { a: "206", b: "208", c: "210", d: "212" },
      correctAnswer: "a",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      category: "Science",
      options: { a: "Gold", b: "Iron", c: "Diamond", d: "Platinum" },
      correctAnswer: "c",
    },
    {
      question: "What is the most common gas in the Earth's atmosphere?",
      category: "Science",
      options: { a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Hydrogen" },
      correctAnswer: "c",
    },
    {
      question: "Who is known as the father of physics?",
      category: "Science",
      options: { a: "Albert Einstein", b: "Isaac Newton", c: "Galileo Galilei", d: "Marie Curie" },
      correctAnswer: "b",
    },
    {
      question: "What is the powerhouse of the cell?",
      category: "Science",
      options: { a: "Nucleus", b: "Mitochondria", c: "Ribosome", d: "Endoplasmic Reticulum" },
      correctAnswer: "b",
    },
    {
      question: "Which planet is known as the Red Planet?",
      category: "Science",
      options: { a: "Mars", b: "Jupiter", c: "Saturn", d: "Venus" },
      correctAnswer: "a",
    },
    {
      question: "What is the chemical symbol for gold?",
      category: "Science",
      options: { a: "Au", b: "Ag", c: "Fe", d: "Hg" },
      correctAnswer: "a",
    },
    {
      question: "How many elements are there in the periodic table?",
      category: "Science",
      options: { a: "118", b: "120", c: "122", d: "124" },
      correctAnswer: "a",
    },
    {
      question: "What force keeps planets in orbit around the sun?",
      category: "Science",
      options: { a: "Magnetic Force", b: "Gravity", c: "Electromagnetic Force", d: "Friction" },
      correctAnswer: "b",
    },
    {
      question: "What is the boiling point of water at sea level?",
      category: "Science",
      options: { a: "90°C", b: "100°C", c: "110°C", d: "120°C" },
      correctAnswer: "b",
    },
    {
      question: "Who developed the theory of relativity?",
      category: "Science",
      options: { a: "Isaac Newton", b: "Albert Einstein", c: "Stephen Hawking", d: "Galileo Galilei" },
      correctAnswer: "b",
    },
    {
      question: "What is the smallest unit of matter?",
      category: "Science",
      options: { a: "Molecule", b: "Atom", c: "Proton", d: "Electron" },
      correctAnswer: "b",
    },
    {
      question: "Which element is needed for photosynthesis to occur?",
      category: "Science",
      options: { a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Hydrogen" },
      correctAnswer: "b",
    },
    {
      question: "What is the most abundant gas in the Earth's atmosphere?",
      category: "Science",
      options: { a: "Oxygen", b: "Carbon Dioxide", c: "Nitrogen", d: "Argon" },
      correctAnswer: "c",
    },
    {
      question: "Who discovered penicillin?",
      category: "Science",
      options: { a: "Marie Curie", b: "Alexander Fleming", c: "Louis Pasteur", d: "Joseph Lister" },
      correctAnswer: "b",
    },
    {
      question: "Which planet is known as the Morning Star or the Evening Star?",
      category: "Science",
      options: { a: "Mars", b: "Jupiter", c: "Venus", d: "Mercury" },
      correctAnswer: "c",
    },
    {
      question: "What is the chemical symbol for oxygen?",
      category: "Science",
      options: { a: "O", b: "Ox", c: "Oy", d: "Oz" },
      correctAnswer: "a",
    },
  
    // Literature
    {
      question: "Who wrote 'Romeo and Juliet'?",
      category: "Literature",
      options: { a: "Charles Dickens", b: "William Shakespeare", c: "Jane Austen", d: "Leo Tolstoy" },
      correctAnswer: "b",
    },
    {
      question: "In which novel would you find the character Frodo Baggins?",
      category: "Literature",
      options: { a: "Harry Potter", b: "The Hobbit", c: "The Lord of the Rings", d: "The Chronicles of Narnia" },
      correctAnswer: "c",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      category: "Literature",
      options: { a: "Harper Lee", b: "Mark Twain", c: "F. Scott Fitzgerald", d: "Ernest Hemingway" },
      correctAnswer: "a",
    },
    {
      question: "What is the name of the fictional African country in the novel 'Things Fall Apart'?",
      category: "Literature",
      options: { a: "Nigeria", b: "Umuofia", c: "Zamunda", d: "Wakanda" },
      correctAnswer: "b",
    },
    {
      question: "Who wrote '1984'?",
      category: "Literature",
      options: { a: "Aldous Huxley", b: "George Orwell", c: "Ray Bradbury", d: "J.D. Salinger" },
      correctAnswer: "b",
    },
    {
      question: "Which novel begins with the line 'Call me Ishmael'?",
      category: "Literature",
      options: { a: "Moby-Dick", b: "The Great Gatsby", c: "Pride and Prejudice", d: "The Catcher in the Rye" },
      correctAnswer: "a",
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      category: "Literature",
      options: { a: "Emily Brontë", b: "Jane Austen", c: "Charlotte Brontë", d: "Mary Shelley" },
      correctAnswer: "b",
    },
    {
      question: "What is the name of the pig in 'Charlotte's Web'?",
      category: "Literature",
      options: { a: "Wilbur", b: "Babe", c: "Piglet", d: "Napoleon" },
      correctAnswer: "a",
    },
    {
      question: "Which novel features the character Atticus Finch?",
      category: "Literature",
      options: { a: "The Great Gatsby", b: "To Kill a Mockingbird", c: "The Catcher in the Rye", d: "1984" },
      correctAnswer: "b",
    },
    {
      question: "Who wrote 'The Grapes of Wrath'?",
      category: "Literature",
      options: { a: "John Steinbeck", b: "Ernest Hemingway", c: "F. Scott Fitzgerald", d: "Mark Twain" },
      correctAnswer: "a",
    },
    {
      question: "Which play features the characters Rosencrantz and Guildenstern?",
      category: "Literature",
      options: { a: "Macbeth", b: "Othello", c: "Hamlet", d: "Romeo and Juliet" },
      correctAnswer: "c",
    },
    {
      question: "Who wrote 'Brave New World'?",
      category: "Literature",
      options: { a: "George Orwell", b: "Aldous Huxley", c: "Ray Bradbury", d: "H.G. Wells" },
      correctAnswer: "b",
    },
    {
      question: "What is the name of the protagonist in 'The Catcher in the Rye'?",
      category: "Literature",
      options: { a: "Holden Caulfield", b: "Jay Gatsby", c: "Tom Sawyer", d: "Harry Potter" },
      correctAnswer: "a",
    },
    {
      question: "Who wrote 'The Picture of Dorian Gray'?",
      category: "Literature",
      options: { a: "Oscar Wilde", b: "Charles Dickens", c: "Mark Twain", d: "F. Scott Fitzgerald" },
      correctAnswer: "a",
    },
    {
      question: "Which novel is set in Airstrip One, a province of the superstate Oceania?",
      category: "Literature",
      options: { a: "Brave New World", b: "Fahrenheit 451", c: "1984", d: "Animal Farm" },
      correctAnswer: "c",
    },
    {
      question: "Who wrote 'The Hobbit'?",
      category: "Literature",
      options: { a: "C.S. Lewis", b: "J.R.R. Tolkien", c: "George R.R. Martin", d: "J.K. Rowling" },
      correctAnswer: "b",
    },
    {
      question: "Which novel features the character Jay Gatsby?",
      category: "Literature",
      options: { a: "The Great Gatsby", b: "1984", c: "To Kill a Mockingbird", d: "Pride and Prejudice" },
      correctAnswer: "a",
    },
    {
      question: "Who wrote 'Jane Eyre'?",
      category: "Literature",
      options: { a: "Charlotte Brontë", b: "Emily Brontë", c: "Jane Austen", d: "Mary Shelley" },
      correctAnswer: "a",
    },
    {
      question: "Which novel features the character Scout Finch?",
      category: "Literature",
      options: { a: "To Kill a Mockingbird", b: "The Catcher in the Rye", c: "1984", d: "The Great Gatsby" },
      correctAnswer: "a",
    },
    {
      question: "Who wrote 'The Chronicles of Narnia'?",
      category: "Literature",
      options: { a: "J.R.R. Tolkien", b: "C.S. Lewis", c: "George R.R. Martin", d: "J.K. Rowling" },
      correctAnswer: "b",
    },
    {
      question: "What is the name of Sherlock Holmes' loyal friend and companion?",
      category: "Literature",
      options: { a: "Watson", b: "Lestrade", c: "Moriarty", d: "Hudson" },
      correctAnswer: "a",
    },
  ];
  export default quizDictionary;
  