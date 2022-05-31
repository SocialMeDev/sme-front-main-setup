import PersonItem from '.'

export default {
  component: PersonItem,
  title: 'Recipe/Items/Person',
  args: {
    users: [
      {
        id: 1,
        src: 'https://randomuser.me/api/portraits/men/32.jpg',
        primaryText: 'Jonh Cena',
        secondaryText: '123.321.123-95'
      }
    ]
  },
  argTypes: {
    users: {
      name: 'users',
      table: {
        type: {
          summary: 'Person[]'
        }
      }
    }
  }
}

export const Default = (args) => {
  return (
    <>
      {args.users.map((user) => (
        <PersonItem key={user.id} {...user} />
      ))}
    </>
  )
}
