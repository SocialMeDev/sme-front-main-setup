import API from 'services/socialMeApis/modules/citizen'

export default async function checkOrganizationUnitSlug({
  institutionSlug,
  organizationUnitSlug
}) {
  const params = {
    operation: ['OrganizationUnit', 'CheckSlug'],
    urlParams: {
      institutionSlug,
      organizationUnitSlug
    }
  }

  const response = await API(params)

  return response
}
