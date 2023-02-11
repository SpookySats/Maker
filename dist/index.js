"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WIDTH = exports.BASE_URL = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const svg_1 = __importDefault(require("./svg"));
const metadata_1 = __importDefault(require("./metadata"));
exports.BASE_URL = 'nft.spookspace.site/';
exports.WIDTH = 20;
function spotFromPath(path) {
    const split = path.split('-');
    const splitNums = split.map(e => parseInt(e, 10));
    if (split[0] !== 'spot' || split.length !== 6) {
        throw new Error('Invalid data');
    }
    const tokenId = splitNums[1];
    if (isNaN(tokenId) || tokenId < 0 || tokenId > 2500) {
        throw new Error('Invalid data');
    }
    for (let i = 2; i < 6; i += 1) {
        const val = splitNums[i];
        if (isNaN(val) || val < 0 || val > 50) {
            throw new Error('Invalid data');
        }
    }
    const spot = {
        tokenId,
        x: splitNums[2],
        y: splitNums[3],
        width: splitNums[4],
        height: splitNums[5],
    };
    return spot;
}
//this code creates an HTTP server that serves either a JSON or an SVG response based on the URL path.
(async () => {
    const app = (0, express_1.default)();
    app.disable('x-powered-by'); // disables header "X-Powered-By: Express"
    app.set('trust proxy', 1); // trust nginx reverse proxy
    app.use((0, cors_1.default)({}));
    // for auth
    app.get('/', (req, res) => {
        res.setHeader('content-type', 'text/plain');
        res.send('');
    });
    app.get("/:path", (req, res, next) => {
        // res.setHeader('Cache-Control', 'public, max-age=86400'); // tell cloudflare to cache everything for some time
        const path = req.params.path;
        if (path.slice(-5) === '.json') {
            const spot = spotFromPath(path.slice(0, -4));
            res.json((0, metadata_1.default)(spot));
        }
        else if (path.slice(-4) === '.svg') {
            const spot = spotFromPath(path.slice(0, -4));
            const svgString = (0, svg_1.default)(spot);
            res.setHeader('Content-Type', 'image/svg+xml');
            res.end(svgString);
        }
        else {
            next();
        }
    });
    app.all('*', function (req, res, next) {
        res.status(404).end('');
    });
    app.use(function errorHandler(err, req, res, next) {
        res.status(400).end('');
    });
    app.listen(4101, '127.0.0.1', () => console.log('Webserver started'));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQWlFO0FBQ2pFLGdEQUF3QjtBQUN4QixnREFBd0I7QUFDeEIsMERBQWtDO0FBRXJCLFFBQUEsUUFBUSxHQUFHLHNCQUFzQixDQUFDO0FBQ2xDLFFBQUEsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQVV4QixTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNuQztJQUNELE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUU7UUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNuQztJQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMzQixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ25D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