export default function useEnvironment(valueInDevelopment, valueInProduction) {
  const isDevelopment = process.env.NODE_ENV === 'development'
  if (isDevelopment) {
    return valueInDevelopment || valueInProduction
  }
  return valueInProduction || valueInDevelopment
}
