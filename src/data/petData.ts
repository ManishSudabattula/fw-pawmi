
export interface Pet {
  id: string;
  name: string;
  type: 'Dog' | 'Cat';
  breed: string;
  age: string;
  gender: 'Male' | 'Female';
  size: 'Small' | 'Medium' | 'Large';
  status: 'Available' | 'Adopted' | 'Pending';
  location: string;
  description: string;
  healthStatus: ('Healthy' | 'Vaccinated' | 'Neutered' | 'Spayed' | 'Special Needs' | 'Injured')[];
  behavior: ('Friendly' | 'Good with kids' | 'Good with pets' | 'Energetic' | 'Calm' | 'Shy')[];
  image: string;
  galleryImages?: string[];
  foundDate: string;
  postedBy: string;
  postedDate: string;
}

export const pets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Female',
    size: 'Medium',
    status: 'Available',
    location: 'San Francisco, CA',
    description: 'Friendly and energetic Golden Retriever, loves playing fetch and cuddles.',
    healthStatus: ['Healthy', 'Vaccinated'],
    behavior: ['Friendly', 'Energetic', 'Good with kids'],
    image: '/lovable-uploads/1b8c2fb2-356d-4c6b-9ebf-24e90126bbfb.png',
    galleryImages: [
      '/lovable-uploads/1b8c2fb2-356d-4c6b-9ebf-24e90126bbfb.png',
      '/lovable-uploads/53d0b19c-f43d-447c-afb4-97e8263bedaf.png',
      '/lovable-uploads/5f433367-656e-4c02-ad09-42e20f3b62cf.png'
    ],
    foundDate: '2025-01-15',
    postedBy: 'Central Park Animal Shelter',
    postedDate: '2025-01-15',
  },
  {
    id: '2',
    name: 'Oliver',
    type: 'Cat',
    breed: 'Persian Cat',
    age: '5 years',
    gender: 'Male',
    size: 'Medium',
    status: 'Available',
    location: 'Los Angeles, CA',
    description: 'Gentle senior cat looking for a quiet home. Very affectionate.',
    healthStatus: ['Healthy', 'Vaccinated', 'Neutered'],
    behavior: ['Calm', 'Friendly'],
    image: '/lovable-uploads/65c87fbc-19f7-4321-83ab-50f77fbd2649.png',
    foundDate: '2025-01-10',
    postedBy: 'LA Pet Rescue',
    postedDate: '2025-01-10',
  },
  {
    id: '3',
    name: 'Max',
    type: 'Dog',
    breed: 'Labrador',
    age: '1 year',
    gender: 'Male',
    size: 'Large',
    status: 'Adopted',
    location: 'Seattle, WA',
    description: 'Playful Husky puppy, great with kids and other dogs.',
    healthStatus: ['Healthy', 'Vaccinated'],
    behavior: ['Energetic', 'Friendly', 'Good with kids', 'Good with pets'],
    image: '/lovable-uploads/2db94f29-c5f0-4f34-801d-3ee081d17f3c.png',
    foundDate: '2025-01-05',
    postedBy: 'Seattle Animal Shelter',
    postedDate: '2025-01-05',
  },
  {
    id: '4',
    name: 'Charlie',
    type: 'Dog',
    breed: 'French Bulldog',
    age: '3 years',
    gender: 'Male',
    size: 'Small',
    status: 'Available',
    location: 'New York, NY',
    description: 'Charming little fellow, loves attention and short walks.',
    healthStatus: ['Healthy', 'Vaccinated', 'Neutered'],
    behavior: ['Friendly', 'Calm', 'Good with kids'],
    image: '/lovable-uploads/5063052b-d40c-4f3a-b6cb-110a23a992bc.png',
    foundDate: '2025-01-01',
    postedBy: 'NYC Pet Adoption Center',
    postedDate: '2025-01-01',
  },
  {
    id: '5',
    name: 'Bella',
    type: 'Cat',
    breed: 'Siamese',
    age: '2 years',
    gender: 'Female',
    size: 'Small',
    status: 'Available',
    location: 'Portland, OR',
    description: 'Elegant and vocal companion, loves to interact with humans.',
    healthStatus: ['Healthy', 'Vaccinated', 'Spayed'],
    behavior: ['Friendly', 'Energetic'],
    image: '/lovable-uploads/893a89ce-5c34-4be1-8304-884c34f541be.png',
    foundDate: '2024-12-30',
    postedBy: 'Oregon Feline Rescue',
    postedDate: '2024-12-30',
  },
  {
    id: '6',
    name: 'Lucy',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '4 years',
    gender: 'Female',
    size: 'Large',
    status: 'Adopted',
    location: 'Chicago, IL',
    description: 'Majestic and friendly giant, gets along well with everyone.',
    healthStatus: ['Healthy', 'Vaccinated', 'Spayed'],
    behavior: ['Calm', 'Friendly', 'Good with kids', 'Good with pets'],
    image: '/lovable-uploads/ffabb1e3-cfcf-4a98-a321-892f49899a8c.png',
    foundDate: '2024-12-25',
    postedBy: 'Chicago Cat Rescue',
    postedDate: '2024-12-25',
  },
];

export const users = [
  {
    id: '1',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    location: 'San Francisco, CA',
    profileImage: '/lovable-uploads/2e705562-9660-462b-aa38-1984632389a1.png',
    adoptedPets: ['3'],
    favorites: ['1', '2'],
    listedPets: ['1', '4', '5']
  }
];
