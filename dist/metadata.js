"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function metadata(spot) {
    const h = spot.height * _1.WIDTH;
    const w = spot.width * _1.WIDTH;
    const x = spot.x * _1.WIDTH;
    const y = spot.y * _1.WIDTH;
    return {
        image: `${_1.BASE_URL}spot-${spot.tokenId}-${spot.x}-${spot.y}-${spot.width}-${spot.height}.svg`,
        external_url: _1.BASE_URL,
        description: `This NFT controls the ${w}x${h} wide space at (${x},${y}). If you own this NFT you can change the title, image and URL for this space.`,
        name: `SpookySpace.site #${spot.tokenId}: ${w}x${h} at (${x},${y})`,
        attributes: [
            { "trait_type": "x", "value": x },
            { "trait_type": "y", "value": y },
            { "trait_type": "width", "value": w },
            { "trait_type": "height", "value": h },
            { "trait_type": "size", "value": (w * h) },
            { "trait_type": "edition", "value": spot.tokenId }
        ]
    };
}
exports.default = metadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3QkFBOEM7QUFFOUMsU0FBd0IsUUFBUSxDQUFDLElBQWM7SUFDM0MsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFLLENBQUM7SUFDOUIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFLLENBQUM7SUFDN0IsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFLLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFLLENBQUM7SUFDekIsT0FBTztRQUNILEtBQUssRUFBRSxHQUFHLFdBQVEsUUFBUSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLE1BQU07UUFDN0YsWUFBWSxFQUFFLFdBQVE7UUFDdEIsV0FBVyxFQUFFLHlCQUF5QixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsZ0ZBQWdGO1FBQ3JKLElBQUksRUFBRSxxQkFBcUIsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDbkUsVUFBVSxFQUFFO1lBQ1IsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDakMsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDakMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDckMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7WUFDdEMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMxQyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7U0FDckQ7S0FDSixDQUFBO0FBRUwsQ0FBQztBQXBCRCwyQkFvQkMifQ==