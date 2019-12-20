
// formatação da moeda para o componente de"preço"
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})