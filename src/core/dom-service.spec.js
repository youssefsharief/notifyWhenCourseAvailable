const service = require('./dom-service.js')

describe('dom service', () => {
    describe('get remaining seats', () => {
        it('should return a number', async () => {
            const body = require('../../fixtures/course-listing')
            const result = await service.getRemainingSeats(32535, body)
            expect(result).toBe(0)
        })
    });
});