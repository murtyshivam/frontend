// src/StringCalculator.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { add } from './stringCalculator';

// Tests for the add function
describe('add function', () => {
    test('add("") should return 0', () => {
        expect(add("")).toBe(0);
    });

    test('add("1") should return 1', () => {
        expect(add("1")).toBe(1);
    });

    test('add("1,5") should return 6', () => {
        expect(add("1,5")).toBe(6);
    });

    test('add("1\\n2,3") should return 6', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('add("//;\n1;2") should return 3', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('add("-1,2") should throw an exception', () => {
        expect(() => add("-1,2")).toThrow("Negative numbers not allowed: -1");
    });
});
