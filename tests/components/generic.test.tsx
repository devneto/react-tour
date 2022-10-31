import React from 'react'
import { render } from '@testing-library/react'
import { Generic } from '../../src'

describe('components/generic.tsx', () => {
  it('renders without crashing', () => {
    render(<Generic />)
  })
})
