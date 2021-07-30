const helloWorld = require('./hello_world');

describe('helloWorld()', () => {
  it('文字列で「Hello, world.」が出力されること', () => {
    expect(helloWorld()).toBe('Hello, world.');
  });
});