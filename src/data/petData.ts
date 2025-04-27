
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
    image: '/lovable-uploads/1fd11465-108b-4dfd-85f7-4ba7c2e5041f.png',
    galleryImages: [
      '/lovable-uploads/1fd11465-108b-4dfd-85f7-4ba7c2e5041f.png',
      '/lovable-uploads/baa8ae45-ff06-4d10-bf7b-cbc58ff24bc1.png',
      '/lovable-uploads/9befbcb3-ae5b-43b8-adf7-0d7b9e92f840.png'
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
    image: '/lovable-uploads/99c01924-5fb7-421f-86ee-eda296008b2d.png',
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
    image: '/lovable-uploads/baa8ae45-ff06-4d10-bf7b-cbc58ff24bc1.png',
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
    image: '/lovable-uploads/32bc3869-4ce3-4bff-a7b0-cfea520c54af.png',
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
    image: '/lovable-uploads/48b9ae58-b7b7-476e-b18d-255187b73b2a.png',
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
    image: '/lovable-uploads/aed4d05f-8950-4d66-9233-0edd755b430e.png',
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
