
export const importAll = (requireContext: any) => requireContext.keys().forEach(requireContext)
try {
  importAll((require as any).context('../../assets/icons/', true, /\.svg$/))
} catch (error) {
  console.log(error)
}


