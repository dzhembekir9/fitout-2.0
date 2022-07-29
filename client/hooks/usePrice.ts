type Price = {
  centAmount: number
  fractionDigits: number
  currencyCode?: string
}

enum Currency {
  USD = '$',
}

export const usePrice = ({
  centAmount,
  fractionDigits,
  currencyCode,
}: Price) => {
  const formattedPrice = centAmount / 10 ** fractionDigits

  return Currency.USD + formattedPrice
}
