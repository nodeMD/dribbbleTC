# TestCafe example test project

# What is tested:

https://dribbble.com

Upload:
User is able to upload new file and check that it was uploaded properly.

Search form:
User is able to search for new dribbbles and check that there are results for given search parameters.

# Start

`npm install`

To run all tests on chrome: `npm test`

To run all test on headless chrome: `npm run test:h`

To run the tests concurrently (two instances of the same browser): `npm test -- -c 2`

To run all tests on all installed browsers (in parallel): `npm run allBrowsers`

# Docker

To run on docker:

`run docker build -t tests .`

`docker run -d tests`
