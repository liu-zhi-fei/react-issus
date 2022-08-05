import React from 'react';
import { render, act} from '@testing-library/react';
import Clock from '../Click.js';

describe('Clock', () => {
    jest.useFakeTimers();
    test('Refresh every second', async () => {
        const children = jest.fn((time) => time);

        render(<Clock >{children}</Clock>);

        expect(children).toHaveBeenCalledTimes(1);
        act(() => jest.advanceTimersByTime(3000));

        // jest
        // Expected number of calls: 4
        // Received number of calls: 2
        expect(children).toHaveBeenCalledTimes(4);
    });
});
