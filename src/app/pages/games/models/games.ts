import {Image} from '../../../shared/models/shared';

export interface GamesInterface {
    id: number;
    title: string;
    thumbnail: Image;
    shortDescription: string;
    gameUrl: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    releaseDate: string;
}