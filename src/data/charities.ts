import type { CharitiesType } from "../_domain/CharitiesType";

export const charities: CharitiesType[] = [
    {
        id: 1,
        title: 'First Charity Project',
        category: 'Money',
        thumbnail: 'https://live.staticflickr.com/6016/5958041789_ded08d42d5_z.jpg',
        pledged: 2000,
        target: 10000,
        date_end: new Date('10 December 2020'),
        profile_photo: 'https://live.staticflickr.com/65535/50216276552_623a9ac126_z.jpg',
        profile_name: 'Feronica Felio',
        no_pledges: 0
    },
    {
        id: 2,
        title: 'Second Charity Project',
        category: 'Water',
        thumbnail: 'https://images.unsplash.com/photo-1444664361762-afba083a4d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w',
        pledged: 9000,
        target: 10000,
        date_end: new Date('17 August 2020'),
        profile_photo: 'https://live.staticflickr.com/65535/50216276552_623a9ac126_z.jpg',
        profile_name: 'Feronica Felio',
        no_pledges: 0
    },
    {
        id: 3,
        title: 'Third Charity Project',
        category: 'Clothes',
        thumbnail: 'https://live.staticflickr.com/6016/5958041789_ded08d42d5_z.jpg',
        pledged: 10,
        target: 10000,
        date_end: new Date('10 December 2020'),
        profile_photo: 'https://live.staticflickr.com/65535/50216276552_623a9ac126_z.jpg',
        profile_name: 'Feronica Felio',
        no_pledges: 0
    }
];