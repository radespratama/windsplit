const wtl = require("..");

test("should remove new lines and whitespaces", () => {
  const classname = `
		bg-gray-900
		text-base
		mx-8
	`;
  expect(wtl(classname)).toBe("bg-gray-900 text-base mx-8");
});

test("should handle template literals", () => {
  const someTruthyState = true;
  const someFalsyState = false;
  const classname = `
    bg-gray-900
    text-base
    mx-8
		${someTruthyState && `mt-3`}
		${someFalsyState && `mr-3`}
	`;
  expect(wtl(classname)).toBe("bg-gray-900 text-base mx-8 mt-3");
  expect(wtl(classname)).not.toBe("bg-gray-900 text-base mx-8 mt-3 mr-3");
});
