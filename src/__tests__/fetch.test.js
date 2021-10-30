import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import  Fetch from '../pages/index'

const server = setupServer(
    rest.get('/', (req, res, next) => {
        return res(ctx.json({greeting: 'hello there'}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Loads all items, total 931', async () => {
    render(<Fetch url="/"/>);
    
    expect(screen.getByText('Lippie Pencil').toBeInTheDocument());
})