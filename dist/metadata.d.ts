import { SpotData } from '.';
export default function metadata(spot: SpotData): {
    image: string;
    external_url: string;
    description: string;
    name: string;
    attributes: {
        trait_type: string;
        value: number;
    }[];
};
