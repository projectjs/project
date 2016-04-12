import publicApi from "../lib/project";

var currentVersion = require('../package.json').version;

describe("The project public API", () => {

    it('should have a version property', () => {
        expect(publicApi.version).toBe(currentVersion);
    });

    it('should have a new command');

    it('should have an init command');

    it('should have a deps command');

    it('should have a test command');

    it('should have a build command');

    it('should have a deploy command');
});
