import { server } from './__tests__/screens/server';

// Start API mocking before tests
beforeAll(() => {
    console.log('server beforeAll');
    server.listen()
});

// Reset handlers after each test to prevent state leaks
afterEach(() => {
    console.log('server afterEach');
    server.resetHandlers()
});

// Stop server after all tests are complete
afterAll(() => {
    console.log('server close');
    server.close()
});