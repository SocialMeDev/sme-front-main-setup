import API from 'services/socialMeApis/modules/citizen'

export default async function checkOrganizationalUnitSlug({
  institutionSlug,
  organizationalUnitSlug
}) {
  const params = {
    operation: ['OrganizationalUnit', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      organizationalUnitSlug
    }
  }

  const response = await API(params)

  return response
}
