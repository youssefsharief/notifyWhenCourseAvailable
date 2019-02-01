const service = require('./api-service.js')
const config = require('../config/config')

// there might be a problem here
describe('api service', () => {
    describe('request to AUC course offerings', () => {
        it('should return a number', async () => {
            const result = await service.getRemainingSeats(config.course.term, config.course.subject)
            console.log(result)
            expect(result).toBeTruthy()
        })
    });
});