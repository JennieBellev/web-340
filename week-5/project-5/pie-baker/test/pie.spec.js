const { bakePie } = require('../src/pie');

describe("Pie Baker Functionality", () => {
  test("should return a success message when all essential ingredients are included", () => {
    const ingredients = ['flour', 'sugar', 'butter', 'apples'];
    const result = bakePie('apple', ingredients);
    expect(result).toBe("Successfully baked a apple pie!");
    });

    test(" should successfully bake a cherry pie", () => {
    const ingredients = ['flour', 'sugar', 'butter', 'cherries'];
    const result = bakePie('cherry', ingredients);
    expect(result).toContain("Successfully baked a cherry pie!");
    });

    test(" should call process.exit(1) if an essentail ingredient is missing", () => {

    const exitSpy = jest.spyOn(process, 'exit').mockImplementation((code) => {
    });

    const badIngredients = ['sugar', 'butter']; // Oh, no! Flour is missing!
    bakePie('apple', badIngredients);

    expect(exitSpy).toHaveBeenCalledWith(1);

    exitSpy.mockRestore();
    });
});