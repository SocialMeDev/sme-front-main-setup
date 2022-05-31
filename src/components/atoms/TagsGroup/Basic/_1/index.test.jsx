import { screen, render, fireEvent } from '@testing-library/react'

import TagsGroup from '.'

describe('TagsGroup Component', () => {
  test('Should render the TagsGroup without propertys', async () => {
    const { container } = render(<TagsGroup />)

    expect(container).not.toBeNull()
  })

  test('onRemoveTag function should remove a selected tag', async () => {
    let tags = [{ value: 'Tags', label: 'Tags' }]

    const { getByRole, rerender } = render(
      <TagsGroup
        tags={tags}
        onRemoveTag={(removedTagValue) => {
          tags = tags.filter((tag) => tag.value !== removedTagValue)
        }}
      />
    )

    fireEvent.click(getByRole('button'))

    expect(screen.getByText('Tags')).toBeInTheDocument()

    rerender(<TagsGroup tags={tags} />)

    expect(screen.queryByText('Tags')).not.toBeInTheDocument()
  })
})
