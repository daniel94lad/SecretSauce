const text = 'Hola Mundo';

test('Debe contener un mundo', () => {
    expect(text).toMatch(/Mundo/);
})