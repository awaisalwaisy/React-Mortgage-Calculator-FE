export const useMortgageCalculator = ({ data }: MortgageCalcParams) => {
  // convert yearly interest to monthly
  const m_interest = data.interestRate / 1200;

  // convert loan term to months
  const m_term = data.termOfLoan * 12;

  // calculate monthly payment as per the formula: P * (r * (1 + r)^n) / ((1 + r)^n - 1)

  /**
   * P = principle loan amount
   * r = monthly interest rate
   * n = loan term in months
   */

  const m_payment =
    (data.principleLoanAmount * m_interest * Math.pow(1 + m_interest, m_term)) /
    (Math.pow(1 + m_interest, m_term) - 1);

  return {
    monthlyPayment: Math.round(m_payment),
  };
};
