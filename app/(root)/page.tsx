import HeaderBox from "@/components/HeaderBox";
import RightSiderbar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Michael",
    lastName: "Carlin",
    email: "michae.carlin@edge.co.uk",
  };

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

      <RightSiderbar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 124.4 }, { currentBalance: 401.23 }]}
      />
    </section>
  );
};

export default Home;
