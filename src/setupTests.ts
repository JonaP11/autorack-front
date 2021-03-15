// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// TODO: For some reason, this is only working if the test "checks API is up" exists
//   Find a way to not to rely on the aforementioned test
// import RequestSender from './api/utils/requestSender';
// (async () => {
//   const available = await RequestSender.isApiAvailable();
//
//   console.log(available);
//
//   if (!available) {
//     throw new Error('Backend API is not available. Make sure you correctly configured the URL and started it.');
//   }
// })();
