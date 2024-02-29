import { useControl } from "@/hooks";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const MortgageCalc = () => {
  const [data, setData] = useState<Record<FieldValues, number>>({
    principleLoanAmount: 0,
    interestRate: 0,
    termOfLoan: 0,
  });

  // submit form
  const { handleSubmit } = useControl({ setData });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="number"
          label="Principle Loan Amount"
          name="principleLoanAmount"
          placeholder="500000"
          labelPlacement="outside"
          className="mb-10"
        />
        <Input
          type="number"
          label="Interest Rate"
          name="interestRate"
          placeholder="3"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">%</span>
            </div>
          }
          className="mb-10"
        />
        <Input
          type="number"
          label="Term of Loan"
          name="termOfLoan"
          placeholder="30"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">years</span>
            </div>
          }
        />
        <div className="flex justify-center mt-8">
          <Button color="secondary" type="submit">
            Calculate
          </Button>
        </div>
      </form>
      {JSON.stringify(data, null, 2)}
    </>
  );
};

export default MortgageCalc;
