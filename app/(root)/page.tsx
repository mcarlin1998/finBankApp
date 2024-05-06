import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Michael" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcone"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account"
          />
          <div>
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={125000}
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Home;
