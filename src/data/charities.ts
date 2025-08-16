import type { CharitiesType } from "../domain/CharitiesType";

export const charities: CharitiesType[] = [
    {
        id: 1,
        title: 'First Charity Project',
        category: 'Money',
        thumbnail: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80',
        pledged: 2000,
        target: 10000,
        date_end: new Date('10 December 2020'),
        profile_photo: 'https://live.staticflickr.com/65535/50216276552_623a9ac126_z.jpg',
        profile_name: 'Feronica Felio',
        no_pledges: 0
    }
];