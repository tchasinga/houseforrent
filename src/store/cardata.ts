interface Card {
    id: number;
    image: string;
    price: string;
    title: string;
    description: string;
  }
  
  const card: Card[] = [
    {
      id: 1,
      image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "50000 Ksh",
      title: "Palace House",
      description: "Good house for family living and friends"
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      price: "47000 Ksh",
      title: "Sunset Villa",
      description: "Perfect getaway with a cozy feel"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      price: "52000 Ksh",
      title: "Luxury Home",
      description: "Elegant house for premium comfort"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "60000 Ksh",
      title: "Mansion Bliss",
      description: "Spacious and serene environment"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "45000 Ksh",
      title: "Modern Residence",
      description: "Contemporary home for smart living"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "43000 Ksh",
      title: "Green Haven",
      description: "Eco-friendly home with nature views"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "40000 Ksh",
      title: "Cozy Cottage",
      description: "Ideal for small families and peace lovers"
    },
    {
      id: 8,
      image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "70000 Ksh",
      title: "Beachside Villa",
      description: "Wake up to ocean waves and golden sands"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1561753757-d8880c5a3551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "49000 Ksh",
      title: "Glass House",
      description: "Sleek design with lots of natural light"
    },
    {
      id: 10,
      image: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "46000 Ksh",
      title: "Nature Bungalow",
      description: "Escape city noise in this nature-friendly home"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "55000 Ksh",
      title: "Urban Palace",
      description: "Stylish city home with modern amenities"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "44000 Ksh",
      title: "Wooden Retreat",
      description: "Rustic charm with modern touches"
    },
    {
      id: 13,
      image: "https://source.unsplash.com/featured/?house,pool",
      price: "62000 Ksh",
      title: "Poolside Paradise",
      description: "Cool off and relax in style"
    },
    {
      id: 14,
      image: "https://source.unsplash.com/featured/?apartment,highrise",
      price: "48000 Ksh",
      title: "Skyview Apartment",
      description: "High-rise living with city views"
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1571654443889-863482ff3f42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      price: "53000 Ksh",
      title: "Balcony Bliss",
      description: "Enjoy sunsets and fresh air daily"
    },
    {
      id: 16,
      image: "https://source.unsplash.com/featured/?duplex,modern",
      price: "57000 Ksh",
      title: "Modern Duplex",
      description: "Spacious two-level home for big families"
    },
    {
      id: 17,
      image: "https://source.unsplash.com/featured/?villa,interior",
      price: "61000 Ksh",
      title: "Interior Charm",
      description: "Beautiful interiors with luxury finish"
    },
    {
      id: 18,
      image: "https://source.unsplash.com/featured/?residence,classic",
      price: "45000 Ksh",
      title: "Classic Residence",
      description: "Timeless design with homey comfort"
    },
    {
      id: 19,
      image: "https://source.unsplash.com/featured/?house,lake",
      price: "68000 Ksh",
      title: "Lakeside Dream",
      description: "Calm lake views and fresh air every day"
    },
    {
      id: 20,
      image: "https://source.unsplash.com/featured/?villa,sunset",
      price: "75000 Ksh",
      title: "Sunset Escape",
      description: "Golden hour vibes and luxury finish"
    }
  ];
  

export default card;