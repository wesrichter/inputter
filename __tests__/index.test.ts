const { Texter, Emailer, Phoner, Numberer } = require('../lib/index');

test('Tests for Tester Class', () => {
    const t = new Texter('TestValue11')
    expect(t.Min(4).error).toBe(false);
    expect(t.Max(10).error).toBe(true);
    expect(t.OnlyText().error).toBe(true);
});

test('Tests for Emailer Class', () => {
    const t = new Emailer('TestValue')
    expect(t.Validate().error).toBe(true);
});

test('Tests for Phoner Class', () => {
    const t = new Phoner('TestValue11')
    expect(t.Validate().error).toBe(true);
});

test('Tests for Numberer Class', () => {
    const t = new Numberer('TestValue11')
    expect(t.Validate().error).toBe(true);
});