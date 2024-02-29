import { MortgageCalc } from "@/components";

const Home = () => {
  return (
    <main className="page">
      <h1 className="text-3xl font-semibold mb-12 text-center">
        Mortgage Calculator
      </h1>
      <MortgageCalc />
    </main>
  );
};

export default Home;
