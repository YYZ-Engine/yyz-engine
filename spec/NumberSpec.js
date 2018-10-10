const number = require('../libs/number');

describe('find_max', () => {
	var array = [];
	it('checks if 123 is the max value of an array [123,9,23,45,89]', () => {
		array = [123, 9, 23, 45, 89];
		expect(number.find_max(array)).toBe(123);
	});
	it('checks if 0 is the max value of an array [-10,0,-8,-5,0]', () => {
		array = [-10, 0, -8, -5, 0];
		expect(number.find_max(array)).toBe(0);
	});
	it('checks if 30 is the max value of an array [29,9,5,25,30]', () => {
		array = [29, 9, 5, 25, 30];
		expect(number.find_max(array)).toBe(30);
	});
});

describe('find_min', () => {
	var array = [];
	it('checks if 9 is the min value of an array [123,9,23,45,89]', () => {
		array = [123, 9, 23, 45, 89];
		expect(number.find_min(array)).toBe(9);
	});
	it('checks if -10 is the min value of an array [-10,0,-8,-5,0]', () => {
		array = [-10, 0, -8, -5, 0];
		expect(number.find_min(array)).toBe(-10);
	});
	it('checks if 5 is the min value of an array [29,9,5,25,30]', () => {
		array = [29, 9, 5, 25, 30];
		expect(number.find_min(array)).toBe(5);
	});
});

describe('find_max_min', () => {
	var array = [];
	it('checks if 123 and 45 are the max and min value of an array [123,9,23,45,89]', () => {
		array = [123, 9, 23, 45, 89];
		expect(number.find_max_min(array)).toEqual([123, 9]);
	});
	it('checks if 0 and -10  are the max and min value of an array [-10,0,-8,-5,0]', () => {
		array = [-10, 0, -8, -5, 0];
		expect(number.find_max_min(array)).toEqual([0, -10]);
	});
	it('checks if 30 and 5 are the max and min value of an array [29,9,5,25,30]', () => {
		array = [29, 9, 5, 25, 30];
		expect(number.find_max_min(array)).toEqual([30, 5]);
	});
});

describe('factorial', () => {
	it('checks if 1 is the factorial of 0', () => {
		expect(number.factorial(0)).toEqual(1);
	});
	it('checks if 1 is the factorial of 1', () => {
		expect(number.factorial(1)).toEqual(1);
	});
	it('checks if 2 is the factorial of 2', () => {
		expect(number.factorial(2)).toEqual(2);
	});
	it('checks if 6 is the factorial of 3', () => {
		expect(number.factorial(3)).toEqual(6);
	});
	it('checks if 120 is the factorial of 5', () => {
		expect(number.factorial(5)).toEqual(120);
	});
	it('checks if 362880 is the factorial of 9', () => {
		expect(number.factorial(9)).toEqual(362880);
	});
});
