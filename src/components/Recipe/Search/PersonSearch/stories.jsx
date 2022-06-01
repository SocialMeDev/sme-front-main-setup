import { CreateButton } from 'components'
import searchOnSocialMe from 'services/socialMeApis/modules/citizen/calls/person/searchOnSocialMe'

import UserDrawer from './components/UserDrawer'
import PersonSearch from '.'

export default {
  component: PersonSearch,
  title: 'Recipe/Search/Person',
  args: {
    defaultFilters: {
      kind: {
        $eq: 'PF'
      }
    },
    questions: {
      name: true,
      cpf_number: true,
      cnpj_number: false,
      cns_number: false,
      rg_number: false,
      birth_date: false,
      mother_name: false,
      father_name: false
    },
    informations: {
      avatar: true,
      name: true,
      cpf_number: true,
      cnpj_number: true
    },
    subtitles: {
      search: 'Pesquisa de usuário',
      select: 'Seleção de usuário',
      action: 'Adicionar permissões'
    },
    submitButtonText: 'Filtrar',
    title: 'Pesquisando usuários',
    actionView: UserDrawer,
    searchRoute: (filters) => searchOnSocialMe('demo', filters),
    trigger: <CreateButton>Nova usuário</CreateButton>
  },
  argTypes: {
    multiple: {
      name: 'multiple',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    actionView: {
      name: 'actionView',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    },
    searchRoute: {
      name: 'searchRoute',
      table: {
        type: {
          summary: '(filter) => void'
        }
      }
    },
    subtitles: {
      name: 'subtitles',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    fields: {
      name: 'fields',
      table: {
        type: {
          summary: '[{ name: string: sort: { by: string, order: ASC | DESC }}]'
        }
      }
    },
    trigger: {
      name: 'trigger',
      table: {
        type: {
          summary: 'ReactElement'
        }
      }
    }
  }
}

export const Default = (args) => {
  return <PersonSearch {...args} />
}
