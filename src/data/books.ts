export interface BookType {
  _id: string;
  title: string;
  price: number;
  rating: number;
  copy: number; // available copies
  bookImage: string;
}


export const books: BookType[] = [
  {
    _id: "1",
    title: "JavaScript: The Definitive Guide",
    price: 1200,
    rating: 5,
    copy: 15,
    bookImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
  },
  {
    _id: "2",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    price: 950,
    rating: 5,
    copy: 20,
    bookImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    _id: "3",
    title: "Python Crash Course",
    price: 800,
    rating: 4,
    copy: 10,
    bookImage: "https://images.unsplash.com/photo-1523473827534-86c1c8c0d3de"
  },
  {
    _id: "4",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    price: 1500,
    rating: 5,
    copy: 7,
    bookImage: "https://images.unsplash.com/photo-1544717305-996b815c338c"
  },
  {
    _id: "5",
    title: "Introduction to Algorithms",
    price: 1800,
    rating: 5,
    copy: 12,
    bookImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  },
  {
    _id: "6",
    title: "You Don’t Know JS Yet",
    price: 650,
    rating: 4,
    copy: 18,
    bookImage: "https://images.unsplash.com/photo-1581091012184-5c8f4d3a0840"
  },
  {
    _id: "7",
    title: "The Pragmatic Programmer",
    price: 1100,
    rating: 5,
    copy: 9,
    bookImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
  },
  {
    _id: "8",
    title: "Artificial Intelligence: A Modern Approach",
    price: 2000,
    rating: 5,
    copy: 6,
    bookImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765"
  },
  {
    _id: "9",
    title: "Deep Learning with Python",
    price: 1400,
    rating: 4,
    copy: 11,
    bookImage: "https://images.unsplash.com/photo-1528207776546-365bb710ee93"
  }
];
