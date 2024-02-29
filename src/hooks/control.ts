export const useControl = ({ setData }: ControlParams) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // convert formData values to number
    const computedValues: Record<FieldValues, number> = {
      principleLoanAmount: Number(formData.get("principleLoanAmount")),
      interestRate: Number(formData.get("interestRate")),
      termOfLoan: Number(formData.get("termOfLoan")),
    };

    setData(computedValues);
  }

  return {
    handleSubmit,
  };
};
