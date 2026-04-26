const { bakePie } = require('../src/pie');

describe('Pie Baker Functionality', () => {
  test('should return a success message when all essential ingredients are included', () => {
    const ingredients = ['flour', 'sugar', 'butter', 'apples'];
    const result = bakePie('apple', ingredients);
    expect(result).toBe('Successfully baked a apple pie!');
  });

  test('should successfully bake a cherry pie', () => {
    const ingredients = ['flour', 'sugar', 'butter', 'cherries'];
    const result = bakePie('cherry', ingredients);
    expect(result).toBe('Successfully baked a cherry pie!');
  });

  test('should bake a pumpkin pie when all essentials are included', () => {
    const ingredients = ['flour', 'sugar', 'butter', 'pumpkin'];
    const result = bakePie('pumpkin', ingredients);
    expect(result).toBe('Successfully baked a pumpkin pie!');
  });

  test('should call process.exit(1) if an essential ingredient is missing', () => {
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const badIngredients = ['sugar', 'butter'];
    bakePie('apple', badIngredients);
    expect(exitSpy).toHaveBeenCalledWith(1);
    exitSpy.mockRestore();
  });
});